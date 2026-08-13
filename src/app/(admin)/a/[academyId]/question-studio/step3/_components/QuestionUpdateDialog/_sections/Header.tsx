import { cn } from "@/ui/utils/tailwind/cn";
import { XIcon } from "lucide-react";

/**
 * 문항 수정 다이얼로그 - 헤더
 */
export const Header = () => {
  return (
    <div
      className={cn(
        "flex w-full shrink-0 items-center justify-start gap-2",
        "overflow-hidden",
      )}
    >
      <div className={cn("flex flex-1 items-start justify-start")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large text-center",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          AI로 문항 수정하기
        </span>
      </div>

      <button
        className={cn(
          // 1. Layout
          "flex items-center justify-center p-1",
          // 3. Color
          "text-ods__base-400",
          // 4. Shadow & Border
          "rounded-full",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
        )}
      >
        <XIcon className="size-6" />
      </button>
    </div>
  );
};
