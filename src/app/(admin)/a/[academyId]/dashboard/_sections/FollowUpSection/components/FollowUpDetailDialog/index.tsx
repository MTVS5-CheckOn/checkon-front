import { BaseDialog } from "@/ui/components/BaseDialog";
import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

import { FollowUpDetailDialog__FollowUpHistorySection } from "./historySection";
import { FollowUpDetailDialog__FollowUpStatusSection } from "./StatusSection";
import { FollowUpDetailDialog__StudentInfoSection } from "./StudentInfoSection";

export type FollowUpDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * 대시보드 > 팔로업 섹션 > 팔로업 상세 다이얼로그
 */
export const FollowUpDetailDialog = ({
  isOpen,
  onClose,
}: FollowUpDetailDialogProps) => {
  const data: {
    studentName: string;
    studentClassTitle: string;
    signalStatusVariant: "warning" | "danger" | "success" | "default";
    signalStatusTitle: string;
    signalStatusDescription: string;
    signalReasonContent: string;
    signalCreatedAt: Date;
    studentProfileImageUrl: string;
  } = {
    studentName: "김지민",
    studentClassTitle: "고1 수능 국어반",
    signalStatusVariant: "warning",
    signalStatusTitle: "숨은 신호",
    signalStatusDescription:
      "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
    signalReasonContent:
      "수업 중 엎드려 있는 빈도 증가\n과제 제출 지연 횟수 증가\n수업 참여도 및 발언 감소",
    signalCreatedAt: new Date(),
    studentProfileImageUrl:
      "https://static.cdn.kmong.com/gigs/12gtG1768751356.jpg?w=200",
  };

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={
        <div
          className={cn(
            // 2. Typography
            "ods__typo__title-medium font-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          팔로업 정보
        </div>
      }
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <Separator variants="dashed" />

          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start justify-start gap-7 pt-6",
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
              variant={data.signalStatusVariant}
              statusTitle={data.signalStatusTitle}
              statusDescription={data.signalStatusDescription}
              statusCreatedAt={data.signalCreatedAt}
            />

            {/* Layer 3: Signal Reason */}
            <FollowUpDetailDialog__FollowUpHistorySection />
          </div>
        </div>
      }
    />
  );
};
