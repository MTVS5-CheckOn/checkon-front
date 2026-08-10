import { BaseDialog } from "@/ui/components/BaseDialog";
import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";
import { Suspense } from "react";
import { FollowUpDetailDialog__FollowUpHistorySection } from "./components/HistorySection";
import { FollowUpDetailDialog__FollowUpStatusSection } from "./components/StatusSection";
import { FollowUpDetailDialog__StudentInfoSection } from "./components/StudentInfoSection";
import { useFollowUpDetailDialog } from "./hooks/useFollowUpDetailDialog";

export type FollowUpDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  followUpId: string;
};

/**
 * 대시보드 > 팔로업 섹션 > 팔로업 상세 다이얼로그
 */
export const FollowUpDetailDialog = ({
  isOpen,
  onClose,
  followUpId,
}: FollowUpDetailDialogProps) => {
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
          팔로업 정보
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
          <Content followUpId={followUpId} />
        </Suspense>
      }
    />
  );
};

const Content = ({ followUpId }: { followUpId: string }) => {
  const { data } = useFollowUpDetailDialog(followUpId);

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
        <FollowUpDetailDialog__StudentInfoSection
          studentName={data.studentName}
          studentClassTitle={data.studentClassTitle}
          studentProfileImageUrl={data.studentProfileImageUrl}
        />

        {/* Layer 2: Follow Up Status */}
        <FollowUpDetailDialog__FollowUpStatusSection
          variant={data.followUpStatusVariant}
          statusTitle={data.followUpStatusTitle}
          statusDescription={data.followUpStatusDescription}
          statusCreatedAt={data.followUpCreatedAt}
        />

        {/* Layer 3: Follow Up History */}
        <FollowUpDetailDialog__FollowUpHistorySection
          followUpHistoryItems={data.followUpHistoryItems}
        />
      </div>
    </div>
  );
};
