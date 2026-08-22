import { useState } from "react";
import SwiperType from "swiper";

/**
 * 주간 캘린더 스와이퍼 훅
 */
export const useWeeklyCalendar__Swiper = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  /**
   * 스와이퍼 네비게이션 버튼 상태
   */
  const [navButtonState, setNavButtonState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  /**
   * 스와이퍼 네비게이션 버튼 상태 새로고침
   */
  const refreshNavButtonState = () => {
    setNavButtonState({
      isBeginning: swiper?.isBeginning ?? false,
      isEnd: swiper?.isEnd ?? false,
    });
  };

  /**
   * 이전 슬라이드로 이동
   */
  const handleSlidePrev = () => {
    if (!swiper) {
      return;
    }

    swiper?.slidePrev();

    refreshNavButtonState();
  };

  /**
   * 다음 슬라이드로 이동
   */
  const handleSlideNext = () => {
    if (!swiper) {
      return;
    }

    swiper?.slideNext();

    refreshNavButtonState();
  };

  /**
   * 특정 슬라이드로 이동
   */
  const handleSlideTo = (index: number) => {
    if (!swiper) {
      return;
    }

    swiper.slideTo(index);
  };

  return {
    swiper,
    setSwiper,
    navButtonState,
    refreshNavButtonState,
    handleSlidePrev,
    handleSlideNext,
    handleSlideTo,
  };
};
