import { SignalState } from "@/domain/signal/state";
import { TodoItemModel } from "../components/TodoListSection/components/TodoItem";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useTodayTodoSection = (selectedDate: Date) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useTodayTodoSection", selectedDate.toISOString()],
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
  todoCount: number;
  items: TodoItemModel[];
  completionRate: number;
} = {
  todoCount: 3,
  items: [
    {
      title: "마리화이 프로션 미팅 준비",
      status: SignalState.Default,
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
    {
      title: "중간대비 부재 구성 ㅡ 3개별 방문",
      status: SignalState.Default,
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
    {
      title: "최수아 재출 피책 확인",
      status: SignalState.Danger,
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
  ],
  completionRate: 20,
};
