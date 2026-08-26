import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";

export type StatusLabelStatus = SignalState;

export type StatusLabelProps = {
  status?: StatusLabelStatus;
  children: React.ReactNode;
};

/**
 * 상태 라벨
 */
export const StatusLabel = ({
  status = SignalState.Default,
  children,
}: StatusLabelProps) => {
  const colorPalette = (() => {
    switch (status) {
      case SignalState.Positive:
        return {
          textColor: "text-ods__blue-500",
          bgColor: "bg-ods__blue-40",
        };
      case SignalState.Warning:
        return {
          textColor: "text-ods__bronze-500",
          bgColor: "bg-ods__yellow-40",
        };
      case SignalState.Danger:
        return {
          textColor: "text-ods__red-500",
          bgColor: "bg-ods__red-40",
        };
      default:
        return {
          textColor: "text-ods__base-500",
          bgColor: "bg-ods__base-100",
        };
    }
  })();

  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col items-center justify-center px-2 py-0.5",
        // 3. Color
        colorPalette.bgColor,
        // 4. Shadow & Border
        "rounded-[8px]",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__body-small font-medium whitespace-nowrap",
          // 3. Color
          colorPalette.textColor,
        )}
      >
        {children}
      </div>
    </div>
  );
};
