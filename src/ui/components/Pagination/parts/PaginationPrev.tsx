import { cn } from "@/ui/utils/tailwind/cn";
import { ChevronLeftIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

export type PaginationPrevProps = ComponentPropsWithRef<"button">;

export const PaginationPrev = ({
  className,
  type = "button",
  disabled,
  ...props
}: PaginationPrevProps) => {
  const condCn = cn(
    // 3. Color
    disabled ? "text-ods__base-300" : "text-ods__base-500",
    // 5. Interaction
    !disabled && "ods__animate__default hover:bg-ods__hover",
    // 6. Utility
    disabled && "pointer-events-none",
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        // 1. Layout
        "flex size-8 items-center justify-center",
        // 4. Shadow & Border
        "rounded-sm",
        // 6. Utility
        "overflow-hidden",
        condCn,
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon className={cn("size-4")} />
    </button>
  );
};
