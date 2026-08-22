import { cn } from "@/ui/utils/tailwind/cn";

export type WeeklyCalendar__DayCellModel = {
  /**
   * 요일 라벨
   */
  weekLabel: string;
  /**
   * 일
   */
  dayLabel: string;
  /**
   * 선택되었는지 여부
   */
  isSelected?: boolean;
  /**
   * 휴일 여부
   */
  isHolyday?: boolean;
  /**
   * 해당 일 이벤트 개수
   */
  eventCount?: number;
};

export type WeeklyCalendar__DayCellProps = {
  model: WeeklyCalendar__DayCellModel;
};

export const WeeklyCalendar__DayCell = ({
  model,
}: WeeklyCalendar__DayCellProps) => {
  const {
    weekLabel,
    dayLabel,
    isSelected = false,
    isHolyday = false,
    eventCount = 0,
  } = model;

  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-full flex-1 flex-col items-center justify-start gap-2 px-1 py-2",
        // 3. Color
        isSelected ? "bg-ods__blue-20" : "bg-ods__white",
        // 4. Shadow & Border
        "rounded-lg",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover",
      )}
    >
      <div className={cn("flex flex-col items-center justify-center")}>
        {/* 요일 라벨 */}
        <div
          className={cn(
            // 2. Typography
            "ods__typo__label-large font-medium",
            // 3. Color
            isHolyday ? "text-ods__red-400" : "text-ods__base-400",
          )}
        >
          {weekLabel}
        </div>

        {/* 일 숫자 */}
        <div
          className={cn(
            // 2. Typography
            "ods__typo__label-large font-bold",
            // 3. Color
            (() => {
              if (isHolyday) {
                return "text-ods__red-500";
              }
              if (isSelected) {
                return "text-ods__blue-500";
              }
              return "text-ods__base-600";
            })(),
          )}
        >
          {dayLabel}
        </div>
      </div>

      {/* 이벤트 개수 */}
      {!!eventCount && (
        <div
          className={cn(
            // 1. Layout
            "flex flex-col items-center justify-center px-2",
            // 3. Color
            isSelected ? "bg-ods__base-600" : "bg-ods__base-100",
            // 4. Shadow & Border
            "rounded-full",
          )}
        >
          <div
            className={cn(
              // 2. Typography
              "ods__typo__label-large text-center",
              isSelected ? "font-bold" : "font-normal",
              // 3. Color
              isSelected ? "text-ods__base-50" : "text-ods__base-600",
            )}
          >
            {eventCount}
          </div>
        </div>
      )}
    </div>
  );
};
