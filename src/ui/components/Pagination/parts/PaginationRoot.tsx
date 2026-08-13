import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type PaginationRootProps = ComponentPropsWithRef<"div">;

export const PaginationRoot = ({
  className,
  ...props
}: PaginationRootProps) => {
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
