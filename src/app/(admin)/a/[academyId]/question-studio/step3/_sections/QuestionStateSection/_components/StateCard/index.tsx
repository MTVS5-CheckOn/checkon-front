import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type QuestionStateVariant = SignalState;

export type StateCardProps = {
  variant: QuestionStateVariant;
  title: string;
  count: number;
} & Omit<ComponentPropsWithRef<"div">, "children">;

export const StateCard = ({
  variant,
  title,
  count,
  className,
  ...props
}: StateCardProps) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2 px-5 py-4",
        // 3. Color
        styles.bgColor,
        // 4. Shadow & Border
        "border-ods__border border-r",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium",
          // 3. Color
          styles.labelColor,
        )}
      >
        {title}
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-large font-medium",
          // 3. Color
          styles.countColor,
        )}
      >
        {count}
      </span>
    </div>
  );
};

const VARIANT_STYLES: Record<
  QuestionStateVariant,
  {
    bgColor?: string;
    labelColor: string;
    countColor: string;
  }
> = {
  Positive: {
    bgColor: "bg-ods__blue-20",
    labelColor: "text-ods__blue-700",
    countColor: "text-ods__blue-600",
  },
  Warning: {
    bgColor: "bg-ods__yellow-20",
    labelColor: "text-ods__bronze-700",
    countColor: "text-ods__bronze-600",
  },
  Danger: {
    bgColor: "bg-ods__red-20",
    labelColor: "text-ods__red-700",
    countColor: "text-ods__red-600",
  },
  Default: {
    labelColor: "text-ods__base-700",
    countColor: "text-ods__base-600",
  },
};
