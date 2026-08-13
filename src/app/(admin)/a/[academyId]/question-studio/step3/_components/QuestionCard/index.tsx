import { Alert, AlertProps } from "@/ui/components/Alert";
import { StatusLabel, StatusLabelProps } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionCardParts } from "@/ui/domain-components/question/QuestionCard/parts";

import { QuestionCardOptionMenu } from "./_components/QuestionCardOptionMenu";
import { ComponentPropsWithRef } from "react";

export type QuestionCardProps = {
  statusLabel: StatusLabelProps;
  title: string;
  choiceProps: ComponentPropsWithRef<typeof QuestionCardParts.ChoiceItem>[];
  reason: string;
  alertProps?: AlertProps;
  readonly?: boolean;
  questionId: string;
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
  questionId,
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
            questionId={questionId}
          />

          <Choices choices={choiceProps} readonly={readonly} />
        </div>

        <QuestionCardParts.Reason reason={reason} />

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
  questionId,
}: {
  statusLabelProps: StatusLabelProps;
  title: string;
  readonly?: boolean;
  questionId: string;
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
          "flex w-full items-start justify-between gap-3",
        )}
      >
        <QuestionCardParts.Title>{title}</QuestionCardParts.Title>

        {/* 문항 옵션 버튼 */}
        {!readonly && <QuestionCardOptionMenu questionId={questionId} />}
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
  choices: ComponentPropsWithRef<typeof QuestionCardParts.ChoiceItem>[];
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
        <QuestionCardParts.ChoiceItem
          key={`${choice.label}-${index}`}
          label={choice.label}
          isSelected={choice.isSelected}
          readonly={readonly}
        />
      ))}
    </div>
  );
};
