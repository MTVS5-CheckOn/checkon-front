import { cn } from "@/ui/utils/tailwind/cn";

export type QuestionChoiceItemState = "Answer" | "Wrong" | "Default";

export type QuestionChoiceItemProps = {
  title: string;
  content?: string;
  state: QuestionChoiceItemState;
};

/**
 * 질문 보기 아이템
 */
export const QuestionChoiceItem = ({
  title,
  content,
  state,
}: QuestionChoiceItemProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex min-h-12 w-full flex-col items-start gap-3 p-3",
        !content && "h-fit",
        // 3. Color
        state === "Answer" && "bg-ods__blue-40",
        state === "Wrong" && "bg-ods__red-40",
        state === "Default" && "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-lg border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <div className={cn("flex w-full items-center gap-2.5")}>
        <span
          className={cn(
            // 1. Layout
            "flex-1 text-start",
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {title}
        </span>
      </div>

      {!!content && (
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-small font-light whitespace-pre-line",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {content}
        </span>
      )}
    </div>
  );
};
