import { CircleIcon } from "lucide-react";

import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type CorrectAnswerCountProps = {
  model: HomeworkResultCardModel;
};

/**
 * 정답 문항 수 메타데이터
 * HomeworkResultCard에서 사용
 */
export const CorrectAnswerCount = ({ model }: CorrectAnswerCountProps) => {
  const count =
    model.submissionInfo?.correctAnswerCount.toString() ?? "-";

  return (
    <div className={cn("flex items-center gap-0.5")}>
      <CircleIcon className={cn("size-3.5", "text-ods__blue-400")} />
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {count}
      </span>
    </div>
  );
};
