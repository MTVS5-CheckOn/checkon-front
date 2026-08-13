import { cn } from "@/ui/utils/tailwind/cn";

import { Separator } from "@/ui/components/Separator";
import {
  WeekMap,
  WeekMapRowDataItemModel,
} from "@/ui/domain-components/student/WeekMap";
import { SelectedTopics__Section } from "./_section/SelectedTopicSection";
import { useController, useFormContext } from "react-hook-form";
import {
  QuestionStudioPageModel,
  QuestionStudioPageModelHelper,
} from "../../../layout";

const WEEK_MAP_ROW_DATA: WeekMapRowDataItemModel[][] = [
  [
    { status: "Danger", value: "47" },
    { status: "Positive", value: "91" },
    { status: "Warning", value: "73" },
    { status: "Positive", value: "86" },
  ],
  [
    { status: "Warning", value: "67" },
    { status: "Danger", value: "58" },
    { status: "Positive", value: "88" },
    { status: "Default", value: "" },
  ],
  [
    { status: "Positive", value: "95" },
    { status: "Warning", value: "76" },
    { status: "Default", value: "" },
    { status: "Danger", value: "39" },
  ],
  [
    { status: "Warning", value: "69" },
    { status: "Positive", value: "82" },
    { status: "Danger", value: "55" },
    { status: "Warning", value: "78" },
  ],
  [
    { status: "Default", value: "" },
    { status: "Danger", value: "51" },
    { status: "Warning", value: "64" },
    { status: "Positive", value: "93" },
  ],
];

export const QuestionStudio__TopicSelect__Section = () => {
  const { control } = useFormContext<QuestionStudioPageModel>();
  const { field } = useController({
    control,
    name: "selectedTopics",
  });
  const handleTopicSelect = ({
    topic,
    type,
  }: {
    topic: string;
    type: string;
  }) => {
    const oldSelectedTopics: { topic: string; type: string }[] = field.value;

    /**
     * 이미 선택된 출제 영역이면 제거
     */
    const found = oldSelectedTopics.find((it) =>
      QuestionStudioPageModelHelper.equalsTopic(it, { topic, type }),
    );
    if (found) {
      field.onChange(
        oldSelectedTopics.filter(
          (it) =>
            !QuestionStudioPageModelHelper.equalsTopic(it, { topic, type }),
        ),
      );
      return;
    }

    /**
     * 새로운 출제 영역 선택
     */
    field.onChange([...oldSelectedTopics, { topic, type, questionCount: 1 }]);
  };

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
            <WeekMap
              data={WEEK_MAP_ROW_DATA}
              selectedPairs={field.value}
              onCellClick={(model) => {
                handleTopicSelect(model);
              }}
            />
            <Separator />
          </div>

          <SelectedTopics__Section />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={cn("flex flex-col items-start")}>
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
