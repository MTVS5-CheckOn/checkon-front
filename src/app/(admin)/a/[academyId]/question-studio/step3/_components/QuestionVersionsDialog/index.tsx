import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionVersionHistoryGroupSection } from "./_sections/HistoryGroupSection";
import { QuestionVersionHistoryItemProps } from "./_components/HistoryItem";

export type QuestionVersionsDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  versionGroups: { date: string; items: QuestionVersionHistoryItemProps[] }[];
  onItemClick?: (questionId: string, version: number) => void;
};

/**
 * 문항 버전 히스토리 다이얼로그
 */
export const QuestionVersionsDialog = ({
  isOpen,
  onClose,
  versionGroups,
  onItemClick,
}: QuestionVersionsDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      containerClassName={cn("w-full max-w-200")}
      dialogTitle={
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          문항 버전 히스토리
        </span>
      }
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 4. Shadow & Border
            "border-ods__border border-t",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start justify-start gap-6 pt-6",
              // 6. Utility
              "overflow-y-auto",
            )}
          >
            {versionGroups.map((group, index) => (
              <QuestionVersionHistoryGroupSection
                key={group.date + index}
                date={group.date}
                items={group.items}
                onItemClick={(questionId, version) => {
                  onItemClick?.(questionId, version);
                  onClose?.();
                }}
              />
            ))}
          </div>
        </div>
      }
    />
  );
};
