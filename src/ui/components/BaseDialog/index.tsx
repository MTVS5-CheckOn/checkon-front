import { Dialog } from "@base-ui/react/dialog";

import { cn } from "@/ui/utils/tailwind/cn";
import { XIcon } from "lucide-react";

export type BaseDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  fullScreen?: boolean;
  containerClassName?: string;
  dialogTitle?: React.ReactNode;
  dialogContent?: React.ReactNode;
};

/**
 * 기본 다이얼로그
 */
export const BaseDialog = ({
  isOpen,
  onClose,
  fullScreen,
  containerClassName,
  dialogTitle,
  dialogContent,
}: BaseDialogProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            // 1. Layout
            "fixed inset-0 z-9999",
            // 3. Color
            "bg-ods__black/40",
            // 6. Utility
            "backdrop-blur-xs",
          )}
        />

        <Dialog.Popup
          data-open={isOpen}
          className={cn(
            // 1. Layout
            "fixed top-1/2 left-1/2 z-9999 flex -translate-x-1/2 -translate-y-1/2 flex-col",
            // 5. Interaction
            "ods__animate__popup-open",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex max-h-200 w-150 flex-col items-start justify-start gap-4 px-6 py-7",
              // 3. Color
              "bg-white",
              // 4. Shadow & Border
              "border-ods__border rounded-[20px] border",
              // 6. Utility
              "overflow-hidden",
              fullScreen &&
                "h-screen max-h-none w-screen max-w-none rounded-none border-none",
              containerClassName,
            )}
          >
            {/* Header */}
            <DialogHeader dialogTitle={dialogTitle} onClose={onClose} />

            {/* Content */}
            <section
              className={cn(
                // 1. Layout
                "flex h-full w-full flex-col",
                // 6. Utility
                "overflow-hidden",
              )}
            >
              {dialogContent}
            </section>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const DialogHeader = ({
  dialogTitle,
  onClose,
}: {
  dialogTitle?: React.ReactNode;
  onClose?: () => void;
}) => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-between gap-2",
      )}
    >
      {/* Left Section */}
      <div className={cn("flex flex-col items-start justify-start")}>
        {dialogTitle}
      </div>

      {/* Right Section */}
      <button
        className={cn(
          // 1. Layout
          "flex p-1",
          // 3. Color
          "text-ods__base-400",
          // 4. Shadow & Border
          "rounded-full",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
        )}
        onClick={onClose}
      >
        <XIcon />
      </button>
    </section>
  );
};
