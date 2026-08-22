import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";
import { HomeworkQuestionCard } from "./_components/HomeworkQuestionCard";
import { StudentInfoCard } from "./_components/StudentInfoCard";
import {
  HomeworkResultCard,
  HomeworkResultCardModel,
} from "@/ui/domain-components/question/HomeworkResultCard";
import { QuestionTopicAreaCard } from "./_components/QuestionTopicAreaCard";

const HOMEWORK_RESULT_CARD_MODEL = new HomeworkResultCardModel({
  title: "문학x어휘개념 외 4영역",
  subtitle: "2026-08-16",
  labelModel: {
    status: "Default",
    label: "제출",
  },
  submissionInfo: {
    solveTimeSeconds: 1290,
    correctAnswerCount: 80,
    wrongAnswerCount: 20,
    memoCount: 20,
  },
  totalQuestionCount: 100,
});

const HOMEWORK_QUESTION_CARD_STATES = ["Answer", "Wrong"] as const;

export type HomeworkDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const HomeworkDetailDialog = ({
  isOpen,
  onClose,
}: HomeworkDetailDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      dialogTitle="과제 상세보기"
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex h-full w-full gap-6",
          )}
        >
          {/* Left */}
          <section
            className={cn(
              // 1. Layout
              "flex w-full flex-col gap-6",
              // 6. Utility
              "overflow-y-auto",
            )}
          >
            {HOMEWORK_QUESTION_CARD_STATES.map((state) => (
              <HomeworkQuestionCard key={state} state={state} />
            ))}
          </section>

          {/* Right */}
          <section
            className={cn(
              // 1. Layout
              "flex w-141.5 shrink-0 flex-col gap-6",
              // 6. Utility
              "overflow-y-auto",
            )}
          >
            <StudentInfoCard />
            <HomeworkResultCard model={HOMEWORK_RESULT_CARD_MODEL} />
            <QuestionTopicAreaCard />
          </section>
        </div>
      }
    />
  );
};
