import { cn } from "@/ui/utils/tailwind/cn";

import { Separator } from "@/ui/components/Separator";
import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { Button } from "@base-ui/react/button";
import { format, isSameDay, isWeekend } from "date-fns";
import { ko } from "date-fns/locale/ko";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WeeklyCalendar__DayCell } from "./components/DayCell";
import { WeeklyCalendar__NavButton } from "./components/NavButton";
import { useWeeklyCalendar__Dates } from "./hooks/useDates";
import { useWeeklyCalendar__Swiper } from "./hooks/useSwiper";

/**
 * 한 주간 날짜 수 (7일)
 */
const WEEK_COUNT = 7;

/**
 * 주간 캘린더
 */
export const WeeklyCalendar = () => {
  const {
    setSwiper,
    navButtonState,
    refreshNavButtonState,
    handleSlidePrev,
    handleSlideNext,
    handleSlideTo,
  } = useWeeklyCalendar__Swiper();

  /**
   * 날짜 목록 가져오기
   */
  const { currentDate, dates } = useWeeklyCalendar__Dates();

  /**
   * 선택된 날짜
   */
  const [selectedDate, setSelectedDate] = useState(currentDate);

  /**
   * 날짜 아이템 클릭 핸들러
   */
  const handleDayItemClick = (date: Date) => {
    // 선택된 날짜 업데이트
    setSelectedDate(date);

    // 슬라이드 이동
    handleSlideTo(dates.findIndex((d) => isSameDay(d, date)));

    // 네비게이션 버튼 상태 새로고침
    refreshNavButtonState();
  };

  /**
   * 초기 슬라이드 인덱스 계산
   */
  const initialSlideIndex = dates.findIndex((date) =>
    isSameDay(date, currentDate),
  );

  /**
   * 선택된 날짜 - 포맷팅
   */
  const formatedSelectedDate = format(selectedDate, "M월 d일 (E)", {
    locale: ko,
  });

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
      <div className={cn("flex items-start justify-start")}>
        {/* Selected Date Label */}
        <div
          className={cn(
            // 1. Layout
            "flex px-4 py-3",
            // 2. Typography
            "ods__typo__title-small text-center font-semibold",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {formatedSelectedDate}
        </div>
      </div>

      <Separator variants="dashed" />

      {/* Weeks */}
      <div
        className={cn(
          "flex h-23 w-full items-center justify-start gap-2 px-4 py-2",
        )}
      >
        <WeeklyCalendar__NavButton
          direction="left"
          disabled={navButtonState.isBeginning}
          onClick={handleSlidePrev}
        />

        <Swiper
          className={cn("flex h-full w-full")}
          allowTouchMove={false} // 스와이퍼 이동 방지
          spaceBetween={"8px"}
          slidesPerView={WEEK_COUNT}
          initialSlide={initialSlideIndex}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {dates.map((date, index) => {
            const isSelected = isSameDay(date, selectedDate);

            // TODO: 임시 값
            const eventCount = index % 2 === 0 ? 0 : 10;

            // 요일명
            const weekLabelShort = DateUtilForKo.formatWeekLabel({
              date,
              formatString: "short",
            });

            return (
              <SwiperSlide key={date.toString()}>
                <Button
                  className={cn(
                    "flex h-full w-full items-center justify-between gap-2",
                  )}
                  onClick={() => handleDayItemClick(date)}
                >
                  <WeeklyCalendar__DayCell
                    model={{
                      weekLabel: weekLabelShort,
                      dayLabel: date.getDate().toString(),
                      isSelected,
                      isHolyday: isWeekend(date),
                      eventCount,
                    }}
                  />
                </Button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <WeeklyCalendar__NavButton
          direction="right"
          disabled={navButtonState.isEnd}
          onClick={handleSlideNext}
        />
      </div>
    </div>
  );
};
