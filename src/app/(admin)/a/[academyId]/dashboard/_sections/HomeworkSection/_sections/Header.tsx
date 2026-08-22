"use client";
import { cn } from "@/ui/utils/tailwind/cn";

export const MonthlyHomeworkHeader = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-between",
      )}
    >
      <div className={cn("flex items-center gap-3")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__headline-small font-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          2026년 6월 과제
        </span>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          8명
        </span>
      </div>

      {/* TODO: 날짜 셀렉터 구현 */}
      <div
        className={cn(
          // 1. Layout
          "h-9 w-40",
          // 3. Color
          "bg-red-500/20",
          // 4. Shadow & Border
          "rounded-lg border border-red-500",
        )}
      />
    </div>
  );
};
