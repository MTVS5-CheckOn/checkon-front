import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type CorrectAnswerQuestionCountProps = {
  model: HomeworkResultCardModel;
};

/**
 * 정답 문항 수 요약 (정답/전체)
 * HomeworkResultCard에서 사용
 */
export const CorrectAnswerQuestionCount = ({
  model,
}: CorrectAnswerQuestionCountProps) => {
  return (
    <div className={cn("flex flex-col items-start")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        정답 문항 수
      </span>

      <div className={cn("flex items-center gap-1")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-medium font-semibold",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {model.submissionInfo?.correctAnswerCount ?? "-"}
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-400",
          )}
        >
          /
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {model.totalQuestionCount}
        </span>
      </div>
    </div>
  );
};
