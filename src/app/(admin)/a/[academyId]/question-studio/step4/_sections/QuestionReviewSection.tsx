import { cn } from "@/ui/utils/tailwind/cn";
import { Button } from "@/ui/components/Button";
import { SelectableQuestionCard } from "../_components/SelectableQuestionCard";
import { overlay } from "overlay-kit";
import { QuestionsSavedConfirm } from "../_components/QuestionsSavedConfirm";
import { QuestionStudioPageModel } from "../../layout";
import { useFormContext } from "react-hook-form";

/**
 * 문항 선택 섹션
 */
export const QuestionSelectSection = () => {
  return (
    <section className={cn("flex w-full flex-col gap-3")}>
      <Header />

      <div className={cn("flex w-full flex-col gap-8")}>
        <CardList />
        <ButtonSection />
      </div>
    </section>
  );
};

const Header = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const generatedQuestionModels = watch("generatedQuestionModels");

  const totalQuestionCount = generatedQuestionModels.length;

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-start gap-2.5",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        문항 목록
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {totalQuestionCount}개
      </span>
    </div>
  );
};

const CardList = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const generatedQuestionModels = watch("generatedQuestionModels");

  return (
    <div className={cn("flex w-full flex-col gap-6")}>
      {generatedQuestionModels.map((model) => (
        <SelectableQuestionCard
          key={model.questionId}
          title={model.title}
          choiceProps={model.choices.map((choice) => ({
            label: choice,
            isSelected: model.answer === choice,
          }))}
          reason={model.generatedReason}
        />
      ))}
    </div>
  );
};

const ButtonSection = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const generatedQuestionModels = watch("generatedQuestionModels");
  const questionCount = generatedQuestionModels.length;

  const handleDownloadPDF = () => {
    // TODO: PDF 다운로드
    alert("PDF 다운로드 기능은 준비중이에요");
  };

  const handleSaveQuestions = () => {
    overlay.open(({ isOpen, close }) => (
      <QuestionsSavedConfirm
        isOpen={isOpen}
        onClose={close}
        questionCount={questionCount}
      />
    ));
  };

  return (
    <div className={cn("flex w-full items-center gap-3")}>
      <Button size="large" className={cn("w-full")} onClick={handleDownloadPDF}>
        PDF 다운로드
      </Button>

      <Button
        size="large"
        color="blue"
        className={cn("w-full")}
        onClick={handleSaveQuestions}
      >
        문항 저장하기
      </Button>
    </div>
  );
};
