import { XIcon } from "lucide-react";

import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

type QuestionVersionHistoryItem = {
  title: string;
  time: string;
  version: string;
};

type QuestionVersionHistoryGroup = {
  date: string;
  items: QuestionVersionHistoryItem[];
};

const MOCK_VERSION_HISTORY: QuestionVersionHistoryGroup[] = [
  {
    date: "2026-08-12",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: "Version 5",
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: "Version 4",
      },
    ],
  },
  {
    date: "2026-08-11",
    items: [
      {
        title: "객관적인 문항으로 수정",
        time: "23:00",
        version: "Version 3",
      },
      {
        title: "객관적인 문항으로 수정",
        time: "22:00",
        version: "Version 2",
      },
    ],
  },
];

const QuestionVersionHistoryItemCard = ({
  title,
  time,
  version,
}: QuestionVersionHistoryItem) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-start justify-start gap-3 px-3 py-2",
        // 3. Color
        "bg-ods__base-50",
        // 4. Shadow & Border
        "border-ods__border rounded-lg border",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-1",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex w-full items-center justify-start gap-2",
          )}
        >
          <span
            className={cn(
              // 2. Typography
              "ods__typo__body-medium flex-1",
              // 3. Color
              "text-ods__base-600",
            )}
          >
            {title}
          </span>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__caption",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {time}
          </span>
        </div>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-small w-full",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {version}
        </span>
      </div>
    </div>
  );
};

const QuestionVersionHistoryGroupSection = ({
  date,
  items,
}: QuestionVersionHistoryGroup) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        {date}
      </span>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2",
        )}
      >
        {items.map((item) => (
          <QuestionVersionHistoryItemCard
            key={item.version}
            title={item.title}
            time={item.time}
            version={item.version}
          />
        ))}
      </div>
    </div>
  );
};

export type QuestionVersionsDialogProps = {
  versionGroups?: QuestionVersionHistoryGroup[];
  onClose?: () => void;
};

export const QuestionVersionsDialog = ({
  versionGroups = MOCK_VERSION_HISTORY,
  onClose,
}: QuestionVersionsDialogProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-125 flex-col items-start justify-start gap-4 px-6 py-7",
        // 3. Color
        "bg-white",
        // 4. Shadow & Border
        "rounded-[20px]",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full items-center justify-start gap-2",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large flex-1",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          문항 버전 히스토리
        </span>

        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className={cn(
            // 1. Layout
            "flex p-1",
            // 3. Color
            "text-ods__base-400",
            // 4. Shadow & Border
            "rounded-full",
            // 5. Interaction
            "ods__animate__default hover:bg-ods__hover",
          )}
        >
          <XIcon className="size-4" />
        </button>
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <Separator />

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start gap-6 pt-6",
          )}
        >
          {versionGroups.map((group) => (
            <QuestionVersionHistoryGroupSection
              key={group.date}
              date={group.date}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
