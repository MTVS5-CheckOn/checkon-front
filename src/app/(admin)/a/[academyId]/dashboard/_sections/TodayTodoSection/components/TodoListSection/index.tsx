import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { overlay } from "overlay-kit";
import { WeeklyCalendar__DateEventsDialog } from "../../../WeeklyCalendarSection/components/WeeklyCalendar/components/DateEventsDialog";
import { TodoItem, TodoItemModel } from "./components/TodoItem";

export type Dashboard__TodayTodoSection__TodoListSectionProps = {
  items: TodoItemModel[];
};

export const Dashboard__TodayTodoSection__TodoListSection = ({
  items,
}: Dashboard__TodayTodoSection__TodoListSectionProps) => {
  const handleTodoItemClick = () => {
    alert(`해당 할 일 상세 페이지로 이동`);
  };

  const handleTodoListMoreClick = () => {
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
      {items.map((item) => (
        <TodoItem key={item.title} model={item} onClick={handleTodoItemClick} />
      ))}

      <CardMoreBottomButton onClick={handleTodoListMoreClick} />
    </div>
  );
};
