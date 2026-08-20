import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";
import { CircularProgress } from "@/ui/components/CircularProgress";

export type AnswerRatioCircleProps = {
  model: HomeworkResultCardModel;
};

/**
 * 정답률 도넛 차트
 * HomeworkResultCard에서 사용
 */
export const AnswerRatioCircle = ({ model }: AnswerRatioCircleProps) => {
  const answerRatio = model.getAnswerRatio() ?? 0;
  const status = model.getCardState();

  return (
    <div className={cn("flex flex-col items-center justify-center p-1")}>
      <CircularProgress
        label={
          <div className={cn("flex flex-col items-center justify-center")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__label-large",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              정답률
            </span>

            <span
              className={cn(
                // 2. Typography
                "ods__typo__label-large font-semibold",
                // 3. Color
                "text-ods__base-900",
              )}
            >
              {`${answerRatio}%`}
            </span>
          </div>
        }
        status={status}
        value={answerRatio}
      />
    </div>
  );
};
