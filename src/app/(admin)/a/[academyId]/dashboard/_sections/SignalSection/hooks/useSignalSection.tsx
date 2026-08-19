import { SignalState } from "@/domain/signal/state";
import { SignalItemModel } from "@/ui/components/SignalListItem/SignalItem";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useSignalSection = (selectedDate: Date) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useSignalSection", selectedDate.toISOString()],
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
  signalCount: number;
  items: SignalItemModel[];
} = {
  signalCount: 3,
  items: [
    {
      title: "박서연",
      status: SignalState.Positive,
      statusLabel: "숨은 신호 · 풀이시간 급증",
      caption: "5일 전",
      content:
        "지문당 풀이시간 개인 베이스라인 대비 1.9배, 3주 연속 상승 , '비문학 추론 유형' 진입 시점과 일치.\n추론 유형 접근법(발문 분석 및 지문 근거 연결) 클리닉을 제안합니다.",
    },
    {
      title: "김민준",
      status: SignalState.Warning,
      statusLabel: "숨은 신호 · 풀이시간 급증",
      caption: "4일 전",
      content:
        "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
    },
    {
      title: "박서연",
      status: SignalState.Danger,
      statusLabel: "숨은 신호 · 풀이시간 급증",
      caption: "3일 전",
      content: "결석 2회 후 오늘 첫 등원.\n가볍게 안부를 물어봐 주세요.",
    },
  ],
};
