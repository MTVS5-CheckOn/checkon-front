import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type TableHeaderProps = {
  hasBorderBottom?: boolean;
} & ComponentPropsWithRef<"thead">;

export const TableHeader = ({
  hasBorderBottom = false,
  className,
  ...props
}: TableHeaderProps) => (
  <thead
    className={cn(
      // 1. Layout
      "flex w-full items-center",
      // 4. Shadow & Border
      hasBorderBottom && "border-ods__border border-b",
      className,
    )}
    {...props}
  />
);
