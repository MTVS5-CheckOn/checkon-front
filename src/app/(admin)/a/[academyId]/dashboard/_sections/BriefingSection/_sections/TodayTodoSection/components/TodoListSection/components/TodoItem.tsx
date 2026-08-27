import { cn } from "@/ui/utils/tailwind/cn";

import { SignalState } from "@/domain/signal/state";

import { StatusLabel } from "@/ui/components/StatusLabel";
import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { CircleIcon } from "lucide-react";

export type TodoItemStatus = SignalState;

export type TodoItemModel = {
  id: string;
  title: string;
  status: TodoItemStatus;
  statusLabel: string;
  deadlinedAt: Date;
};

export type TodoItemProps = {
  model: TodoItemModel;
  onClick?: () => void;
};

export const TodoItem = ({ model, onClick }: TodoItemProps) => {
  const { title, status, statusLabel, deadlinedAt } = model;

  const colorPalette = (() => {
    if (status === SignalState.Danger) {
      return {
        bgColor: "bg-ods__red-20",
        deadlineColor: "text-ods__red-500",
      };
    }

    return {
      bgColor: undefined,
      deadlineColor: "text-ods__base-400",
    };
  })();

  const deadlinedAtText = DateUtilForKo.formatDistanceToNow({
    date: deadlinedAt,
    options: {
      addSuffix: true,
    },
  });

  return (
    <button className={cn("flex w-full")} onClick={onClick}>
      <div
        className={cn(
          // 1. Layout
          "flex w-full gap-2.5 px-5 py-4",
          // 3. Color
          colorPalette.bgColor,
          // 4. Shadow & Border
          "border-ods__border border-b",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
        )}
      >
        {/* Checkbox */}
        <div className={cn("flex pt-0.5")}>
          <div
            className={cn(
              // 1. Layout
              "flex size-4",
              // 3. Color
              "text-ods__base-300",
            )}
          >
            <CircleIcon size={16} />
          </div>
        </div>

        {/* Top Section */}
        <div className={cn("flex flex-1 flex-col gap-1")}>
          <div className={cn("flex gap-2")}>
            <div className={cn("flex flex-1 flex-col")}>
              <div
                className={cn(
                  // 1. Layout
                  "flex justify-start",
                  // 2. Typography
                  "ods__typo__label-large font-medium",
                  // 3. Color
                  "text-ods__base-500",
                )}
              >
                {title}
              </div>
            </div>

            <StatusLabel status={status}>{statusLabel}</StatusLabel>
          </div>

          {/* Bottom Section */}
          <div className={cn("flex")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__caption font-semibold",
                // 3. Color
                colorPalette.deadlineColor,
              )}
            >
              {deadlinedAtText}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
