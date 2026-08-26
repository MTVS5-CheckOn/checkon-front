import { BaseConfirm } from "@/ui/components/BaseConfirm";

/**
 * 리포트 발송 컨펌
 */
export const ReportSendConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  reportCount,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  reportCount: number;
}) => {
  return (
    <BaseConfirm
      isOpen={isOpen}
      onClose={onClose}
      title={`리포트를 발송하시겠어요?`}
      description={` 리포트 ${reportCount}건을 일괄 발송하시겠어요?
발송된 리포트는 더 이상 수정할 수 없어요.`}
      cancelButtonProps={{
        children: "취소",
      }}
      confirmButtonProps={{
        color: "blue",
        children: "발송하기",
        onClick: onConfirm,
      }}
    />
  );
};
