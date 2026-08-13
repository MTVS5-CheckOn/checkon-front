import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type TableBodyProps = {
  hasBorderBottom?: boolean;
} & ComponentPropsWithRef<"tbody">;

export const TableBody = ({
  hasBorderBottom = false,
  className,
  ...props
}: TableBodyProps) => (
  <tbody
    className={cn(
      // 1. Layout
      "flex w-full flex-col",
      // 4. Shadow & Border
      hasBorderBottom && "border-ods__border border-b",
      className,
    )}
    {...props}
  />
);
