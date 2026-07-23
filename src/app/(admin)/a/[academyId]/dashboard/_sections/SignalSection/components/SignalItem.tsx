import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { cn } from "@/ui/utils/tailwind/cn";

export type Dashboard__SignalItemStatus = "POSITIVE" | "WARNING" | "DANGER";

export type Dashboard__SignalItemModel = {
  studentName: string;
  status: Dashboard__SignalItemStatus;
  statusLabel: string;
  createdAt: Date;
  content: string;
};

export type Dashboard__SignalItemProps = {
  model: Dashboard__SignalItemModel;
  onClick?: () => void;
};

export const Dashboard__SignalItem = ({
  model,
  onClick,
}: Dashboard__SignalItemProps) => {
  const colorPalette = (() => {
    switch (model.status) {
      case "POSITIVE":
        return {
          signalDotColor: "bg-[#6CAEFC]",
          statusLabelColor: "text-sky-700",
          statusLabelBackground: "bg-ods__base-50",
          bgColor: undefined,
        };
      case "WARNING":
        return {
          signalDotColor: "bg-[#FBBF24]",
          statusLabelColor: "text-[#A05A00]",
          statusLabelBackground: "bg-[#FFF3D6]",
          bgColor: undefined,
        };
      case "DANGER":
        return {
          signalDotColor: "bg-[#F87171]",
          statusLabelColor: "text-[#C0392B]",
          statusLabelBackground: "bg-[#FFE5E5]",
          bgColor: "bg-[#FFF8F8]",
        };
      default:
        return {
          signalDotColor: "bg-ods__base-400",
          statusLabelColor: "text-ods__base-400",
          statusLabelBackground: "bg-ods__base-50",
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
    <button
      className={cn(
        // 1. Layout
        "group flex w-full",
        // 6. Utility
        "ods__decorate__hover",
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2 p-3",
          // 4. Shadow & Border
          "border-ods__base-100 border-b",
          // 3. Color
          colorPalette.bgColor && colorPalette.bgColor,
          "group-hover:bg-transparent",
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

            <div
              className={cn(
                // 1. Layout
                "flex flex-col items-center justify-center gap-2.5 px-1",
                // 3. Color
                colorPalette.statusLabelBackground,
                // 4. Shadow & Border
                "rounded-md",
              )}
            >
              <div
                className={cn(
                  // 2. Typography
                  "ods__typo__caption font-semibold",
                  // 3. Color
                  colorPalette.statusLabelColor,
                )}
              >
                {model.statusLabel}
              </div>
            </div>
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
            "flex flex-col items-start justify-start",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <div
            className={cn(
              // 2. Typography
              "ods__typo__body-small whitespace-pre-line",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {model.content}
          </div>
        </div>
      </div>
    </button>
  );
};
