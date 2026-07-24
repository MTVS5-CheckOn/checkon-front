import { cn } from "@/ui/utils/tailwind/cn";

export type StatusLabelStatus = "POSITIVE" | "WARNING" | "DANGER";

export type StatusLabelProps = {
  status: StatusLabelStatus;
  children: React.ReactNode;
};

/**
 * 상태 라벨
 */
export const StatusLabel = ({ status, children }: StatusLabelProps) => {
  const colorPalette = (() => {
    switch (status) {
      case "POSITIVE":
        return {
          textColor: "text-ods__blue-500",
          bgColor: "bg-ods__blue-40",
        };
      case "WARNING":
        return {
          textColor: "text-ods__bronze-500",
          bgColor: "bg-ods__yellow-40",
        };
      case "DANGER":
        return {
          textColor: "text-ods__red-500",
          bgColor: "bg-ods__red-40",
        };
      default:
        return {
          textColor: "text-ods__base-400",
          bgColor: "bg-ods__base-50",
        };
    }
  })();

  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col items-center justify-center px-1.5 py-px",
        // 3. Color
        colorPalette.bgColor,
        // 4. Shadow & Border
        "rounded-[6px]",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__caption font-semibold",
          // 3. Color
          colorPalette.textColor,
        )}
      >
        {children}
      </div>
    </div>
  );
};
