import { ComponentPropsWithRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type ButtonProps = {
  color?: "blue" | "red" | "default";
  size?: "small" | "medium" | "large";
} & ComponentPropsWithRef<"button">;

export const Button = ({
  color = "default",
  size,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-center px-4",
        // 2. Typography
        "ods__typo__label-large font-semibold",
        // 4. Shadow & Border
        "rounded-[8px]",
        // 5. Interaction
        "ods__animate__default hover:opacity-80",

        // Color
        color === "blue" && "bg-ods__blue-300 text-ods__blue-50",
        color === "red" && "bg-ods__red-100 text-ods__red-400",
        color === "default" && "bg-ods__base-50 text-ods__base-500",
        // Size
        size === "small" && "h-8",
        size === "large" && "h-12",
        !size && "h-10",
        // Disabled
        disabled &&
          "bg-ods__base-50 text-ods__base-400 pointer-events-none opacity-60",
        className,
      )}
      {...props}
    />
  );
};
