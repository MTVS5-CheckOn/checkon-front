import {
  format,
  formatDistanceToNow,
  FormatDistanceToNowOptions,
} from "date-fns";
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

  /**
   * 날짜를 한국어 요일명으로 변환
   *
   * ex) 2026-07-27 -> "일" or "일요일"
   * ex) 2026-07-28 -> "월" or "월요일"
   */
  static formatWeekLabel({
    date,
    formatString = "short",
  }: {
    date: Date;
    formatString?: "short" | "long";
  }) {
    const formatStr = formatString === "short" ? "E" : "EEEE";

    return format(date, formatStr, { locale: ko });
  }
}
