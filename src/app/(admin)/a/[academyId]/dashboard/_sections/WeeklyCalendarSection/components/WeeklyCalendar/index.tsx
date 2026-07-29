import { cn } from "@/ui/utils/tailwind/cn";

import { Separator } from "@/ui/components/Separator";
import { useController, useFormContext } from "react-hook-form";
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
   * 폼 컨텍스트
   */
  const { control } = useFormContext();
  /**
   * 선택된 날짜
   */
  const { field } = useController({
    control,
    name: "selectedDate",
    defaultValue: currentDate,
  });

  return (
    <div
      className={cn(
        // 1. Layout
        "flex shrink-0 flex-col items-start justify-start",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <WeeklyCalendar__HeaderSection selectedDate={field.value} />
      <Separator variants="dashed" thickness="2px" />

      <WeeklyCalendar__WeekSection
        dates={dates}
        selectedDate={field.value}
        onDateSelect={(date) => field.onChange(date)}
      />
    </div>
  );
};
