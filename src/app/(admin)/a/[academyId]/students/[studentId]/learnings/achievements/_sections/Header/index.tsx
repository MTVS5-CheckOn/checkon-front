import { SignalState } from "@/domain/signal/state";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

const STATUS_LABELS = [
  { status: SignalState.Positive, label: "개념 이해" },
  { status: SignalState.Warning, label: "보충 필요" },
  { status: SignalState.Danger, label: "이해도 낮음" },
  { status: SignalState.Default, label: "데이터 부족" },
] as const;

/**
 * Achievement Grid Header Section
 */
export const AchievementGridHeaderSection = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-end justify-between",
        // 4. Shadow & Border
        "border-ods__border border-b pb-5",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex flex-col items-start justify-center gap-1",
        )}
      >
        <p
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          최근 4주간 채점 데이터를 분석한 학생 성취도 지표이며, 네모 한 칸은 1주
          기준 지표입니다.
        </p>
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex items-start justify-start gap-2",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {STATUS_LABELS.map(({ status, label }) => (
          <StatusLabel key={status} status={status}>
            {label}
          </StatusLabel>
        ))}
      </div>
    </div>
  );
};
