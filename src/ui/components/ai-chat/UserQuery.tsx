import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type UserQueryBubbleProps = ComponentPropsWithRef<"div">;

/**
 * 사용자 질의 버블
 */
export const UserQueryBubble = ({
  className,
  ...props
}: UserQueryBubbleProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex max-w-125 items-center justify-center px-4 py-3",
        // 2. Typography
        "ods__typo__body-large flex-1 whitespace-pre-line",
        // 3. Color
        "bg-ods__base-50 text-ods__base-700",
        // 4. Shadow & Border
        "rounded-[8px]",
        // 6. Utility
        "overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};
