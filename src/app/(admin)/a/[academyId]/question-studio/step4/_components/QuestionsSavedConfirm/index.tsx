import { BaseConfirm } from "@/ui/components/BaseConfirm";

/**
 * 과제 발행 컨펌
 */
export const QuestionsSavedConfirm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const studentName = "홍길동";
  const questionCount = 10;

  return (
    <BaseConfirm
      isOpen={isOpen}
      onClose={onClose}
      title="과제로 발행하시겠어요?"
      description={`${studentName} 학생에게 ${questionCount} 문항을 과제로 발행 하시겠어요?`}
      cancelButtonProps={{
        children: "취소",
        onClick: () => {},
      }}
      confirmButtonProps={{
        color: "blue",
        children: "발행하기",
        onClick: () => {},
      }}
    />
  );
};
