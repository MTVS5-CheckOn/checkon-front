import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionVersionHistoryItemProps } from "../_components/HistoryItem";
import { QuestionVersionHistoryItem } from "../_components/HistoryItem";

export type QuestionVersionHistoryGroupSectionProps = {
  date: string;
  items: QuestionVersionHistoryItemProps[];
};

/**
 * 문항 버전 히스토리 그룹 섹션
 */
export const QuestionVersionHistoryGroupSection = ({
  date,
  items,
}: QuestionVersionHistoryGroupSectionProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-medium",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        {date}
      </span>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2",
        )}
      >
        {items.map((item) => (
          <QuestionVersionHistoryItem
            key={item.version}
            title={item.title}
            time={item.time}
            version={item.version}
          />
        ))}
      </div>
    </div>
  );
};
