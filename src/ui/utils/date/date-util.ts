import { formatDistanceToNow, FormatDistanceToNowOptions } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 한국어 설정을 위한 날짜 유틸리티
 */
export class DateUtilForKo {
  /**
   * 날짜를 한국어로 변환
   */
  static formatDistanceToNow({
    date,
    options,
  }: {
    date: Date;
    options?: FormatDistanceToNowOptions;
  }) {
    return formatDistanceToNow(date, {
      locale: ko,
      ...options,
    });
  }
}
