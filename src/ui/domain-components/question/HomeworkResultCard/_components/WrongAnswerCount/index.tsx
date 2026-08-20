import { XIcon } from "lucide-react";

import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type WrongAnswerCountProps = {
  model: HomeworkResultCardModel;
};

/**
 * 오답 문항 수 메타데이터
 * HomeworkResultCard에서 사용
 */
export const WrongAnswerCount = ({ model }: WrongAnswerCountProps) => {
  const count = model.submissionInfo?.wrongAnswerCount.toString() ?? "-";

  return (
    <div className={cn("flex items-center gap-0.5")}>
      <XIcon className={cn("size-4", "text-ods__red-400")} />
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
