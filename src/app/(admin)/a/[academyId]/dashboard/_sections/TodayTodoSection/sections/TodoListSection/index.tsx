import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { TodoItem, TodoItemModel } from "./components/TodoItem";
import { overlay } from "overlay-kit";
import { WeeklyCalendar__DateEventsDialog } from "../../../WeeklyCalendarSection/components/WeeklyCalendar/components/DateEventsDialog";

export const Dashboard__TodayTodoSection__TodoListSection = () => {
  const data: TodoItemModel[] = [
    {
      title: "마리화이 프로션 미팅 준비",
      status: "DEFAULT",
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
    {
      title: "중간대비 부재 구성 ㅡ 3개별 방문",
      status: "DEFAULT",
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
    {
      title: "최수아 재출 피책 확인",
      status: "DANGER",
      statusLabel: "이해 저하",
      deadlinedAt: new Date(),
    },
  ];

  const handleTodoItemClick = () => {
    alert(`해당 할 일 상세 페이지로 이동`);
  };

  const handleMoreClick = () => {
    const today = new Date();

    overlay.open(({ isOpen, close }) => (
      <WeeklyCalendar__DateEventsDialog
        isOpen={isOpen}
        onClose={close}
        selectedDate={today}
      />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {data.map((item) => (
        <TodoItem key={item.title} model={item} onClick={handleTodoItemClick} />
      ))}

      <CardMoreBottomButton onClick={handleMoreClick} />
    </div>
  );
};
