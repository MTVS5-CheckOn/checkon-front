import { cn } from "@/ui/utils/tailwind/cn";

import { StateCard } from "./_components/StateCard";

export const QuestionStateSection = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-3",
      )}
    >
      {/* Header Section */}
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        문항 상태
      </span>

      {/* State Cards Section */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full items-start justify-start",
          // 4. Shadow & Border
          "border-ods__border rounded-[12px] border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <StateCard variant="Positive" title="검증 통과" count={7} />
        <StateCard variant="Warning" title="검토 필요" count={1} />
        <StateCard variant="Danger" title="검증 불가" count={1} />
        <StateCard
          variant="Default"
          title="폐기·제외"
          count={1}
          className="border-r-0"
        />
      </div>
    </div>
  );
};
