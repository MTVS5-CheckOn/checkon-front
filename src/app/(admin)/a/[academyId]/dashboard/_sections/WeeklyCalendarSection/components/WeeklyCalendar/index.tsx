import { cn } from "@/ui/utils/tailwind/cn";

import { Button } from "@base-ui/react/button";
import { isSameDay, isWeekend } from "date-fns";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WeeklyCalendar__DayCell } from "./components/DayCell";
import { WeeklyCalendar__NavButton } from "./components/NavButton";
import { useWeeklyCalendar__Dates } from "./hooks/useDates";
import { useWeeklyCalendar__Swiper } from "./hooks/useSwiper";

/**
 * 주간 캘린더
 */
export const WeeklyCalendar = () => {
  const {
    setSwiper,
    navButtonState,
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
   * 초기 슬라이드 인덱스 계산
   */
  const initialSlideIndex = dates.findIndex((date) =>
    isSameDay(date, currentDate),
  );

  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start gap-2 overflow-hidden",
      )}
    >
      <div className={cn("flex items-start justify-start")}>
        {/* Selected Date Label */}
        <div
          className={cn(
            // 2. Typography
            "ods__typo__title-small text-center font-semibold",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {selectedDate.toLocaleDateString()}
        </div>
      </div>

      <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- 2. 간격이 서로 다른 파선 (선 20px, 공백 5px) --> */}
        <line
          x1="0"
          y1="2"
          x2="100%"
          y2="2"
          stroke="#eeeeee"
          stroke-width="3"
          stroke-dasharray="12 4"
        />
      </svg>

      {/* Weeks */}
      <div className={cn("flex h-17 w-full items-center justify-start gap-2")}>
        <WeeklyCalendar__NavButton
          direction="left"
          disabled={navButtonState.isBeginning}
          onClick={handleSlidePrev}
        />

        <Swiper
          className={cn("flex h-full w-full")}
          allowTouchMove={false} // 스와이퍼 이동 방지
          spaceBetween={"8px"}
          slidesPerView={7} // 한 주간 날짜 수 (7일)
          initialSlide={initialSlideIndex}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {dates.map((date) => {
            const isSelected = isSameDay(date, selectedDate);

            return (
              <SwiperSlide key={date.toString()}>
                <Button
                  className={cn(
                    "flex h-full w-full items-center justify-between gap-2",
                  )}
                  onClick={() => {
                    setSelectedDate(date);
                    handleSlideTo(dates.findIndex((d) => isSameDay(d, date)));
                  }}
                >
                  <WeeklyCalendar__DayCell
                    model={{
                      weekLabel: date.toLocaleDateString(),
                      dayLabel: date.getDate().toString(),
                      isSelected,
                      isHolyday: isWeekend(date),
                      eventCount: 0,
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
