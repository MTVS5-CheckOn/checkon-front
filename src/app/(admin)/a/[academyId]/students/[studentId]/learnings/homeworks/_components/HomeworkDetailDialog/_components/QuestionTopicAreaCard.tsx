"use client";

import { Fragment } from "react";

import { CheckIcon } from "lucide-react";

import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

const COLUMN_HEADERS = [
  "사실적 이해",
  "추론적 이해",
  "비판적 이해",
  "어휘·개념",
] as const;

const ROWS = [
  { label: "독서 (비문학)", checked: [false, true, true, true] },
  { label: "문학", checked: [false, false, false, true] },
  { label: "화법과 작문", checked: [false, false, false, false] },
  { label: "언어", checked: [false, false, false, false] },
  { label: "매체", checked: [false, true, false, false] },
] as const;

/**
 * 출제 영역 카드
 */
export const QuestionTopicAreaCard = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start px-5 py-4",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large font-semibold",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          출제 영역
        </span>
      </div>

      <div className={cn("flex w-full items-center justify-center pt-4 pb-3")}>
        <Separator />
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "grid w-full grid-cols-[100px_repeat(4,1fr)] gap-3",
          )}
        >
          <div />

          {COLUMN_HEADERS.map((header) => (
            <Column key={header}>{header}</Column>
          ))}

          {ROWS.map((row) => (
            <Fragment key={row.label}>
              <Row>{row.label}</Row>

              {row.checked.map((checked, index) => (
                <MatrixCell checked={checked} key={`${row.label}-${index}`} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Column = ({ children }: { children: string }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-6 items-center justify-center",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {children}
      </span>
    </div>
  );
};

const Row = ({ children }: { children: string }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-center",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {children}
      </span>
    </div>
  );
};

const MatrixCell = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-12 w-full flex-col items-center justify-center",
        // 3. Color
        checked ? "bg-ods__blue-40" : "bg-ods__base-50",
        // 4. Shadow & Border
        "rounded-lg",
      )}
    >
      {checked && (
        <CheckIcon
          className={cn(
            // 1. Layout
            "size-6",
            // 3. Color
            "text-ods__blue-500",
          )}
        />
      )}
    </div>
  );
};
