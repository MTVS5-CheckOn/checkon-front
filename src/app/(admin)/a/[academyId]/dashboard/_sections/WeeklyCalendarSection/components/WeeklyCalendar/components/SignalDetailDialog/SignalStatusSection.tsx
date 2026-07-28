import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";

export type WeeklyCalendar__SignalDetailDialog__SignalStatusSectionProps = {
  variant: "warning" | "error" | "success" | "default";
  signalStatusTitle: string;
  signalStatusDescription: string;
  signalCreatedAt: Date;
};

export const WeeklyCalendar__SignalDetailDialog__SignalStatusSection = ({
  variant,
  signalStatusTitle,
  signalStatusDescription,
  signalCreatedAt,
}: WeeklyCalendar__SignalDetailDialog__SignalStatusSectionProps) => {
  const signalCreatedAtLabel = format(
    signalCreatedAt,
    "yyyy년 MM월 dd일 HH:mm 생성",
  );

  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2.5",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-small font-semibold",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        신호 상태
      </div>

      <Alert
        variant={variant}
        title={signalStatusTitle}
        description={signalStatusDescription}
        caption={signalCreatedAtLabel}
      />
    </section>
  );
};
