import { cn } from "@/ui/utils/tailwind/cn";

import { Separator } from "@/ui/components/Separator";

export type SelectedTopicGridItemProps = {
  label: string;
  questionCount: number;
  onRemove?: () => void;
};

// TODO: 기초 컴포넌트 분리 및 리팩토링
export const SelectedTopicGridItem = ({
  label,
  questionCount,
  onRemove,
}: SelectedTopicGridItemProps) => (
  <div
    className={cn(
      // 1. Layout
      "flex w-full flex-col items-start justify-start gap-3 px-4 py-3",
      // 3. Color
      "bg-ods__white",
      // 4. Shadow & Border
      "border-ods__border rounded-lg border",
    )}
  >
    <div className={cn("flex w-full items-end justify-between")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {label}
      </span>

      {/* TODO: Button 컴포넌트로 변경하기 */}
      <button
        type="button"
        data-color="Default"
        data-size="Small"
        onClick={onRemove}
        className={cn(
          // 1. Layout
          "flex h-8 flex-col items-center justify-center px-3",
          // 3. Color
          "bg-ods__base-50",
          // 4. Shadow & Border
          "rounded-lg",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium font-semibold",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          제거
        </span>
      </button>
    </div>

    <Separator />

    <div className={cn("flex w-full flex-col items-start justify-start gap-1")}>
      <div className={cn("flex items-start justify-start gap-0.5")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__label-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          문항 수
        </span>
      </div>

      <div
        data-placeholder="False"
        className={cn(
          // 1. Layout
          "flex h-10 w-full flex-col items-start justify-center px-3",
          // 3. Color
          "bg-ods__white",
          // 4. Shadow & Border
          "border-ods__border rounded-lg border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {questionCount}
        </span>
      </div>
    </div>
  </div>
);
