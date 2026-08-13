import { BaseConfirm } from "@/ui/components/BaseConfirm";

/**
 * 과제 발행 컨펌
 */
export const HomeWorkConfirm = ({
  isOpen,
  onClose,
  studentName,
  questionCount,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  questionCount: number;
  onConfirm: () => void;
}) => {
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
        onClick: onConfirm,
      }}
    />
  );
};
