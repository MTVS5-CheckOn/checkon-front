import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type ModelResponseMessageProps = ComponentPropsWithRef<"p">;

/**
 * 모델 응답 메시지
 */
export const ModelResponseMessage = ({
  className,
  ...props
}: ModelResponseMessageProps) => {
  return (
    <p
      className={cn(
        // 2. Typography
        "ods__typo__body-large flex-1 whitespace-pre-line",
        // 3. Color
        "text-ods__base-700",
        className,
      )}
      {...props}
    />
  );
};
