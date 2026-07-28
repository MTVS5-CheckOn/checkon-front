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
      className={cn("flex w-full items-center justify-between px-4 py-4")}
    >
      {/* Selected Date */}
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-small text-center font-semibold",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {formatedSelectedDate}
      </div>

      {/* Caption */}
      <span className={cn("ods__typo__body-small text-ods__base-400")}>
        날짜를 길게 눌러 이벤트 목록을 확인 할 수 있어요
      </span>
    </section>
  );
};
