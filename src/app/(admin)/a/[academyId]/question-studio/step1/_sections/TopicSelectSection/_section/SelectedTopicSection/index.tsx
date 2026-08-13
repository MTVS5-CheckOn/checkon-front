import { cn } from "@/ui/utils/tailwind/cn";

import { SelectedTopicGridItem } from "./_components/SelectedTopicGridItem";
import {
  QuestionStudioPageModel,
  QuestionStudioPageModelHelper,
} from "../../../../../layout";

import { useController, useFormContext } from "react-hook-form";

export const SelectedTopics__Section = () => {
  const { control } = useFormContext<QuestionStudioPageModel>();
  const { field } = useController({
    control,
    name: "selectedTopics",
  });
  const selectedTopics = field.value;

  const handleQuestionCountChange = (
    topicModel: { topic: string; type: string },
    newQuestionCount: number,
  ) => {
    if (newQuestionCount < 1 || newQuestionCount > 20) {
      return;
    }

    const oldSelectedTopics = selectedTopics;
    const newTopicModel = { ...topicModel, questionCount: newQuestionCount };

    /**
     * 이미 선택된 출제 영역인지
     */
    const found = oldSelectedTopics.find((it) =>
      QuestionStudioPageModelHelper.equalsTopic(it, topicModel),
    );

    /**
     * 새로운 출제 영역 선택
     */
    if (!found) {
      field.onChange([...selectedTopics, newTopicModel]);
      return;
    }

    /**
     * 이미 선택된 출제 영역이면 수정
     */
    const updated = selectedTopics.map((it) => {
      if (QuestionStudioPageModelHelper.equalsTopic(it, topicModel)) {
        return { ...it, questionCount: newQuestionCount };
      }

      return it;
    });

    field.onChange(updated);
  };

  const handleRemove = (topicModel: { topic: string; type: string }) => {
    const filteredTopics = selectedTopics.filter(
      (it) => !QuestionStudioPageModelHelper.equalsTopic(it, topicModel),
    );
    field.onChange(filteredTopics);
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2",
      )}
    >
      {/* Header Section */}
      <div className={cn("flex items-center justify-start gap-2")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          선택된 출제 영역
        </span>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-small",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {selectedTopics.length}개
        </span>
      </div>

      {/* Grid Section */}
      <div
        className={cn(
          // 1. Layout
          "grid w-full grid-cols-3 gap-3",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {selectedTopics.map((topicModel) => (
          <SelectedTopicGridItem
            key={`${topicModel.topic}-${topicModel.type}`}
            title={`${topicModel.topic} x ${topicModel.type}`}
            questionCount={topicModel.questionCount}
            onQuestionCountChange={(newQuestionCount) => {
              handleQuestionCountChange(topicModel, newQuestionCount);
            }}
            onRemove={() => handleRemove(topicModel)}
          />
        ))}
      </div>
    </div>
  );
};
