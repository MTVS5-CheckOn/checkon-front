"use client";

import { SignalState } from "@/domain/signal/state";

import { Alert } from "@/ui/components/Alert";
import { BaseDialog } from "@/ui/components/BaseDialog";
import { FieldLabel } from "@/ui/components/FieldLabel";
import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

const INVITE_CODE = "a4428651366141d987e4ad31b7b72b69";

export type StudentInviteDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const StudentInviteDialog = ({
  isOpen,
  onClose,
}: StudentInviteDialogProps) => {
  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      className="w-125"
      dialogTitle={
        <div
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          학생 초대
        </div>
      }
      dialogContent={<Content />}
    />
  );
};

const Content = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start gap-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <Separator />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start gap-7",
          // 6. Utility
          "overflow-auto",
        )}
      >
        <Alert
          variant={SignalState.Default}
          title="계정 초대하기"
          description={
            "아래 초대 코드를 학생/학부모 앱에서 등록하면 강사님이 관리할 수 있는 계정으로 등록돼요.\n\n초대 코드를 클릭해서 클립보드로 복사할 수 있어요."
          }
        />

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col gap-1",
          )}
        >
          <FieldLabel>초대 코드</FieldLabel>
          <InviteCodeField code={INVITE_CODE} />
        </div>
      </div>
    </div>
  );
};

const InviteCodeField = ({ code }: { code: string }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-10 w-full flex-col justify-center px-3",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-lg border",
        // 5. Interaction
        "ods__animate__default hover:opacity-80",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <button
        type="button"
        className={cn(
          // 1. Layout
          "w-full text-start",
          // 2. Typography
          "ods__typo__label-large underline",
          // 3. Color
          "text-ods__blue-400",
        )}
      >
        {code}
      </button>
    </div>
  );
};
