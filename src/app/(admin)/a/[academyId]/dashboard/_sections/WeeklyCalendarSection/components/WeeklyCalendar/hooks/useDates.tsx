import { eachDayOfInterval, subDays, addDays } from "date-fns";
import { useState } from "react";

/**
 * 주간 캘린더 날짜 목록 패딩 일수
 */
const PADDING_DAYS = 14;

/**
 * 주간 캘린더 날짜 목록
 */
export const useWeeklyCalendar__Dates = (): {
  /**
   * 현재 날짜
   */
  currentDate: Date;
  /**
   * 주간 캘린더 날짜 목록
   */
  dates: Date[];
} => {
  // 현재 날짜
  const [currentDate] = useState<Date>(() => new Date());

  /**
   * 현재 날짜를 기준으로 앞 뒤로 14일씩 붙여 배열을 만든다.
   * 현재날짜와 완성된 배열(현재날짜 포함)을 리턴한다.
   *
   * dates[0] = currentDate - PADDING_DAYS일
   * dates[PADDING_DAYS] = currentDate
   * dates[28] = currentDate + PADDING_DAYS일
   */
  const dates = eachDayOfInterval({
    start: subDays(currentDate, PADDING_DAYS),
    end: addDays(currentDate, PADDING_DAYS),
  });

  return { currentDate, dates };
};
