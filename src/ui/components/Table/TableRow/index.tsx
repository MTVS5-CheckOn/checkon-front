import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type TableRowProps = {
  hasBorderBottom?: boolean;
  hoverable?: boolean;
} & ComponentPropsWithRef<"tr">;

export const TableRow = ({
  hasBorderBottom = false,
  hoverable = true,
  className,
  ...props
}: TableRowProps) => (
  <tr
    className={cn(
      // 1. Layout
      "flex w-full items-start",
      // 4. Shadow & Border
      hasBorderBottom && "border-ods__border border-b",
      hoverable && "ods__animate__default hover:bg-ods__hover",
      className,
    )}
    {...props}
  />
);
