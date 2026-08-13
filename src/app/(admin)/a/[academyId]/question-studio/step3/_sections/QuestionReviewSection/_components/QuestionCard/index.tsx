import { EllipsisIcon } from "lucide-react";

import { Alert, AlertVariant } from "@/ui/components/Alert";
import {
  StatusLabel,
  type StatusLabelStatus,
} from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

import {
  QuestionChoiceItem,
  QuestionChoiceItemProps,
} from "../QuestionChoiceItem";
import { overlay } from "overlay-kit";
import { QuestionVersionsDialog } from "../../../../_components/QuestionVersionsDialog";

export type QuestionCardProps = {
  statusLabel: {
    status: StatusLabelStatus;
    text: string;
  };
  title: string;
  choices: QuestionChoiceItemProps[];
  reason: string;
  alert?: {
    variant: AlertVariant;
    title: string;
    description: string;
  };
};

export const QuestionCard = ({
  statusLabel,
  title,
  choices,
  reason,
  alert,
}: QuestionCardProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2.5 px-6 py-5",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-7",
          // 3. Color
          "bg-white",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start gap-4",
          )}
        >
          <Header statusLabel={statusLabel} title={title} />

          <Choices choices={choices} />
        </div>

        <Reason reason={reason} />

        {/* 경고 알림 */}
        {alert && (
          <Alert
            variant={alert.variant}
            title={alert.title}
            description={alert.description}
          />
        )}
      </div>
    </div>
  );
};

/**
 * 헤더
 */
const Header = ({
  statusLabel,
  title,
}: {
  statusLabel: {
    status: StatusLabelStatus;
    text: string;
  };
  title: string;
}) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-1",
      )}
    >
      {/* 상태 라벨 */}
      <StatusLabel status={statusLabel.status}>{statusLabel.text}</StatusLabel>

      {/* 문항 제목 */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full items-center justify-between",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          {title}
        </span>

        {/* 문항 옵션 버튼 */}
        <button
          type="button"
          className={cn(
            // 1. Layout
            "flex size-8 items-center justify-center",
            // 4. Shadow & Border
            "border-ods__border rounded-sm border",
            // 5. Interaction
            "ods__animate__default hover:bg-ods__hover",
          )}
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <QuestionVersionsDialog isOpen={isOpen} onClose={close} />;
            });
          }}
        >
          <EllipsisIcon className="text-ods__base-600" />
        </button>
      </div>
    </div>
  );
};

/**
 * 선지 목록
 */
const Choices = ({ choices }: { choices: QuestionChoiceItemProps[] }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "grid w-full grid-cols-2 gap-3",
      )}
    >
      {choices.map((choice, index) => (
        <QuestionChoiceItem
          key={`${choice.label}-${index}`}
          label={choice.label}
          isSelected={choice.isSelected}
        />
      ))}
    </div>
  );
};

/**
 * 출제 근거
 */
const Reason = ({ reason }: { reason: string }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-1",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium font-semibold",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        출제 근거
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {reason}
      </span>
    </div>
  );
};
