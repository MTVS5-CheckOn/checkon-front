import { SignalState } from "@/domain/signal/state";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFollowUpDetailDialog = (followUpId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useFollowUpDetailDialog", { followUpId }],
    queryFn: async () => {
      // TODO: Remote API 연동하기

      // delay 1000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data: {
        studentName: string;
        studentClassTitle: string;
        studentProfileImageUrl: string;
        followUpStatusVariant: SignalState;
        followUpStatusTitle: string;
        followUpStatusDescription: string;
        followUpCreatedAt: Date;
        followUpHistoryItems: Array<{
          variant: SignalState;
          title: string;
          description: string;
          caption: string;
        }>;
      } = {
        studentName: "김지민",
        studentClassTitle: "고1 수능 국어반",
        followUpStatusVariant: SignalState.Warning,
        followUpStatusTitle: "숨은 신호",
        followUpStatusDescription:
          "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
        followUpCreatedAt: new Date(),
        studentProfileImageUrl:
          "https://static.cdn.kmong.com/gigs/12gtG1768751356.jpg?w=200",
        followUpHistoryItems: [
          {
            variant: SignalState.Warning,
            title: "숨은 신호",
            description:
              "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
            caption: "2026년 7월 25일 10:30 생성",
          },
          {
            variant: SignalState.Default,
            title: "상담 연장",
            description:
              "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
            caption: "2026년 7월 24일 10:30 생성",
          },
          {
            variant: SignalState.Default,
            title: "위험 신호",
            description:
              "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
            caption: "2026년 6월 26일 10:30 생성",
          },
        ],
      };

      return data;
    },
  });

  return {
    data,
  };
};
