import { cn } from "@/ui/utils/tailwind/cn";
import { PreviewSection } from "./_sections/Preview";
import { ChatMessageModel, ChatSection } from "./_sections/Chat";
import { BaseDialog } from "@/ui/components/BaseDialog";
import { FormProvider, useForm } from "react-hook-form";

export type QuestionPreviewModel = {
  questionId: string;
  topic: "독서" | "문학" | "화법과 작문" | "언어" | "매체";
  type: "사실적 이해" | "추론적 이해" | "비판적 이해" | "어휘/개념";
  title: string;
  choices: string[];
  answer: string;
  level: "상" | "중" | "하";
  status: "Passed" | "ReviewNeeded" | "VerificationFailed" | "Rejected";
  statusReason: string;
  generatedReason: string;
  version: number;
  createdAt: Date;
};

export type QuestionUpdateDialogModel = {
  chatMessages: ChatMessageModel[];
  questionPreview: QuestionPreviewModel;
};

export type QuestionUpdateDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  initialModel: QuestionPreviewModel;
  onConfirm: (model: QuestionPreviewModel) => void;
};

export const QuestionUpdateDialog = ({
  isOpen,
  onClose,
  initialModel,
  onConfirm,
}: QuestionUpdateDialogProps) => {
  const formMethods = useForm<QuestionUpdateDialogModel>({
    defaultValues: {
      chatMessages: [],
      questionPreview: initialModel,
    },
  });

  const handleConfirm = () => {
    onConfirm?.(formMethods.getValues("questionPreview"));
    onClose?.();
  };

  return (
    <FormProvider {...formMethods}>
      <BaseDialog
        isOpen={isOpen}
        onClose={onClose}
        fullScreen
        dialogTitle="AI로 문항 수정하기"
        dialogContent={
          <div
            className={cn(
              // 1. Layout
              "flex h-full max-h-full w-full flex-1 items-start justify-start gap-6",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <ChatSection />

            <PreviewSection onConfirm={handleConfirm} />
          </div>
        }
      />
    </FormProvider>
  );
};
