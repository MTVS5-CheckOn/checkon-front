import { getDashboardBriefing } from "@/api/generated/sdk.gen";
import { SignalState } from "@/domain/signal/state";
import { GlobalConfig } from "@/global-config";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface ITodayTodoSectionData {
  /**
   * 할 일 ID
   */
  id: string;
  label: {
    /**
     * 라벨 상태
     */
    status: SignalState;
    text: string;
  };
  /**
   * 할 일 텍스트
   */
  text: string;
  /**
   * 생성일시
   */
  createdAt: Date;
  /**
   * 마감일
   */
  deadline: Date;
  /**
   * 완료 여부
   */
  isCompleted: boolean;
}

export const useTodayTodoSection = (selectedDate: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useTodayTodoSection", selectedDate],
    queryFn: async () => {
      return fetch(selectedDate);
    },
  });

  return {
    data,
  };
};

const fetch = async (
  selectedDate: string,
): Promise<ITodayTodoSectionData[]> => {
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

      const items = data?.todos ?? [];

      const models: ITodayTodoSectionData[] = items.map((item) => {
        return {
          id: item.todoId,
          label: {
            status: SignalState.Default,
            text: item.displayLabel,
          },
          text: item.text,
          createdAt: new Date(item.createdAt),
          deadline: new Date(item.dueDate),
          isCompleted: item.done,
        };
      });

      return models;
    } catch {
      return [];
    }
  }

  return mocks;
};

const mocks: ITodayTodoSectionData[] = [
  {
    id: "todo-1",
    label: {
      status: SignalState.Danger,
      text: "정답률 하락",
    },
    text: "김민준 학생 정답률 하락 신호 확인 및 학부모 연락",
    createdAt: new Date("2026-08-25T09:00:00"),
    deadline: new Date("2026-08-26T18:00:00"),
    isCompleted: false,
  },
  {
    id: "todo-2",
    label: {
      status: SignalState.Danger,
      text: "학습 공백",
    },
    text: "송지아 학생 학습 공백 감지 — 학부모 상담 일정 조율",
    createdAt: new Date("2026-08-26T10:30:00"),
    deadline: new Date("2026-08-27T12:00:00"),
    isCompleted: false,
  },
  {
    id: "todo-3",
    label: {
      status: SignalState.Default,
      text: "복귀 케어",
    },
    text: "정도현 학생 결석 후 복귀 안부 확인",
    createdAt: new Date("2026-08-27T08:00:00"),
    deadline: new Date("2026-08-27T18:00:00"),
    isCompleted: false,
  },
  {
    id: "todo-4",
    label: {
      status: SignalState.Default,
      text: "출석 이상",
    },
    text: "한예린 학생 지각 패턴 상담 및 생활 리듬 점검",
    createdAt: new Date("2026-08-27T09:15:00"),
    deadline: new Date("2026-08-28T18:00:00"),
    isCompleted: false,
  },
  {
    id: "todo-5",
    label: {
      status: SignalState.Default,
      text: "숨은 신호",
    },
    text: "박서연 학생 풀이시간 급증 신호 — 추론 유형 클리닉 제안",
    createdAt: new Date("2026-08-27T11:00:00"),
    deadline: new Date("2026-08-29T18:00:00"),
    isCompleted: false,
  },
];
