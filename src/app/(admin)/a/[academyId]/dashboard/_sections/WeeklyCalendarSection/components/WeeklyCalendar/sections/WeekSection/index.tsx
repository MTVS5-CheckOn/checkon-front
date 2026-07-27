import { cn } from "@/ui/utils/tailwind/cn";
import { useLongPress } from "react-use";

import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { Button } from "@base-ui/react/button";
import { isSameDay, isWeekend } from "date-fns";
import { overlay } from "overlay-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import { WeeklyCalendar__DateEventsDialog } from "../../components/DateEventsDialog";
import { WeeklyCalendar__DayCell } from "../../components/DayCell";
import { WeeklyCalendar__NavButton } from "../../components/NavButton";
import { useWeeklyCalendar__Swiper } from "../../hooks/useSwiper";

/**
 * 한 주간 날짜 수 (7일)
 */
const WEEK_COUNT = 7;

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
   * 날짜 아이템 롱 클릭 이벤트
   */
  const longPressEvent = useLongPress(
    () => {
      // 선택 날짜 이벤트 목록 다이얼로그 열기
      overlay.open(({ isOpen, close }) => (
        <WeeklyCalendar__DateEventsDialog
          isOpen={isOpen}
          onClose={close}
          selectedDate={selectedDate}
        />
      ));
    },
    {
      isPreventDefault: true,
      delay: 500,
    },
  );

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
                {...longPressEvent}
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
    </section>
  );
};
