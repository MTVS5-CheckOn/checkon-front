import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type MemoCountProps = {
  model: HomeworkResultCardModel;
};

/**
 * 메모 수 메타데이터
 * HomeworkResultCard에서 사용
 */
export const MemoCount = ({ model }: MemoCountProps) => {
  const memoCount = model.submissionInfo?.memoCount ?? 0;
  const memoCountLabel = memoCount > 0 ? `${memoCount}개` : "-";

  return (
    <div className={cn("flex items-center gap-1")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        메모
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-small font-semibold",
          // 3. Color
          "text-ods__base-700",
        )}
      >
        {memoCountLabel}
      </span>
    </div>
  );
};
