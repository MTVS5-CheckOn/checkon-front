import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";
import {
  FaceExpressionless,
  FaceSlightlyFrowning,
  FaceSlightlySmiling,
  LucideIcon,
} from "lucide-react";

export type AchievementGridItemProps = {
  status: SignalState;
};

/**
 * Achievement Grid Item
 */
export const AchievementGridItem = ({ status }: AchievementGridItemProps) => {
  const { bgColor, iconColor, Icon } = Styles[status];

  return (
    <div
      className={cn(
        // 1. Layout
        "flex size-12 items-center justify-center",
        // 3. Color
        bgColor,
        // 4. Shadow & Border
        "rounded-lg",
      )}
    >
      {Icon && (
        <div
          className={cn(
            // 1. Layout
            "relative flex size-6 items-center justify-center",
            // 3. Color
            iconColor,
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <Icon className={cn("size-5")} />
        </div>
      )}
    </div>
  );
};

const Styles: Record<
  SignalState,
  { bgColor: string; iconColor: string; Icon?: LucideIcon }
> = {
  [SignalState.Positive]: {
    bgColor: "bg-ods__blue-50",
    iconColor: "text-ods__blue-300",
    Icon: FaceSlightlySmiling,
  },
  [SignalState.Warning]: {
    bgColor: "bg-ods__yellow-50",
    iconColor: "text-ods__bronze-300",
    Icon: FaceExpressionless,
  },
  [SignalState.Danger]: {
    bgColor: "bg-ods__red-50",
    iconColor: "text-ods__red-300",
    Icon: FaceSlightlyFrowning,
  },
  [SignalState.Default]: {
    bgColor: "bg-ods__base-100",
    iconColor: "",
  },
};
