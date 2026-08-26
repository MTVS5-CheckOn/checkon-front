import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";
import dynamic from "next/dynamic";

const PdfRenderer = dynamic(() => import("./_components/PdfRenderer"), {
  ssr: false,
  loading: () => <p>PDF를 불러오는 중입니다...</p>,
});

export type ReportViewerDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * 리포트 뷰어 다이얼로그
 */
export const ReportViewerDialog = ({
  isOpen,
  onClose,
}: ReportViewerDialogProps) => {
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
          PDF 뷰어
        </div>
      }
      dialogContent={
        <div className="h-screen w-full overflow-auto">
          <PdfRenderer />
        </div>
      }
    />
  );
};
