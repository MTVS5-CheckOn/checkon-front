import { EllipsisIcon } from "lucide-react";

import { Menu } from "@/ui/components/Menu";
import MenuParts from "@/ui/components/Menu/Parts";
import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { QuestionReplaceConfirm } from "../../../QuestionReplaceConfirm";
import { QuestionVersionsDialog } from "../../../QuestionVersionsDialog";
import { QuestionDeleteConfirm } from "../../../QuestionDeleteConfirm";
import { QuestionUpdateDialog } from "../../../QuestionUpdateDialog";

/**
 * 문항 카드 옵션 메뉴
 */
export const QuestionCardOptionMenu = () => {
  const handleUpdatebyAi = () => {
    overlay.open(({ isOpen, close }) => {
      return <QuestionUpdateDialog isOpen={isOpen} onClose={close} />;
    });
  };

  const handleReplaceWithNewQuestion = () => {
    overlay.open(({ isOpen, close }) => {
      return <QuestionReplaceConfirm isOpen={isOpen} onClose={close} />;
    });
  };

  const handleSelectVersion = () => {
    overlay.open(({ isOpen, close }) => {
      return <QuestionVersionsDialog isOpen={isOpen} onClose={close} />;
    });
  };

  const handleDelete = () => {
    overlay.open(({ isOpen, close }) => {
      return <QuestionDeleteConfirm isOpen={isOpen} onClose={close} />;
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
      <MenuParts.Item isButton onClick={handleUpdatebyAi}>
        AI로 수정하기
      </MenuParts.Item>
      <MenuParts.Item isButton onClick={handleReplaceWithNewQuestion}>
        새 문항으로 교체하기
      </MenuParts.Item>
      <MenuParts.Item isButton onClick={handleSelectVersion}>
        버전 선택하기
      </MenuParts.Item>
      <MenuParts.Item isButton onClick={handleDelete}>
        삭제하기
      </MenuParts.Item>
    </Menu>
  );
};
