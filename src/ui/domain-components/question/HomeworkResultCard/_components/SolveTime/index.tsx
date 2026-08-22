import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type SolveTimeProps = {
  model: HomeworkResultCardModel;
};

/**
 * 풀이시간 메타데이터
 * HomeworkResultCard에서 사용
 */
export const SolveTime = ({ model }: SolveTimeProps) => {
  return (
    <div className={cn("flex items-center gap-1")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-small",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        풀이시간
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-small font-semibold",
          // 3. Color
          "text-ods__base-700",
        )}
      >
        {model.formatSolveTime()}
      </span>
    </div>
  );
};
