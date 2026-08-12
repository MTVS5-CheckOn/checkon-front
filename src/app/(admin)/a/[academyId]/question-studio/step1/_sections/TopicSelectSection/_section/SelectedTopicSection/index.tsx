import { cn } from "@/ui/utils/tailwind/cn";

import { SelectedTopicGridItem } from "./_components/SelectedTopicGridItem";

const MOCK_SELECTED_TOPICS = [
  { id: "1", label: "독서 x 사실적 이해", questionCount: 12 },
  { id: "2", label: "독서 x 사실적 이해", questionCount: 12 },
  { id: "3", label: "독서 x 사실적 이해", questionCount: 12 },
  { id: "4", label: "독서 x 사실적 이해", questionCount: 12 },
];

export const SelectedTopics__Section = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2",
      )}
    >
      {/* Header Section */}
      <div className={cn("flex items-center justify-start gap-2")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          선택된 출제 영역
        </span>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-small",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {MOCK_SELECTED_TOPICS.length}개
        </span>
      </div>

      {/* Grid Section */}
      <div
        className={cn(
          // 1. Layout
          "grid w-full grid-cols-3 gap-3",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {MOCK_SELECTED_TOPICS.map((topic) => (
          <SelectedTopicGridItem
            key={topic.id}
            title={topic.label}
            value={topic.questionCount}
            onChange={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
