import { cn } from "@/ui/utils/tailwind/cn";

export type QuestionCardReasonProps = {
  reason: string;
};

/**
 * 출제 근거
 */
export const QuestionCardReason = ({ reason }: QuestionCardReasonProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-1",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small font-medium",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        출제 근거
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        {reason}
      </span>
    </div>
  );
};
