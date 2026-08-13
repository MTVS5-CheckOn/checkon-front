import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

/**
 * 문항 제목
 */
export const QuestionCardTitle = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        // 2. Typography
        "ods__typo__title-medium text-start whitespace-pre-line",
        // 3. Color
        "text-ods__base-600",
        className,
      )}
      {...props}
    />
  );
};
