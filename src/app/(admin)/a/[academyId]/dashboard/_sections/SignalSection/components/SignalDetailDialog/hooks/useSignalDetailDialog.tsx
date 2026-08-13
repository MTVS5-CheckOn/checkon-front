import { useSuspenseQuery } from "@tanstack/react-query";

export const useSignalDetailDialog = (signalId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useSignalDetailDialog", { signalId }],
    queryFn: async () => {
      // TODO: Remote API 연동하기

      // delay 1000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data: {
        studentName: string;
        studentClassTitle: string;
        signalStatusVariant: "Warning" | "Danger" | "Positive" | "default";
        signalStatusTitle: string;
        signalStatusDescription: string;
        signalReasonContent: string;
        signalCreatedAt: Date;
        studentProfileImageUrl: string;
      } = {
        studentName: "김지민",
        studentClassTitle: "고1 수능 국어반",
        signalStatusVariant: "Warning",
        signalStatusTitle: "숨은 신호",
        signalStatusDescription:
          "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
        signalReasonContent:
          "수업 중 엎드려 있는 빈도 증가\n과제 제출 지연 횟수 증가\n수업 참여도 및 발언 감소",
        signalCreatedAt: new Date(),
        studentProfileImageUrl:
          "https://static.cdn.kmong.com/gigs/12gtG1768751356.jpg?w=200",
      };

      return data;
    },
  });

  return {
    data,
  };
};
