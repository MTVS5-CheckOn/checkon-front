import { cn } from "@/ui/utils/tailwind/cn";
import { PreviewSection } from "./_sections/Preview";
import { ChatSection } from "./_sections/Chat";
import { BaseDialog } from "@/ui/components/BaseDialog";

export type QuestionUpdateDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export const QuestionUpdateDialog = ({
  isOpen,
  onClose,
}: QuestionUpdateDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      dialogTitle="AI로 문항 수정하기"
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex h-full max-h-full w-full flex-1 items-start justify-start gap-6",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <ChatSection />

          <PreviewSection />
        </div>
      }
    />
  );
};
