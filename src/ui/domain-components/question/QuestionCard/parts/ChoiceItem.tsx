import { cn } from "@/ui/utils/tailwind/cn";

export type QuestionCardChoiceItemProps = {
  label: string;
  isSelected?: boolean;
  readonly?: boolean;
};

/**
 * 선지 아이템
 */
export const QuestionCardChoiceItem = ({
  label,
  isSelected = false,
  readonly = false,
}: QuestionCardChoiceItemProps) => {
  return (
    <button
      className={cn(
        // 1. Layout
        "flex h-12 w-full flex-col items-start justify-center px-3",
        // 4. Shadow & Border
        "border-ods__border rounded-lg border",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover",
        // 6. Utility
        "overflow-hidden",

        // Cond
        isSelected ? "bg-ods__blue-40" : "bg-ods__white",
        readonly && "pointer-events-none",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-large",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {label}
      </span>
    </button>
  );
};
