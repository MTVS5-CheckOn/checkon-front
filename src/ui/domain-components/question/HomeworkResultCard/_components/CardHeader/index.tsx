import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkResultCardModel } from "../../models/model";

export type CardHeaderProps = {
  model: HomeworkResultCardModel;
};

/**
 * 카드 헤더 (과제 제목·날짜·제출 상태)
 * HomeworkResultCard에서 사용
 */
export const CardHeader = ({ model }: CardHeaderProps) => {
  const labelModel = model.getStatusLabelModel();

  return (
    <div className={cn("flex w-full items-start justify-between")}>
      <div className={cn("flex flex-col items-start gap-0.5")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-medium font-semibold",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {model.title}
        </span>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            "text-ods__base-400",
          )}
        >
          {model.date.toISOString()}
        </span>
      </div>

      <StatusLabel status={labelModel.status}>{labelModel.label}</StatusLabel>
    </div>
  );
};
