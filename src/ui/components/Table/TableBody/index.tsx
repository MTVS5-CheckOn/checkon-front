import { cn } from "@/ui/utils/tailwind/cn";

import { ComponentPropsWithRef } from "react";

export type TableBodyProps = ComponentPropsWithRef<"tbody">;

export const TableBody = ({ className, ...props }: TableBodyProps) => (
  <tbody
    className={cn(
      // 1. Layout
      "flex w-full flex-col",
      className,
    )}
    {...props}
  />
);
