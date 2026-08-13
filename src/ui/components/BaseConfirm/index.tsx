import { AlertDialog } from "@base-ui/react/alert-dialog";

import { cn } from "@/ui/utils/tailwind/cn";

import { Button } from "../Button";

export type BaseConfirmProps = {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  cancelButton?: {
    label?: string;
    onClick?: () => void;
    autoClose?: boolean;
  };
  confirmButton?: {
    label?: string;
    onClick?: () => void;
    autoClose?: boolean;
  };
  dismissible?: boolean;
};

/**
 * 기본 컨펌 모달
 */
export const BaseConfirm = ({
  isOpen,
  onClose,
  title,
  description,
  cancelButton,
  confirmButton,
  dismissible = true,
}: BaseConfirmProps) => {
  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop
          className={cn(
            // 1. Layout
            "fixed inset-0 z-9999",
            // 3. Color
            "bg-ods__black/40",
            // 6. Utility
            "backdrop-blur-xs",
          )}
          onClick={dismissible ? onClose : undefined}
        />
        <AlertDialog.Popup
          className={cn(
            // 1. Layout
            "fixed top-1/2 left-1/2 z-9999 flex -translate-x-1/2 -translate-y-1/2 flex-col",
            // 6. Utility
            "ods__animate__popup-open",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex max-w-85 min-w-85 flex-col items-start justify-start gap-5 px-6 py-7",
              // 3. Color
              "bg-ods__white",
              // 4. Shadow & Border
              "rounded-[20px]",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <div
              className={cn("flex flex-col items-start justify-start gap-4")}
            >
              {/* 제목 */}
              <h6
                className={cn(
                  // 1. Layout
                  "flex flex-col items-start justify-start",
                  // 2. Typography
                  "ods__typo__title-large",
                  // 3. Color
                  "text-ods__base-600",
                )}
              >
                {title}
              </h6>

              <p
                className={cn(
                  // 2. Typography
                  "ods__typo__body-medium whitespace-pre-line",
                  // 3. Color
                  "text-ods__base-500",
                )}
              >
                {description}
              </p>
            </div>

            <div className={cn("flex w-full items-start justify-start gap-2")}>
              <Button
                color="default"
                size="medium"
                className="w-full"
                onClick={cancelButton?.onClick}
              >
                {cancelButton?.label}
              </Button>

              <Button
                color="blue"
                size="medium"
                className="w-full"
                onClick={confirmButton?.onClick}
              >
                {confirmButton?.label}
              </Button>
            </div>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
