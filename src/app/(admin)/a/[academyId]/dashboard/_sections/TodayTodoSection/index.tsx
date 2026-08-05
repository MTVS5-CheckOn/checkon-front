import { cn } from "@/ui/utils/tailwind/cn";

import { StatusLabel } from "@/ui/components/StatusLabel";
import { useFormContext } from "react-hook-form";
import { Dashboard__TodayTodoSection__TodoCompletionRateSection } from "./components/TodoCompletionRateSection";
import { Dashboard__TodayTodoSection__TodoListSection } from "./components/TodoListSection";
import { useTodayTodoSection } from "./hooks/useTodayTodoSection";

export const Dashboard__TodayTodoSection = () => {
  /**
   * 폼 컨텍스트
   */
  const { watch } = useFormContext();

  /**
   * 오늘 할 일 데이터
   */
  const { data } = useTodayTodoSection(watch("selectedDate"));

  return (
    <div className={cn("flex w-90 shrink-0 flex-col")}>
      <div className={cn("flex w-full flex-col gap-3")}>
        {/* Header Section */}
        <div className={cn("flex gap-2")}>
          <div className={cn("flex flex-col")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__title-medium font-medium",
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
          <Dashboard__TodayTodoSection__TodoListSection items={data.items} />
        </div>

        {/* Today Completion Rate Section */}
        <div className={cn("flex flex-col")}>
          <Dashboard__TodayTodoSection__TodoCompletionRateSection
            completionRate={data.completionRate}
          />
        </div>
      </div>
    </div>
  );
};
