import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type PaginationProps = ComponentPropsWithRef<"div">;

export const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center gap-1 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};
