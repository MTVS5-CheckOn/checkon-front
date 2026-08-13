import { cn } from "@/ui/utils/tailwind/cn";
import type { ComponentPropsWithRef, ReactNode } from "react";

export type PaginationItemProps = {
  isActive?: boolean;
  children: ReactNode;
} & ComponentPropsWithRef<"button">;

export const PaginationItem = ({
  isActive = false,
  children,
  className,
  type = "button",
  disabled,
  ...props
}: PaginationItemProps) => {
  const condCn = cn(
    // 2. Typography
    "ods__typo__label-large",
    // 3. Color
    !disabled && isActive && "bg-ods__base-50",
    (() => {
      if (disabled) {
        return "text-ods__base-300 font-normal";
      }
      if (isActive) {
        return "text-ods__base-600 font-medium";
      }

      return "text-ods__base-500 font-normal";
    })(),
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
        "flex size-8 flex-col items-center justify-center",
        // 4. Shadow & Border
        "rounded-sm",
        // 6. Utility
        "overflow-hidden",
        condCn,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
