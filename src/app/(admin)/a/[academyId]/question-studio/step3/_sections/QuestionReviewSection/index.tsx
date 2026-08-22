import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionCard } from "../../_components/QuestionCard";
import { QuestionStudioPageModel } from "../../../layout";
import { StatusLabelProps } from "@/ui/components/StatusLabel";
import { AlertProps } from "@/ui/components/Alert";
import { useFormContext } from "react-hook-form";
import { SignalState } from "@/domain/signal/state";

export const QuestionReviewSection = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const model = watch();
  const generatedQuestionModels = model.generatedQuestionModels ?? [];

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-3",
      )}
    >
      <Header count={generatedQuestionModels.length} />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-6",
        )}
      >
        {generatedQuestionModels.map((question, index) => {
          const questionNumber = `Q${index + 1}.`;

          const mappedStatusLabel: StatusLabelProps = (() => {
            switch (question.status) {
              case "Passed":
                return {
                  status: SignalState.Positive,
                  children: "검증 통과",
                };
              case "ReviewNeeded":
                return {
                  status: SignalState.Warning,
                  children: "검토 필요",
                };
              case "VerificationFailed":
                return {
                  status: SignalState.Danger,
                  children: "검증 불가",
                };
              case "Rejected":
                return {
                  status: SignalState.Default,
                  children: "폐기·제외",
                };
            }
          })();

          const mappedAlertProps: AlertProps | undefined = (() => {
            switch (question.status) {
              case "Passed":
                return undefined;
              case "ReviewNeeded":
                return {
                  variant: SignalState.Warning,
                  title: "검증 필요",
                  description: question.statusReason,
                };
              case "VerificationFailed":
                return {
                  variant: SignalState.Danger,
                  title: "검증 불가",
                  description: question.statusReason,
                };
              case "Rejected":
                return {
                  variant: SignalState.Default,
                  title: "폐기·제외",
                  description: question.statusReason,
                };
            }
          })();

          return (
            <QuestionCard
              key={question.questionId + question.version}
              statusLabel={{
                status: mappedStatusLabel.status,
                children: mappedStatusLabel.children,
              }}
              title={`${questionNumber} ${question.title}`}
              choiceProps={question.choices.map((choice, index) => ({
                title: `${index + 1}. ${choice}`,
                isSelected: choice === question.answer,
              }))}
              reason={question.generatedReason}
              alertProps={mappedAlertProps}
              questionId={question.questionId}
            />
          );
        })}
      </div>
    </div>
  );
};

const Header = ({ count }: { count: number }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center justify-center gap-2.5",
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
        문항 검토
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {count}개
      </span>
    </div>
  );
};
