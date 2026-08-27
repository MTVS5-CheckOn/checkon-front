import { getDashboardBriefing } from "@/api/setup";
import { SignalState } from "@/domain/signal/state";
import { GlobalConfig } from "@/global-config";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ISignalSectionData {
  /**
   * 신호 ID
   */
  id: string;
  /**
   * 학생 정보
   */
  student: {
    id: string;
    name: string;
    className: string;
  };
  label: {
    /**
     * 라벨 상태
     */
    status: SignalState;
    text: string;
  };
  /**
   * 정렬 순서
   */
  order: number;
  /**
   * 브리핑 텍스트
   */
  briefingText: string;
  /**
   * 생성일시
   */
  createdAt: Date;
  /**
   * 근거 목록
   */
  evidences: {
    id: string;
    text: string;
  }[];
}

export const useSignalSection = (selectedDate: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useSignalSection", selectedDate],
    queryFn: async () => {
      return fetch(selectedDate);
    },
  });

  return {
    data,
  };
};

const fetch = async (selectedDate: string): Promise<ISignalSectionData[]> => {
  /**
   * Production 모드 데이터 반환
   */
  if (GlobalConfig.apiMode === "production") {
    try {
      const { data } = await getDashboardBriefing({
        query: {
          date: selectedDate,
        },
      });

      const items = data?.alerts ?? [];

      const models: ISignalSectionData[] = items.map((item) => {
        const status: SignalState = (() => {
          /**
           * signalType
           * acc_drop // 정답률 하락 (Danger)
           * submit_drop // 과제 제출 저하 (Danger)
           * volume_gap // 학습 활동량 감소 (Danger)
           * hidden_risk // 숨은 위험 신호 (Warning)
           * return_care // 복귀 케어 (Default)
           * type_bias // 유형별 취약 신호 (Warning)
           */
          switch (item.signalType) {
            case "acc_drop":
              return SignalState.Danger;
            case "submit_drop":
              return SignalState.Danger;
            case "volume_gap":
              return SignalState.Danger;
            case "hidden_risk":
              return SignalState.Warning;
            case "return_care":
              return SignalState.Default;
            case "type_bias":
              return SignalState.Warning;
            default:
              return SignalState.Default;
          }
        })();

        return {
          id: item.alertId,
          student: {
            id: item.studentId,
            name: item.studentName ?? "",
            className: item.className ?? "",
          },
          label: {
            status,
            text: item.displayLabel,
          },
          order: item.rank,
          briefingText: item.brief,
          createdAt: new Date(item.createdAt),
          evidences: item.evidence.map((evidence) => ({
            id: evidence.id,
            text: evidence.summary,
          })),
        };
      });

      return models;
    } catch {
      return [];
    }
  }

  return mocks;
};

const mocks: ISignalSectionData[] = [
  {
    id: "signal-1",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd1",
      name: "김민준",
      className: "1반",
    },
    label: {
      status: SignalState.Danger,
      text: "정답률 하락",
    },
    order: 1,
    briefingText:
      "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
    createdAt: new Date("2026-08-27T10:00:00"),
    evidences: [
      {
        id: "evidence-1",
        text: "비문학(과학·기술) 정답률 62% → 44% (-18%p)",
      },
      {
        id: "evidence-2",
        text: "최근 2주 과제 제출 지연 3회",
      },
    ],
  },
  {
    id: "signal-2",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd2",
      name: "송지아",
      className: "2반",
    },
    label: {
      status: SignalState.Danger,
      text: "학습 활동량 감소",
    },
    order: 2,
    briefingText:
      "최근 7일간 학습 기록이 없습니다.\n학부모와의 상담을 통해 학습 상황을 확인해 주세요.",
    createdAt: new Date("2026-08-27T11:30:00"),
    evidences: [
      {
        id: "evidence-3",
        text: "최근 7일간 학습 기록 0건",
      },
      {
        id: "evidence-4",
        text: "개인 평균 주간 학습 시간 대비 -100%",
      },
    ],
  },
  {
    id: "signal-3",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd3",
      name: "최유나",
      className: "3반",
    },
    label: {
      status: SignalState.Warning,
      text: "유형별 취약 신호",
    },
    order: 3,
    briefingText:
      "문학 현대시 영역 정답률이 개인 평균 대비 -15% 감소했습니다.\n핵심 표현과 화자 태도 분석 복습을 권장합니다.",
    createdAt: new Date("2026-08-27T12:00:00"),
    evidences: [
      {
        id: "evidence-5",
        text: "문학 현대시 정답률 78% → 63% (-15%p)",
      },
    ],
  },
  {
    id: "signal-4",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd4",
      name: "박서연",
      className: "4반",
    },
    label: {
      status: SignalState.Warning,
      text: "숨은 위험 신호",
    },
    order: 4,
    briefingText:
      "지문당 풀이시간 개인 베이스라인 대비 1.9배, 3주 연속 상승, '비문학 추론 유형' 진입 시점과 일치.\n추론 유형 접근법(발문 분석 및 지문 근거 연결) 클리닉을 제안합니다.",
    createdAt: new Date("2026-08-27T13:15:00"),
    evidences: [
      {
        id: "evidence-6",
        text: "지문당 평균 풀이시간 3분 10초 → 6분 (1.9배)",
      },
      {
        id: "evidence-7",
        text: "비문학 추론 유형 진입 후 3주 연속 증가",
      },
    ],
  },
  {
    id: "signal-5",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd5",
      name: "한예린",
      className: "5반",
    },
    label: {
      status: SignalState.Danger,
      text: "과제 제출 저하",
    },
    order: 5,
    briefingText:
      "최근 5일 중 3일 지각이 발생했습니다.\n생활 패턴 및 학습 컨디션 확인 상담을 권장합니다.",
    createdAt: new Date("2026-08-27T14:00:00"),
    evidences: [
      {
        id: "evidence-8",
        text: "최근 5일 중 지각 3회",
      },
      {
        id: "evidence-9",
        text: "과제 제출률 100% → 40%",
      },
    ],
  },
  {
    id: "signal-6",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd6",
      name: "정도현",
      className: "6반",
    },
    label: {
      status: SignalState.Default,
      text: "복귀 케어",
    },
    order: 6,
    briefingText: "결석 2회 후 오늘 첫 등원.\n가볍게 안부를 물어봐 주세요.",
    createdAt: new Date("2026-08-27T15:30:00"),
    evidences: [
      {
        id: "evidence-10",
        text: "최근 2회 결석 후 첫 등원",
      },
    ],
  },
];
