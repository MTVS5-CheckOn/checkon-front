import { BaseConfirm } from "@/ui/components/BaseConfirm";

/**
 * 문항 교체 컨펌
 */
export const QuestionReplaceConfirm = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <BaseConfirm
      isOpen={isOpen}
      onClose={onClose}
      title="문항을 교체하시겠어요?"
      description={`해당 문항을 기존 조건에 맞춰 새로 생성해요.

교체된 문항은 버전으로 기록되고 버전 선택으로 이전 상태로 되돌릴 수 있어요.`}
      cancelButtonProps={{
        children: "취소",
      }}
      confirmButtonProps={{
        color: "blue",
        children: "교체하기",
        onClick: onConfirm,
      }}
    />
  );
};
