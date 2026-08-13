import { BaseConfirm } from "@/ui/components/BaseConfirm";
/**
 * 문항 저장 컨펌
 */
export const QuestionsSavedConfirm = ({
  isOpen,
  onClose,
  questionCount,
}: {
  isOpen: boolean;
  onClose: () => void;
  questionCount: number;
}) => {
  return (
    <BaseConfirm
      isOpen={isOpen}
      onClose={onClose}
      title="문항을 저장했어요"
      description={`${questionCount} 문항을 영구적으로 저장했어요.
문항 관리 페이지에서 확인할 수 있어요.
      `}
    />
  );
};
