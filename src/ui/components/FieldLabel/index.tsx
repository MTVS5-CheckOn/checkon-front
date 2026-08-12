import { ComponentPropsWithRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type FieldLabelProps = {
  required?: boolean;
} & ComponentPropsWithRef<"div">;

export const FieldLabel = ({
  required = false,
  className,
  ...props
}: FieldLabelProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-start gap-0.5",
        // 2. Typography
        "ods__typo__label-large",
        // 3. Color
        "text-ods__base-500",
        className,
      )}
      {...props}
    >
      <span>학원명</span>

      {required && <RequiredIndicator />}
    </div>
  );
};

const RequiredIndicator = () => {
  return (
    <div
      className={cn(
        // 2. Typography
        "ods__typo__body-small font-medium",
        // 3. Color
        "text-ods__red-400",
      )}
    >
      *
    </div>
  );
};
