import { cn } from "@/ui/utils/tailwind/cn";

export type QuestionVersionHistoryItemProps = {
  questionId: string;
  title: string;
  time: string;
  version: number;
  onClick?: () => void;
};

/**
 * 문항 버전 히스토리 아이템
 */
export const QuestionVersionHistoryItem = ({
  title,
  time,
  version,
  onClick,
}: QuestionVersionHistoryItemProps) => {
  return (
    <button
      className={cn(
        // 1. Layout
        "flex w-full",
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full items-start justify-start gap-3 px-3 py-2",
          // 3. Color
          "bg-ods__base-50",
          // 4. Shadow & Border
          "border-ods__border rounded-[8px] border",
          // 5. Interaction
          "ods__animate__default hover:opacity-80",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start gap-2",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex w-full items-start justify-between gap-2",
            )}
          >
            <span
              className={cn(
                // 2. Typography
                "ods__typo__title-small text-start",
                // 3. Color
                "text-ods__base-600",
              )}
            >
              {title}
            </span>

            <span
              className={cn(
                // 2. Typography
                "ods__typo__caption",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              {time}
            </span>
          </div>

          <span
            className={cn(
              // 2. Typography
              "ods__typo__body-small",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {`Version ${version}`}
          </span>
        </div>
      </div>
    </button>
  );
};
