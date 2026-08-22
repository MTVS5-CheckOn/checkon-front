import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * 날짜별 이벤트 개수 조회
 */
export const useWeeklyCalendar__EventCountEachDate = (dates: Date[]) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useWeeklyCalendar__EventCountEachDate", dates],
    queryFn: async () => {
      // TODO: Remote API 연동하기

      // delay 1000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = dates.map((date, index) => {
        return {
          date,
          eventCount: index % 2 === 0 ? 0 : 10,
        };
      });

      return data;
    },
  });

  return {
    data,
  };
};
