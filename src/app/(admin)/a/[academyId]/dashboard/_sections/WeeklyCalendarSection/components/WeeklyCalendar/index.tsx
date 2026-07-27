import { cn } from "@/ui/utils/tailwind/cn";

import { Separator } from "@/ui/components/Separator";
import { useState } from "react";
import { useWeeklyCalendar__Dates } from "./hooks/useDates";
import { WeeklyCalendar__HeaderSection } from "./sections/HeaderSection";
import { WeeklyCalendar__WeekSection } from "./sections/WeekSection";

/**
 * 주간 캘린더
 */
export const WeeklyCalendar = () => {
  /**
   * 날짜 목록 가져오기
   */
  const { currentDate, dates } = useWeeklyCalendar__Dates();
  /**
   * 선택된 날짜
   */
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col items-start justify-start",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <WeeklyCalendar__HeaderSection selectedDate={selectedDate} />
      <Separator variants="dashed" thickness="2px" />

      <WeeklyCalendar__WeekSection
        dates={dates}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    </div>
  );
};
