import { cn } from "@/ui/utils/tailwind/cn";

import { SignalState } from "@/domain/signal/state";

import { StatusLabel } from "@/ui/components/StatusLabel";
import { useFormContext } from "react-hook-form";
import { Dashboard__TodayTodoSection__TodoCompletionRateSection } from "./components/TodoCompletionRateSection";
import { Dashboard__TodayTodoSection__TodoListSection } from "./components/TodoListSection";
import { useTodayTodoSection } from "./hooks/useTodayTodoSection";
import { format } from "date-fns";

export const Dashboard__TodayTodoSection = () => {
  /**
   * 폼 컨텍스트
   */
  const { watch } = useFormContext();

  /**
   * 오늘 할 일 데이터
   */
  const { data } = useTodayTodoSection(
    format(watch("selectedDate"), "yyyy-MM-dd"),
  );

  /**
   * 진행도
   */
  const completionRate = Math.round(
    (data.filter((item) => item.isCompleted).length / data.length) * 100,
  );

  return (
    <div className={cn("flex w-full flex-col")}>
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

          <StatusLabel
            status={SignalState.Default}
          >{`${data.length}건`}</StatusLabel>
        </div>

        {/* Todo List Section */}
        <div className={cn("flex flex-col")}>
          <Dashboard__TodayTodoSection__TodoListSection
            selectedDate={new Date(watch("selectedDate"))}
            items={data.map((item) => ({
              id: item.id,
              title: item.text,
              status: item.label.status,
              statusLabel: item.label.text,
              deadlinedAt: item.deadline,
            }))}
          />
        </div>

        {/* Today Completion Rate Section */}
        <div className={cn("flex flex-col")}>
          <Dashboard__TodayTodoSection__TodoCompletionRateSection
            completionRate={completionRate}
          />
        </div>
      </div>
    </div>
  );
};
