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
