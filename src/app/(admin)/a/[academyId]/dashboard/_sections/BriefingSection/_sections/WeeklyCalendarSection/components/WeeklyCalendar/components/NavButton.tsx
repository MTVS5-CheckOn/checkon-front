import { cn } from "@/ui/utils/tailwind/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@base-ui/react/button";

export type WeeklyCalendar__NavButtonProps = {
  direction: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
};

export const WeeklyCalendar__NavButton = ({
  direction,
  disabled = false,
  onClick,
}: WeeklyCalendar__NavButtonProps) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <Button
      type="button"
      disabled={disabled}
      className={cn(
        // 1. Layout
        "flex size-8 items-center justify-center p-1",
        // 3. Color
        "bg-ods__white text-ods__base-400",
        // 4. Shadow & Border
        "border-ods__base-200 rounded-sm border",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover",
        //
        disabled && "bg-ods__base-50 text-ods__base-300 pointer-events-none",
      )}
      onClick={onClick}
    >
      <Icon className={cn("size-4")} />
    </Button>
  );
};
