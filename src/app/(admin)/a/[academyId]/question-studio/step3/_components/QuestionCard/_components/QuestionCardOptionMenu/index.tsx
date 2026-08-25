import { EllipsisIcon } from "lucide-react";

import { Menu } from "@/ui/components/Menu";
import MenuParts from "@/ui/components/Menu/Parts";
import { cn } from "@/ui/utils/tailwind/cn";
import { GeneratedQuestionModelsMockRepo } from "@/mocks/question-mocks";
import { overlay } from "overlay-kit";
import { useController, useFormContext } from "react-hook-form";
import { QuestionReplaceConfirm } from "../../../QuestionReplaceConfirm";
import { QuestionVersionsDialog } from "../../../QuestionVersionsDialog";
import { QuestionDeleteConfirm } from "../../../QuestionDeleteConfirm";
import {
  QuestionPreviewModel,
  QuestionUpdateDialog,
} from "../../../QuestionUpdateDialog";
import { QuestionStudioPageModel } from "../../../../../layout";
import { groupBy, sortBy } from "es-toolkit/array";
import { format } from "date-fns";

/**
 * 문항 카드 옵션 메뉴
 */
export const QuestionCardOptionMenu = ({
  questionId,
}: {
  questionId: string;
}) => {
  const { control } = useFormContext<QuestionStudioPageModel>();
  const { field } = useController({
    control,
    name: "generatedQuestionModels",
  });

  const handleUpdatebyAi = (questionId: string) => {
    const targetQuestion = field.value.find(
      (it) => it.questionId === questionId,
    )!;

    const handleConfirm = (model: QuestionPreviewModel) => {
      field.onChange(
        field.value.map((it) => {
          if (it.questionId === model.questionId) {
            const newQuestion = {
              questionId,
              topic: model.topic,
              type: model.type,
              title: model.title,
              choices: model.choices,
              answer: model.answer,
              level: model.level,
              status: model.status,
              statusReason: model.statusReason,
              generatedReason: model.generatedReason,
              version: model.version,
              createdAt: model.createdAt,
            };

            GeneratedQuestionModelsMockRepo.createItem(newQuestion);

            return newQuestion;
          }

          return it;
        }),
      );
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <QuestionUpdateDialog
          isOpen={isOpen}
          onClose={close}
          initialModel={{
            questionId,
            topic: targetQuestion.topic,
            type: targetQuestion.type,
            title: targetQuestion.title,
            choices: targetQuestion.choices,
            answer: targetQuestion.answer,
            level: targetQuestion.level,
            status: targetQuestion.status,
            statusReason: targetQuestion.statusReason,
            generatedReason: targetQuestion.generatedReason,
            version: targetQuestion.version,
            createdAt: targetQuestion.createdAt,
          }}
          onConfirm={handleConfirm}
        />
      );
    });
  };

  const handleReplaceWithNewQuestion = (questionId: string) => {
    const handleConfirm = () => {
      field.onChange(
        field.value.map((it) => {
          if (it.questionId === questionId) {
            const newQuestion = {
              ...GeneratedQuestionModelsMockRepo.getRandomItem(),
              questionId,
              version: it.version + 1,
              createdAt: new Date(),
            };

            GeneratedQuestionModelsMockRepo.createItem(newQuestion as any);

            return newQuestion;
          }

          return it;
        }),
      );
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <QuestionReplaceConfirm
          isOpen={isOpen}
          onClose={close}
          onConfirm={handleConfirm}
        />
      );
    });
  };

  const handleSelectVersion = (questionId: string) => {
    const targetQuestions =
      GeneratedQuestionModelsMockRepo.getItems().filter(
        (it) => it.questionId === questionId,
      ) ?? [];

    const grouped = groupBy(targetQuestions, (it) =>
      format(it.createdAt, "yyyy-MM-dd"),
    );

    const versionGroups = sortBy(
      Object.entries(grouped).map(([date, items]) => {
        const sortedDescItems = sortBy(items, [(it) => it.createdAt])
          .reverse()
          .map((it) => {
            return {
              questionId: it.questionId,
              title: it.title,
              time: format(it.createdAt, "HH:mm"),
              version: it.version,
            };
          });

        return {
          date,
          items: sortedDescItems,
        };
      }),
      [(it) => it.date],
    ).reverse();

    const handleItemClick = (questionId: string, version: number) => {
      const targetQuestion = GeneratedQuestionModelsMockRepo.getItems().find(
        (it) => it.questionId === questionId && it.version === version,
      );

      field.onChange(
        field.value.map((it) => {
          if (it.questionId === questionId) {
            return targetQuestion;
          }

          return it;
        }),
      );
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <QuestionVersionsDialog
          isOpen={isOpen}
          onClose={close}
          versionGroups={versionGroups}
          onItemClick={handleItemClick}
        />
      );
    });
  };

  const handleDelete = (questionId: string) => {
    const handleRemove = () => {
      field.onChange(
        field.value.filter((it) => it.questionId !== questionId), //
      );
    };

    overlay.open(({ isOpen, close }) => {
      return (
        <QuestionDeleteConfirm
          isOpen={isOpen}
          onClose={close}
          onRemove={handleRemove}
        />
      );
    });
  };

  return (
    <Menu
      trigger={
        <div
          aria-label="문항 옵션"
          className={cn(
            // 1. Layout
            "flex size-8 items-center justify-center",
            // 4. Shadow & Border
            "border-ods__border rounded-sm border",
            // 5. Interaction
            "ods__animate__default hover:bg-ods__hover",
          )}
        >
          <EllipsisIcon className="text-ods__base-600" />
        </div>
      }
    >
      <MenuParts.Item isButton onClick={() => handleUpdatebyAi(questionId)}>
        AI로 수정하기
      </MenuParts.Item>
      <MenuParts.Item
        isButton
        onClick={() => handleReplaceWithNewQuestion(questionId)}
      >
        새 문항으로 교체하기
      </MenuParts.Item>
      <MenuParts.Item isButton onClick={() => handleSelectVersion(questionId)}>
        버전 선택하기
      </MenuParts.Item>
      <MenuParts.Item isButton onClick={() => handleDelete(questionId)}>
        삭제하기
      </MenuParts.Item>
    </Menu>
  );
};
