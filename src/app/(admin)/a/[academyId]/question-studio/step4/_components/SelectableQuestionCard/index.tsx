import { Checkbox } from "@/ui/components/Checkbox";
import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionCardParts } from "@/ui/domain-components/question/QuestionCard/parts";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ComponentPropsWithRef } from "react";
import { useToggle } from "react-use";
import { Collapsible } from "@base-ui/react/collapsible";

type ChoiceProps = Omit<
  ComponentPropsWithRef<typeof QuestionCardParts.ChoiceItem>,
  "readonly"
>;

export type SelectableQuestionCardProps = {
  title: string;
  choiceProps: ChoiceProps[];
  reason: string;
};

/**
 * 선택 가능한 문항 카드
 */
export const SelectableQuestionCard = ({
  title,
  choiceProps,
  reason,
}: SelectableQuestionCardProps) => {
  const [isCollapsed, toggleCollapse] = useToggle(true);
  const [isChecked, toggleChecked] = useToggle(false);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start gap-2.5 px-6 py-5",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <Collapsible.Root open={isCollapsed} className="w-full">
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start gap-7",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <Header
            title={title}
            isChecked={isChecked}
            onCheckedChange={toggleChecked}
            isCollapsed={isCollapsed}
            onCollapseClick={toggleCollapse}
          />

          <Collapsible.Panel
            className={cn(
              // 1. Layout
              "flex h-(--collapsible-panel-height) w-full flex-col justify-end",
              "data-ending-style:h-0 data-starting-style:h-0",
              // 5. Interaction
              "transition-[height] duration-250 ease-[ease-out]",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <div
              className={cn(
                // 1. Layout
                "flex w-full flex-col items-start gap-7",
              )}
            >
              <Choices choices={choiceProps} />

              <QuestionCardParts.Reason reason={reason} />
            </div>
          </Collapsible.Panel>
        </div>
      </Collapsible.Root>
    </div>
  );
};

/**
 * 헤더
 */
const Header = ({
  title,
  isChecked,
  onCheckedChange,
  isCollapsed,
  onCollapseClick,
}: {
  title: string;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
  isCollapsed: boolean;
  onCollapseClick: () => void;
}) => {
  return (
    <button
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-between",
      )}
      onClick={onCollapseClick}
    >
      <div className={cn("flex items-center gap-4")}>
        <Checkbox
          size="small"
          onCheckedChange={onCheckedChange}
          checked={isChecked}
        />

        <QuestionCardParts.Title>{title}</QuestionCardParts.Title>
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex size-6 items-center justify-center",
          // 2. Typography
          "text-ods__base-400",
          // 4. Shadow & Border
          "rounded-sm",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {isCollapsed ? <ChevronUp /> : <ChevronDown />}
      </div>
    </button>
  );
};

/**
 * 선지 목록
 */
const Choices = ({ choices }: { choices: ChoiceProps[] }) => {
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
          readonly
        />
      ))}
    </div>
  );
};
