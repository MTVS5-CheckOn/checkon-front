import { eachDayOfInterval, subDays, addDays } from "date-fns";
import { useState } from "react";

const PADDING_DAYS = 14;

/**
 * 주간 스와이퍼용 임시 훅.
 *
 * TODO: Refactoring
 *
 * @returns currentDate - 기준이 되는 현재 날짜
 * @returns dates - 현재 날짜 포함, 앞뒤 PADDING_DAYS일씩 붙인 Date 배열 (길이 2 * PADDING_DAYS + 1)
 */
export const useWeeklyCalendar__Dates = (): {
  currentDate: Date;
  dates: Date[];
} => {
  /**
   * 1. 현재 날짜를 구한다.
   *
   * 매 렌더마다 `new Date()`를 호출하면 참조가 바뀌어 하위 계산·메모화가 불안정해진다.
   * `useState` lazy initializer로 마운트 시 한 번만 생성해 기준일을 고정한다.
   */
  const [currentDate] = useState<Date>(() => new Date());

  /**
   * 2. 현재 날짜를 기준으로 앞 뒤로 14일씩 붙여 배열을 만든다.
   * 3. 현재날짜와 완성된 배열(현재날짜 포함)을 리턴한다.
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
