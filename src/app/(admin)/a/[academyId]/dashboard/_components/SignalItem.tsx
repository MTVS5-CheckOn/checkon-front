import { StatusLabel, StatusLabelStatus } from "@/ui/components/StatusLabel";
import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { cn } from "@/ui/utils/tailwind/cn";

export type Dashboard__StudentSignalItemStatus = StatusLabelStatus;

export type Dashboard__StudentSignalItemModel = {
  studentName: string;
  status: Dashboard__StudentSignalItemStatus;
  statusLabel: string;
  createdAt: Date;
  content: string;
};

export type Dashboard__StudentSignalItemProps = {
  model: Dashboard__StudentSignalItemModel;
  onClick?: () => void;
};

export const Dashboard__StudentSignalItem = ({
  model,
  onClick,
}: Dashboard__StudentSignalItemProps) => {
  const colorPalette = (() => {
    switch (model.status) {
      case "POSITIVE":
        return {
          signalDotColor: "bg-ods__blue-300",
          bgColor: undefined,
        };
      case "WARNING":
        return {
          signalDotColor: "bg-ods__yellow-200",
          bgColor: undefined,
        };
      case "DANGER":
        return {
          signalDotColor: "bg-ods__red-400",
          bgColor: "bg-ods__red-20",
        };
      default:
        return {
          signalDotColor: "bg-ods__base-400",
          bgColor: undefined,
        };
    }
  })();

  const createdAtText = DateUtilForKo.formatDistanceToNow({
    date: model.createdAt,
    options: {
      addSuffix: true,
    },
  });

  return (
    <button className={cn("flex w-full")} onClick={onClick}>
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2 p-3",
          // 3. Color
          colorPalette.bgColor && colorPalette.bgColor,
          // 4. Shadow & Border
          "border-ods__border border-b",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
        )}
      >
        <div className={cn("flex w-full items-center justify-start gap-2.5")}>
          <div className={cn("flex flex-1 items-center justify-start gap-2.5")}>
            <div className={cn("flex items-center justify-start gap-2.5 py-1")}>
              <div
                className={cn(
                  // 1. Layout
                  "relative size-1.5",
                  // 3. Color
                  colorPalette.signalDotColor,
                  // 4. Shadow & Border
                  "rounded-full",
                )}
              />
            </div>

            <div className={cn("flex flex-col items-start justify-start")}>
              <div
                className={cn(
                  // 2. Typography
                  "ods__typo__label-medium font-semibold",
                  // 3. Color
                  "text-ods__base-500",
                )}
              >
                {model.studentName}
              </div>
            </div>

            <StatusLabel status={model.status}>{model.statusLabel}</StatusLabel>
          </div>

          <div className={cn("flex flex-col items-start justify-start")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__label-small",
                // 3. Color
                "text-ods__base-400",
              )}
            >
              {createdAtText}
            </div>
          </div>
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <p
            className={cn(
              // 2. Typography
              "ods__typo__body-small text-start whitespace-pre-line",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {model.content}
          </p>
        </div>
      </div>
    </button>
  );
};
