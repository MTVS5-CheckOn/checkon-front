import { getDashboardCalendar } from "@/api/setup";
import { GlobalConfig } from "@/global-config";
import { useQuery } from "@tanstack/react-query";
import { eachDayOfInterval, parseISO } from "date-fns";

export interface ICalendarData {
  /**
   * 대상 날짜
   */
  date: Date;
  /**
   * 이벤트 개수
   */
  eventCount: number;
}

/**
 * 브리핑 대시보드 - 달력 데이터 조회
 */
export const useCalendarDataFetch = ({
  startedAt,
  endedAt,
}: {
  startedAt: string;
  endedAt: string;
}) => {
  return useQuery({
    queryKey: [
      "useCalendarDataFetch",
      {
        startedAt,
        endedAt,
      },
    ],
    queryFn: async () => {
      return fetch({
        startedAt,
        endedAt,
      });
    },
  });
};

const fetch = async ({
  startedAt,
  endedAt,
}: {
  startedAt: string;
  endedAt: string;
}): Promise<ICalendarData[]> => {
  /**
   * Production 모드 데이터 반환
   */
  if (GlobalConfig.apiMode === "production") {
    const { data } = await getDashboardCalendar({
      query: {
        startedAt,
        endedAt,
      },
    });

    const items = data?.items ?? [];

    const models: ICalendarData[] = items.map((item) => ({
      date: new Date(item.date),
      eventCount: item.eventCount,
    }));

    return models;
  }

  /**
   * Mock 데이터 반환
   */
  return createMockCalendarData({ startedAt, endedAt });
};

/**
 * Mock 모드용 달력 데이터 생성
 * - 조회 기간 내 모든 날짜에 대해 eventCount를 부여
 * - useWeeklyCalendar__EventCountEachDate와 동일하게 짝수 인덱스는 0, 홀수 인덱스는 10
 */
const createMockCalendarData = ({
  startedAt,
  endedAt,
}: {
  startedAt: string;
  endedAt: string;
}): ICalendarData[] => {
  const startDate = parseISO(startedAt);
  const endDate = parseISO(endedAt);

  return eachDayOfInterval({ start: startDate, end: endDate }).map(
    (date, index) => ({
      date,
      eventCount: index % 2 === 0 ? 0 : 10,
    }),
  );
};
