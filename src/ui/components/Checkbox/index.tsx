import { cn } from "@/ui/utils/tailwind/cn";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { ComponentPropsWithRef } from "react";

export type CheckboxProps = {
  size?: "small" | "medium" | "large";
} & ComponentPropsWithRef<typeof BaseCheckbox.Root>;

export const Checkbox = ({
  size = "medium",
  disabled = false,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <BaseCheckbox.Root
      className={cn(
        // 1. Layout
        "flex aspect-square size-6 shrink-0 items-center justify-center",
        // 2. Color
        "text-ods__base-500",
        // 3. Border
        "border-ods__border rounded-sm border-2",
        // 4. Background
        "bg-ods__white",

        // Cond
        "data-checked:text-ods__blue-50 data-checked:border-blue-400 data-checked:bg-blue-400",
        // Size
        size === "small" && "size-5",
        size === "large" && "size-7",
        // Disabled
        disabled &&
          "bg-ods__base-50! text-ods__base-300! border-ods__border! pointer-events-none",
        className,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator
        className={cn(
          // 1. Layout
          "flex",
          // Cond
          "data-unchecked:hidden",
        )}
      >
        <CheckIcon size={20} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
};
