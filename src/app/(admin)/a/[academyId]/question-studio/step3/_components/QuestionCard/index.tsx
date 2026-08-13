import { Alert, AlertProps } from "@/ui/components/Alert";
import { StatusLabel, StatusLabelProps } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

import {
  QuestionChoiceItem,
  QuestionChoiceItemProps,
} from "./_components/QuestionChoiceItem";
import { QuestionCardOptionMenu } from "./_components/QuestionCardOptionMenu";

export type QuestionCardProps = {
  statusLabel: StatusLabelProps;
  title: string;
  choiceProps: QuestionChoiceItemProps[];
  reason: string;
  alertProps?: AlertProps;
  readonly?: boolean;
};

/**
 * 문항 카드
 */
export const QuestionCard = ({
  statusLabel,
  title,
  choiceProps,
  reason,
  alertProps,
  readonly = false,
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
          <Header
            statusLabelProps={statusLabel}
            title={title}
            readonly={readonly}
          />

          <Choices choices={choiceProps} readonly={readonly} />
        </div>

        <Reason reason={reason} />

        {/* 경고 알림 */}
        {alertProps && (
          <Alert
            variant={alertProps.variant}
            title={alertProps.title}
            description={alertProps.description}
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
  statusLabelProps,
  title,
  readonly = false,
}: {
  statusLabelProps: StatusLabelProps;
  title: string;
  readonly?: boolean;
}) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-1",
      )}
    >
      {/* 상태 라벨 */}
      <StatusLabel {...statusLabelProps} />

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
        {!readonly && <QuestionCardOptionMenu />}
      </div>
    </div>
  );
};

/**
 * 선지 목록
 */
const Choices = ({
  choices,
  readonly = false,
}: {
  choices: QuestionChoiceItemProps[];
  readonly?: boolean;
}) => {
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
          readonly={readonly}
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
          "ods__typo__title-small font-medium",
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
          "text-ods__base-400",
        )}
      >
        {reason}
      </span>
    </div>
  );
};
