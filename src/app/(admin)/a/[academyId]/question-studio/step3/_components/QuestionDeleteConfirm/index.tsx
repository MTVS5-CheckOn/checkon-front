import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";

const DESCRIPTION =
  "삭제한 문항은 현재 페이지에서 나가기 전까지만 되돌릴 수 있어요.";

export type QuestionDeleteConfirmProps = {
  onCancel?: () => void;
  onConfirm?: () => void;
};

export const QuestionDeleteConfirm = ({
  onCancel,
  onConfirm,
}: QuestionDeleteConfirmProps) => {
  return (
    <div
      data-has-description="true"
      data-two-button="true"
      className={cn(
        // 1. Layout
        "flex w-96 flex-col items-start justify-start gap-5 px-6 pt-7 pb-6",
        // 3. Color
        "bg-white",
        // 4. Shadow & Border
        "rounded-[20px]",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-4",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          문항을 삭제하시겠어요?
        </span>

        <p
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {DESCRIPTION}
        </p>
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex w-full items-start justify-start gap-2",
        )}
      >
        <Button
          type="button"
          color="default"
          className={cn("w-36")}
          onClick={onCancel}
        >
          취소
        </Button>
        <Button
          type="button"
          color="red"
          className={cn("w-36")}
          onClick={onConfirm}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};
