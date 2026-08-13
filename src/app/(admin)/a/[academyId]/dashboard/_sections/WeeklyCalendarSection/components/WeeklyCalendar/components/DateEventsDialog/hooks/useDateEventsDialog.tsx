import { SignalItemModel } from "@/ui/components/SignalListItem/SignalItem";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useDateEventsDialog = (selectedDate: Date) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useDateEventsDialog", selectedDate.toISOString()],
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

const mocks: SignalItemModel[] = [
  {
    title: "박서연",
    status: "Positive",
    statusLabel: "숨은 신호 · 풀이시간 급증",
    caption: "09:00",
    content:
      "지문당 풀이시간 개인 베이스라인 대비 1.9배, 3주 연속 상승, '비문학 추론 유형' 진입 시점과 일치.\n추론 유형 접근법(발문 분석 및 지문 근거 연결) 클리닉을 제안합니다.",
  },
  {
    title: "이지훈",
    status: "Positive",
    statusLabel: "학습 습관 개선",
    caption: "09:15",
    content:
      "최근 2주간 과제 제출률 100% 유지.\n꾸준한 학습 패턴이 형성되고 있어 현재 학습 계획을 유지하는 것을 권장합니다.",
  },
  {
    title: "김민준",
    status: "Warning",
    statusLabel: "숨은 신호 · 풀이시간 급증",
    caption: "10:00",
    content:
      "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
  },
  {
    title: "최유나",
    status: "Warning",
    statusLabel: "정답률 하락",
    caption: "10:30",
    content:
      "문학 현대시 영역 정답률이 개인 평균 대비 -15% 감소했습니다.\n핵심 표현과 화자 태도 분석 복습을 권장합니다.",
  },
  {
    title: "정도현",
    status: "Default",
    statusLabel: "경과 양호",
    caption: "11:00",
    content:
      "최근 4주 평균 학습 시간이 안정적으로 유지되고 있습니다.\n현재 학습 리듬을 지속해 주세요.",
  },
  {
    title: "한예린",
    status: "Danger",
    statusLabel: "출석 이상",
    caption: "12:00",
    content:
      "최근 5일 중 3일 지각이 발생했습니다.\n생활 패턴 및 학습 컨디션 확인 상담을 권장합니다.",
  },
  {
    title: "박서연",
    status: "Danger",
    statusLabel: "숨은 신호 · 풀이시간 급증",
    caption: "13:00",
    content: "결석 2회 후 오늘 첫 등원.\n가볍게 안부를 물어봐 주세요.",
  },
  {
    title: "오지훈",
    status: "Positive",
    statusLabel: "성취도 향상",
    caption: "14:00",
    content:
      "독서 영역 정답률이 지난달 대비 +21% 향상되었습니다.\n현재 풀이 전략을 다른 유형에도 적용해 보세요.",
  },
  {
    title: "박서연",
    status: "Default",
    statusLabel: "경과 양호",
    caption: "15:00",
    content:
      "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
  },
  {
    title: "김하은",
    status: "Warning",
    statusLabel: "학습 집중도 저하",
    caption: "15:30",
    content:
      "최근 문제 풀이 중 중도 이탈 빈도가 증가했습니다.\n학습 시간을 25분 단위로 나누는 집중 학습을 제안합니다.",
  },
  {
    title: "윤태성",
    status: "Positive",
    statusLabel: "오답 관리 우수",
    caption: "16:00",
    content:
      "오답노트 작성률 100%, 동일 유형 재오답이 크게 감소했습니다.\n심화 문제 풀이를 시작해도 좋습니다.",
  },
  {
    title: "송지아",
    status: "Danger",
    statusLabel: "학습 공백 감지",
    caption: "17:00",
    content:
      "최근 7일간 학습 기록이 없습니다.\n학부모와의 상담을 통해 학습 상황을 확인해 주세요.",
  },
  {
    title: "강민재",
    status: "Default",
    statusLabel: "안정적인 학습",
    caption: "18:00",
    content:
      "출석률, 제출률, 정답률 모두 개인 평균 범위 내에서 안정적으로 유지되고 있습니다.",
  },
];
