"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../_components/PageRootContainer";
import { QuestionStudio__HeaderSection } from "./_components/HeaderSection";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type QuestionStudioPageModel = z.infer<typeof QuestionStudioPageModel>;

export const QuestionStudioPageModel = z.object({
  targetStudentId: z.string().describe("대상 학생 ID"),
  selectedTopics: z.array(
    z.object({
      topic: z.string().describe("출제 영역"),
      type: z.string().describe("출제 유형"),
      questionCount: z.number().describe("출제 문항 수").min(1).max(20),
    }),
  ),
  level: z.enum(["상", "중", "하"]).describe("난이도"),
  reviewedQuestionIds: z.array(z.string().describe("리뷰 완료한 문항 ID")),
  selectedQuestionIds: z.array(z.string().describe("선택한 문항 ID")),

  // 임시
  generatedQuestionModels: z.array(
    z.object({
      questionId: z.string().describe("문항 ID (UUIDv7)"),
      topic: z
        .enum(["독서", "문학", "화법과 작문", "언어", "매체"])
        .describe("출제 영역"),
      type: z
        .enum(["사실적 이해", "추론적 이해", "비판적 이해", "어휘/개념"])
        .describe("출제 유형"),
      title: z.string().describe("문항 제목"),
      choices: z.array(z.string().describe("선택지")),
      answer: z.string().describe("정답"),
      level: z.enum(["상", "중", "하"]).describe("난이도"),
      status: z
        .enum(["Passed", "ReviewNeeded", "VerificationFailed", "Rejected"])
        .describe(
          `문항 상태.
          Passed: 검증 통과 (출제 의도가 완벽하게 일치)
          ReviewNeeded: 검토 필요 (출제 목적과 애매하게 생성되어 교사의 직접 검토 필요)
          VerificationFailed: 검증 불가 (출제 의도와 많이 벗어났으나 교사가 직접 수정을 통해 활용 가능)
          Rejected: 폐기·제외 (출제 의도를 완전히 벗어나 활용 불가)`,
        ),
      statusReason: z.string().describe("문항 상태 이유"),
      generatedReason: z.string().describe("출제 근거"),
      version: z.number().describe("버전"),
      createdAt: z.date().describe("생성 일시"),
    }),
  ),
});

export const QuestionStudioPageModelHelper = {
  equalsTopic: (
    a: { topic: string; type: string },
    b: { topic: string; type: string },
  ) => {
    return a.topic === b.topic && a.type === b.type;
  },

  /**
   * Step 1 유효성 검사
   */
  validateStep1: (model: QuestionStudioPageModel) => {
    if (!model.targetStudentId) {
      return false;
    }
    if (model.selectedTopics.length === 0) {
      return false;
    }
    return true;
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const formMethods = useForm({
    resolver: zodResolver(QuestionStudioPageModel),
    defaultValues: {
      targetStudentId: "",
      selectedTopics: [],
      level: "하",
      reviewedQuestionIds: [],
      selectedQuestionIds: [],
      generatedQuestionModels: [],
    },
  });

  const asd = formMethods.watch();
  console.log(asd);

  return (
    <FormProvider {...formMethods}>
      <PageRootContainer>
        <div className={cn("flex w-full flex-col gap-8 p-6")}>
          <QuestionStudio__HeaderSection />

          {children}
        </div>
      </PageRootContainer>
    </FormProvider>
  );
}
