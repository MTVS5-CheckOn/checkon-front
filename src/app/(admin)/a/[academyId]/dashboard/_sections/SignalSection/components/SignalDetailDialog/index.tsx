import { BaseDialog } from "@/ui/components/BaseDialog";
import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { Suspense } from "react";
import { SignalDetailDialog__SignalReasonSection } from "./components/ReasonSection";
import { SignalDetailDialog__SignalStatusSection } from "./components/StatusSection";
import { SignalDetailDialog__StudentInfoSection } from "./components/StudentInfoSection";
import { useSignalDetailDialog } from "./hooks/useSignalDetailDialog";

export type SignalDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  signalId: string;
};

/**
 * 대시보드 > 신호 섹션 > 신호 상세 다이얼로그
 */
export const SignalDetailDialog = ({
  isOpen,
  onClose,
  signalId,
}: SignalDetailDialogProps) => {
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
          <Content signalId={signalId} />
        </Suspense>
      }
    />
  );
};

const Content = ({ signalId }: { signalId: string }) => {
  const { data } = useSignalDetailDialog(signalId);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <Separator thickness="1px" />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-7",
        )}
      >
        {/* Layer 1: Student Info */}
        <SignalDetailDialog__StudentInfoSection
          studentName={data.studentName}
          studentClassTitle={data.studentClassTitle}
          studentProfileImageUrl={data.studentProfileImageUrl}
        />

        {/* Layer 2: Signal Status */}
        <SignalDetailDialog__SignalStatusSection
          variant={data.signalStatusVariant}
          statusTitle={data.signalStatusTitle}
          statusDescription={data.signalStatusDescription}
          statusCreatedAt={data.signalCreatedAt}
        />

        {/* Layer 3: Signal Reason */}
        <SignalDetailDialog__SignalReasonSection
          signalReasonContent={data.signalReasonContent}
        />
      </div>
    </div>
  );
};
