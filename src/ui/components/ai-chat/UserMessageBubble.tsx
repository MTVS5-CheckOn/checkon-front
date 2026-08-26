import { ReactNode } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type UserMessageBubbleProps = {
  isMine: boolean;
  sender?: string;
  timestamp?: string;
  options?: ReactNode;
  children: ReactNode;
};

/**
 * 사용자 메시지 버블
 *
 * isMine=true: Sender/Options 숨김, bg-ods__blue-50, 우측 정렬
 * isMine=false: Sender/Options 노출, bg-ods__base-50, 좌측 정렬
 */
export const UserMessageBubble = ({
  isMine,
  sender,
  timestamp,
  options,
  children,
}: UserMessageBubbleProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full gap-2.5",
        isMine ? "justify-end" : "justify-start",
      )}
    >
      <div className={cn("flex w-[530px] max-w-full flex-col gap-2")}>
        {!isMine && sender && (
          <span
            className={cn(
              // 2. Typography
              "ods__typo__body-large font-medium",
              // 3. Color
              "text-ods__base-700",
            )}
          >
            {sender}
          </span>
        )}

        <div className={cn("flex items-start gap-2")}>
          {isMine && timestamp && (
            <div className={cn("flex items-end self-stretch")}>
              <span
                className={cn(
                  // 2. Typography
                  "ods__typo__body-small",
                  // 3. Color
                  "text-ods__base-500",
                )}
              >
                {timestamp}
              </span>
            </div>
          )}

          <div className={cn("flex flex-1 flex-col gap-2")}>
            <div
              className={cn(
                // 1. Layout
                "flex items-center justify-center overflow-hidden px-4 py-3",
                // 3. Color
                isMine ? "bg-ods__blue-50" : "bg-ods__base-50",
                // 4. Shadow & Border
                "rounded-lg",
              )}
            >
              <div
                className={cn(
                  // 2. Typography
                  "ods__typo__body-large flex-1 whitespace-pre-line",
                  // 3. Color
                  "text-ods__base-700",
                )}
              >
                {children}
              </div>
            </div>

            {!isMine && options && (
              <div className={cn("flex justify-end overflow-hidden")}>
                {options}
              </div>
            )}
          </div>

          {!isMine && timestamp && (
            <div className={cn("flex items-end self-stretch pb-7")}>
              <span
                className={cn(
                  // 2. Typography
                  "ods__typo__body-small",
                  // 3. Color
                  "text-ods__base-500",
                )}
              >
                {timestamp}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
