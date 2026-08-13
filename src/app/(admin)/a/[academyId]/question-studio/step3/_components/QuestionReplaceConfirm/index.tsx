import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";

const DESCRIPTION =
  "해당 문항을 기존 조건에 맞춰 새로 생성해요.\n\n교체된 문항은 버전으로 기록되고 버전 선택으로 이전 상태로 되돌릴 수 있어요.";

export type QuestionReplaceConfirmProps = {
  onCancel?: () => void;
  onConfirm?: () => void;
};

export const QuestionReplaceConfirm = ({
  onCancel,
  onConfirm,
}: QuestionReplaceConfirmProps) => {
  return (
    <div
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
          문항을 교체하시겠어요?
        </span>

        <p
          className={cn(
            // 2. Typography
            "ods__typo__body-medium whitespace-pre-line",
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
          color="blue"
          className={cn("flex-1")}
          onClick={onConfirm}
        >
          교체하기
        </Button>
      </div>
    </div>
  );
};
