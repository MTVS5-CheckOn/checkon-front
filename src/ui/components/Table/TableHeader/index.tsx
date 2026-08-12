import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type TableHeaderProps = ComponentPropsWithRef<"thead">;

export const TableHeader = ({ className, ...props }: TableHeaderProps) => (
  <thead
    className={cn(
      // 1. Layout
      "flex w-full flex-1 items-center",
      // 3. Color
      "bg-ods__base-50",
      // 4. Shadow & Border
      "border-ods__border border-b",
      className,
    )}
    {...props}
  />
);
