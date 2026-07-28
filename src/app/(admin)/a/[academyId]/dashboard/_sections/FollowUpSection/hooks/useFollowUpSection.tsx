import { SignalItemModel } from "@/ui/components/SignalListItem/SignalItem";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFollowUpSection = (selectedDate: Date) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useFollowUpSection", selectedDate.toISOString()],
    queryFn: async () => {
      // TODO: Remote API 연동하기

      // delay 1000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = mocks;

      return data;
    },
  });

  return {
    data,
  };
};

const mocks: {
  followUpCount: number;
  items: SignalItemModel[];
} = {
  followUpCount: 3,
  items: [
    {
      title: "박서연",
      status: "POSITIVE",
      statusLabel: "경과 양호",
      caption: "5일 전",
      content:
        "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    },
    {
      title: "김민준",
      status: "WARNING",
      statusLabel: "재검토",
      caption: "4일 전",
      content:
        "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    },
    {
      title: "박서연",
      status: "DANGER",
      statusLabel: "결과 부정확",
      caption: "3일 전",
      content:
        "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    },
  ],
};
