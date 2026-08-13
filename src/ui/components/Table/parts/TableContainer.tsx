import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type TableContainerProps = ComponentPropsWithRef<"div">;

export const TableContainer = ({
  className,
  ...props
}: TableContainerProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};
