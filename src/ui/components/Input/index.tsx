import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type InputProps = {
  size?: "small" | "medium" | "large";
} & ComponentPropsWithRef<"input">;

export const Input = ({ size, disabled, className, ...props }: InputProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col",
        // 4. Shadow & Border
        "border-ods__border rounded-sm border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <input
        className={cn(
          // 1. Layout
          "h-10 w-full p-3",
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-600",
          // 4. Shadow & Border
          "rounded-[8px]",
          // 5. Interaction
          "ods__animate__default hover:opacity-80",
          // 6. Utility
          "focus:outline-none",

          // Placeholder
          "placeholder:text-ods__base-400 font-light",

          // Size
          size === "small" && "h-8",
          size === "large" && "h-12",
          // Disabled
          disabled && "pointer-events-none opacity-30",
          className,
        )}
        {...props}
      />
    </div>
  );
};
