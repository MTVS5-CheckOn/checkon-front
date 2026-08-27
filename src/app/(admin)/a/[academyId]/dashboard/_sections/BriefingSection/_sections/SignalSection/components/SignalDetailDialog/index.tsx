import { BaseDialog } from "@/ui/components/BaseDialog";
import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { Separator } from "@/ui/components/Separator";
import { useProtectedNavigation } from "@/ui/routers/ProtectedNavigation";
import { cn } from "@/ui/utils/tailwind/cn";
import { Suspense } from "react";
import { ISignalSectionData } from "../../hooks/useSignalSection";
import { SignalDetailDialog__SignalReasonSection } from "./components/ReasonSection";
import { SignalDetailDialog__SignalStatusSection } from "./components/StatusSection";
import { SignalDetailDialog__StudentInfoSection } from "./components/StudentInfoSection";

export type SignalDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  model: ISignalSectionData;
};

/**
 * 대시보드 > 신호 섹션 > 신호 상세 다이얼로그
 */
export const SignalDetailDialog = ({
  isOpen,
  onClose,
  model,
}: SignalDetailDialogProps) => {
  const { push } = useProtectedNavigation();

  const handleMoreClick = () => {
    onClose();
    push(`/students/${model.student.id}`);
  };

  return (
    <BaseDialog
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
          학생 신호 정보
        </div>
      }
      dialogContent={
        <Suspense
          fallback={
            <LoadingFallback
              className={cn("flex h-100 w-full items-center justify-center")}
            />
          }
        >
          <Content model={model} onMoreClick={handleMoreClick} />
        </Suspense>
      }
    />
  );
};

const Content = ({
  model,
  onMoreClick,
}: {
  model: ISignalSectionData;
  onMoreClick: () => void;
}) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <Separator />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-7",
        )}
      >
        {/* Layer 1: Student Info */}
        <SignalDetailDialog__StudentInfoSection
          studentName={model.student.name}
          studentClassTitle={model.student.className}
          studentProfileImageUrl={"https://placehold.co/150"}
        />

        {/* Layer 2: Signal Status */}
        <SignalDetailDialog__SignalStatusSection
          variant={model.label.status}
          statusTitle={model.label.text}
          statusDescription={model.briefingText}
          statusCreatedAt={model.createdAt}
        />

        {/* Layer 3: Signal Reason */}
        <SignalDetailDialog__SignalReasonSection
          signalReasonContent={model.evidences
            .map((evidence) => evidence.text)
            .join("\n")}
          onMoreClick={onMoreClick}
        />
      </div>
    </div>
  );
};
