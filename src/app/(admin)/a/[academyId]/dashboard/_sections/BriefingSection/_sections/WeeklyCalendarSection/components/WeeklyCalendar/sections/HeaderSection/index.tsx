"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";

/**
 * 헤더 섹션
 */
export const WeeklyCalendar__HeaderSection = ({
  selectedDate,
}: {
  selectedDate: Date;
}) => {
  /**
   * 선택된 날짜 - 포맷팅
   */
  const formatedSelectedDate = format(selectedDate, "M월 d일 (E)", {
    locale: ko,
  });

  return (
    <section
      className={cn("flex w-full items-center justify-between px-5 py-5")}
    >
      {/* Selected Date */}
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-medium text-center font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {formatedSelectedDate}
      </div>
    </section>
  );
};
