import { BaseConfirm } from "@/ui/components/BaseConfirm";

/**
 * 문항 삭제 컨펌
 */
export const QuestionDeleteConfirm = ({
  isOpen,
  onClose,
  onRemove,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRemove: () => void;
}) => {
  return (
    <BaseConfirm
      isOpen={isOpen}
      onClose={onClose}
      title="문항을 삭제하시겠어요?"
      description="삭제한 문항은 현재 페이지에서 나가기 전까지만 되돌릴 수 있어요."
      cancelButtonProps={{
        children: "취소",
        onClick: () => {},
      }}
      confirmButtonProps={{
        children: "삭제하기",
        color: "red",
        className: "w-36 flex-none",
        onClick: onRemove,
      }}
    />
  );
};
