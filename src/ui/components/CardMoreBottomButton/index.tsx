import { cn } from "@/ui/utils/tailwind/cn";

import { ArrowRightIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

/**
 * 카드 최하단에 위치한 더보기 버튼
 */
export const CardMoreBottomButton = ({
  className,
  children = "더보기",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        // 1. Layout
        "flex h-10 w-full items-center justify-center p-3",
        // 6. Utility
        "ods__decorate__hover",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          // 1. Layout
          "flex h-4 items-center justify-start gap-0.5",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__label-medium text-center font-medium",
          )}
        >
          {children}
        </span>

        <ArrowRightIcon className="size-3" />
      </div>
    </button>
  );
};
