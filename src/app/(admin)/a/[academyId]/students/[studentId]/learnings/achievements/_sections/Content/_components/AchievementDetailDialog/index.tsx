import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";
import { BasicInfoSection } from "./_sections/BasicInfoSection";
import { QuestionListSection } from "./_sections/QuestionListSection";

export type AchievementDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * 영역 성취도 분석 상세 다이얼로그
 */
export const AchievementDetailDialog = ({
  isOpen,
  onClose,
}: AchievementDetailDialogProps) => {
  return (
    <BaseDialog
      fullScreen
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={
        <div
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          영역 성취도 분석
        </div>
      }
      dialogContent={
        <div className={cn("flex w-full flex-col items-start gap-12")}>
          <BasicInfoSection />
          <QuestionListSection />
        </div>
      }
    />
  );
};
