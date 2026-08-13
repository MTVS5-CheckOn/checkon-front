import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";
import {
  QuestionVersionHistoryGroupSection,
  QuestionVersionHistoryGroupSectionProps,
} from "./_sections/HistoryGroupSection";

export type QuestionVersionsDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
};

/**
 * 문항 버전 히스토리 다이얼로그
 */
export const QuestionVersionsDialog = ({
  isOpen,
  onClose,
}: QuestionVersionsDialogProps) => {
  const versionGroups = MOCK_VERSION_HISTORY;

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      containerClassName={cn("w-125 max-w-125")}
      dialogTitle={
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          문항 버전 히스토리
        </span>
      }
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 4. Shadow & Border
            "border-ods__border border-t",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start justify-start gap-6 pt-6",
              // 6. Utility
              "overflow-y-auto",
            )}
          >
            {versionGroups.map((group, index) => (
              <QuestionVersionHistoryGroupSection
                key={group.date + index}
                date={group.date}
                items={group.items}
              />
            ))}
          </div>
        </div>
      }
    />
  );
};

// ==============================================

const MOCK_VERSION_HISTORY: QuestionVersionHistoryGroupSectionProps[] = [
  {
    date: "2026-08-12",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 5,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 4,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: 3,
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: 2,
      },
    ],
  },
];
