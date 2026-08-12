import { cn } from "@/ui/utils/tailwind/cn";

import { WeekMap, WeekMapRowDataItemModel } from "@/ui/components/WeekMap";
import { Separator } from "@/ui/components/Separator";
import { Test } from "./test";

const WEEK_MAP_ROW_DATA: WeekMapRowDataItemModel[][] = [
  [
    { status: "POSITIVE", value: "88%" },
    { status: "WARNING", value: "75%" },
    { status: "DANGER", value: "61%" },
    { status: "DEFAULT", value: "-" },
  ],
  [
    { status: "POSITIVE", value: "88%" },
    { status: "WARNING", value: "75%" },
    { status: "DANGER", value: "61%" },
    { status: "DEFAULT", value: "-" },
  ],
  [
    { status: "POSITIVE", value: "88%" },
    { status: "WARNING", value: "75%" },
    { status: "DANGER", value: "61%" },
    { status: "DEFAULT", value: "-" },
  ],
  [
    { status: "POSITIVE", value: "88%" },
    { status: "WARNING", value: "75%" },
    { status: "DANGER", value: "61%" },
    { status: "DEFAULT", value: "-" },
  ],
  [
    { status: "POSITIVE", value: "88%" },
    { status: "WARNING", value: "75%" },
    { status: "DANGER", value: "61%" },
    { status: "DEFAULT", value: "-" },
  ],
];

export const QuestionStudio__TopicSelect__Section = () => {
  return (
    <div className={cn("flex w-full flex-col")}>
      <div className={cn("flex w-full flex-col gap-2")}>
        <Header />

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col gap-8 px-6 py-5",
            // 4. Shadow & Border
            "border-ods__border rounded-xl border",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <div className={cn("flex w-full flex-col gap-5")}>
            <WeekMap data={WEEK_MAP_ROW_DATA} />
            <Separator />
          </div>

          <Test />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={cn("flex flex-col items-start gap-0")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        출제 영역 선택
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        문제 출제 영역을 복수 선택해 주세요.
      </span>
    </div>
  );
};
