"use client";

import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";

import { AiDraftThreadSection } from "./_sections/AiDraftThreadSection";
import { ParentInquiryThreadSection } from "./_sections/ParentInquiryThreadSection";

export type InquiryThreadDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  threadId?: string;
};

/**
 * 학부모 문의 쓰레드 상세 다이얼로그
 */
export const InquiryThreadDialog = ({
  isOpen,
  onClose,
}: InquiryThreadDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      dialogTitle={"문의 쓰레드"}
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex h-full w-full items-stretch gap-6",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <ParentInquiryThreadSection />
          <AiDraftThreadSection />
        </div>
      }
    />
  );
};
