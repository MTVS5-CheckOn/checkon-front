import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

import { AnswerRatioCircle } from "./_components/AnswerRatioCircle";
import { CardHeader } from "./_components/CardHeader";
import { CorrectAnswerCount } from "./_components/CorrectAnswerCount";
import { CorrectAnswerQuestionCount } from "./_components/CorrectAnswerQuestionCount";
import { MemoCount } from "./_components/MemoCount";
import { SolveTime } from "./_components/SolveTime";
import { WrongAnswerCount } from "./_components/WrongAnswerCount";
import { HomeworkResultCardModel } from "./models/model";

export { HomeworkResultCardModel } from "./models/model";
export type {
  HomeworkResultCardState,
  HomeworkResultCardSubmissionInfo,
} from "./models/model";

export type HomeworkResultCardProps = {
  model: HomeworkResultCardModel;
};

/**
 * 과제 결과 카드
 */
export const HomeworkResultCard = ({ model }: HomeworkResultCardProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <div className={cn("flex w-full flex-col items-start gap-2 px-5 py-4")}>
        <CardHeader model={model} />

        <div className={cn("flex w-full flex-col items-start gap-2")}>
          <div className={cn("flex w-full items-end justify-between")}>
            <div className={cn("flex items-center gap-5")}>
              <AnswerRatioCircle model={model} />

              <CorrectAnswerQuestionCount model={model} />
            </div>

            <SolveTime model={model} />
          </div>

          <Separator />

          <div className={cn("flex w-full items-center justify-between")}>
            <div className={cn("flex items-center gap-2")}>
              <CorrectAnswerCount model={model} />
              <WrongAnswerCount model={model} />
            </div>

            <MemoCount model={model} />
          </div>
        </div>
      </div>
    </div>
  );
};
