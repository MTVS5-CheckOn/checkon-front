import { cn } from "@/ui/utils/tailwind/cn";

import { StatusLabel } from "@/ui/components/StatusLabel";
import { Dashboard__TodayTodoSection__TodoCompletionRateSection } from "./sections/TodoCompletionRateSection";
import { Dashboard__TodayTodoSection__TodoListSection } from "./sections/TodoListSection";

export const Dashboard__TodayTodoSection = () => {
  return (
    <div className={cn("flex w-75 shrink-0 flex-col")}>
      <TempSection />
    </div>
  );
};

const TempSection = () => {
  const data: {
    todoCount: number;
  } = {
    todoCount: 3,
  };

  return (
    <div className={cn("flex w-full flex-col gap-3")}>
      {/* Header Section */}
      <div className={cn("flex gap-2")}>
        <div className={cn("flex flex-col")}>
          <div
            className={cn(
              // 2. Typography
              "ods__typo__title-small font-semibold",
              // 3. Color
              "text-ods__base-600",
            )}
          >
            오늘 할 일
          </div>
        </div>

        <StatusLabel status={"DEFAULT"}>{`${data.todoCount}건`}</StatusLabel>
      </div>

      {/* Todo List Section */}
      <div className={cn("flex flex-col")}>
        <Dashboard__TodayTodoSection__TodoListSection />
      </div>

      {/* Today Completion Rate Section */}
      <div className={cn("flex flex-col")}>
        <Dashboard__TodayTodoSection__TodoCompletionRateSection />
      </div>
    </div>
  );
};
