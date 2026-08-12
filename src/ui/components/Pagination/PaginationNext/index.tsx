import { cn } from "@/ui/utils/tailwind/cn";
import { ChevronRightIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

export type PaginationNextProps = ComponentPropsWithRef<"button">;

export const PaginationNext = ({
  className,
  type = "button",
  disabled,
  ...props
}: PaginationNextProps) => {
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
      <ChevronRightIcon className={cn("size-4")} />
    </button>
  );
};
