"use client";

import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";
import { GeneratedQuestionModelsMockRepo } from "@/mocks/question-mocks";

import { QuestionStudio__QuestionCondSelect__Section } from "./_sections/QuestionCondSelectSection";
import { useRouter } from "next/navigation";
import { QuestionStudioPageModel } from "../layout";
import { useFormContext } from "react-hook-form";

export default function Page() {
  const router = useRouter();

  const { watch, setValue } = useFormContext<QuestionStudioPageModel>();
  const model = watch();

  const handleSubmit = () => {
    const totalQuestionCount = model.selectedTopics.reduce(
      (acc, curr) => acc + curr.questionCount,
      0,
    );

    // TODO: 임시 로직
    (() => {
      const filteredGeneratedQuestionModelsMock =
        GeneratedQuestionModelsMockRepo.getSuffledItems().filter((it) => {
          if (it.level !== model.level) {
            return false;
          }
          if (model.selectedTopics.length) {
            return !model.selectedTopics.some(
              (topicModel) =>
                topicModel.topic === it.topic && topicModel.type === it.type,
            );
          }

          return true;
        });

      const generatedQuestionModels = Array.from(
        { length: totalQuestionCount },
        (_, index) => filteredGeneratedQuestionModelsMock[index],
      ).filter((it) => !!it);

      setValue("generatedQuestionModels", generatedQuestionModels);
    })();

    router.push("./step3");
  };
  return (
    <div className={cn("flex w-full flex-col gap-8")}>
      <div className={cn("flex w-full flex-col gap-3")}>
        <Header />

        <QuestionStudio__QuestionCondSelect__Section />
      </div>

      <Button
        size="large"
        color="blue"
        className={cn("w-full")}
        onClick={handleSubmit}
      >
        다음
      </Button>
    </div>
  );
}

const Header = () => {
  return (
    <div className={cn("flex flex-col items-start")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        출제 조건 설정
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        난이도를 설정하고 생성을 요청합니다.
      </span>
    </div>
  );
};
