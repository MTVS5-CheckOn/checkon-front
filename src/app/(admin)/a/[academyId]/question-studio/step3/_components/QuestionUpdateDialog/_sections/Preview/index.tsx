import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";
import { Button } from "@/ui/components/Button";
import { QuestionCard } from "../../../QuestionCard";
import { QuestionUpdateDialogModel } from "../..";
import { useController, useFormContext } from "react-hook-form";

/**
 * 문항 수정 다이얼로그 - 미리보기 섹션
 */
export const PreviewSection = ({ onConfirm }: { onConfirm?: () => void }) => {
  const { control } = useFormContext<QuestionUpdateDialogModel>();
  const { field } = useController({
    control,
    name: "questionPreview",
  });

  const model = field.value;

  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-141.5 flex-col items-start justify-start gap-6",
      )}
    >
      <QuestionCard
        readonly
        questionId={model.questionId}
        statusLabel={{
          status: SignalState.Positive,
          children: "검증 통과",
        }}
        title={model.title}
        choiceProps={model.choices.map((choice) => ({
          title: choice,
          isSelected: choice === model.answer,
        }))}
        reason={model.generatedReason}
      />

      <Button
        color="blue"
        size="large"
        className={cn("w-full")}
        onClick={onConfirm}
      >
        수정 완료
      </Button>
    </section>
  );
};
