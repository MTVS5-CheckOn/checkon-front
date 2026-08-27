import { cn } from "@/ui/utils/tailwind/cn";

import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { Button } from "@base-ui/react/button";
import { format, isSameDay, isWeekend } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  WeeklyCalendar__DayCell,
  WeeklyCalendar__DayCellModel,
} from "../../components/DayCell";
import { WeeklyCalendar__NavButton } from "../../components/NavButton";
import { useWeeklyCalendar__Swiper } from "../../hooks/useSwiper";
import { useCalendarDataFetch } from "../../../../../../hooks/useCalendarDataFetch";

/**
 * 표시할 날짜 수
 */
const WEEK_COUNTS = {
  md: 5,
  default: 7,
};

/**
 * 주간 섹션
 */
export const WeeklyCalendar__WeekSection = ({
  dates,
  selectedDate,
  onDateSelect,
}: {
  dates: Date[];
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}) => {
  /**
   * 스와이퍼 상태 관리
   */
  const {
    setSwiper,
    navButtonState,
    refreshNavButtonState,
    handleSlidePrev,
    handleSlideNext,
    handleSlideTo,
  } = useWeeklyCalendar__Swiper();

  /**
   * 초기 슬라이드 인덱스 계산
   */
  const initialSlideIndex = dates.findIndex((date) =>
    isSameDay(date, selectedDate),
  );

  /**
   * 날짜별 이벤트 개수 조회
   */
  const { data } = useCalendarDataFetch({
    startedAt: format(dates[0], "yyyy-MM-dd"),
    endedAt: format(dates[dates.length - 1], "yyyy-MM-dd"),
  });

  /**
   * 날짜 아이템 클릭 핸들러
   */
  const handleDayItemClick = (targetDate: Date) => {
    // 선택된 날짜 업데이트
    onDateSelect(targetDate);

    // 슬라이드 이동
    handleSlideTo(dates.findIndex((d) => isSameDay(d, targetDate)));

    // 네비게이션 버튼 상태 새로고침
    refreshNavButtonState();
  };

  return (
    <section
      className={cn("flex w-full items-center justify-start gap-2 px-5 py-4")}
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
        slidesPerView={WEEK_COUNTS.default}
        initialSlide={initialSlideIndex}
        centeredSlides={true}
        centeredSlidesBounds={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={{
          0: {
            slidesPerView: WEEK_COUNTS.md,
          },
          1024: {
            slidesPerView: WEEK_COUNTS.default,
          },
        }}
      >
        {data?.map(({ date, eventCount }) => {
          const dayCellModel: WeeklyCalendar__DayCellModel = {
            weekLabel: DateUtilForKo.formatWeekLabel({
              date,
              formatString: "short",
            }),
            dayLabel: date.getDate().toString(),
            isSelected: isSameDay(date, selectedDate),
            isHolyday: isWeekend(date),
            eventCount,
          };

          return (
            <SwiperSlide key={date.toString()}>
              <Button
                className={cn(
                  "flex h-full w-full items-center justify-between gap-2",
                )}
                onClick={() => handleDayItemClick(date)}
              >
                <WeeklyCalendar__DayCell model={dayCellModel} />
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
    </section>
  );
};
