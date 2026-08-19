import { cn } from "@/ui/utils/tailwind/cn";
import { ComponentPropsWithRef } from "react";

export type TableProps = ComponentPropsWithRef<"table">;

export const Table = ({ className, ...props }: TableProps) => {
  return (
    <table
      className={cn(
        // 1. Layout
        "flex h-full w-full flex-col",
        className,
      )}
      {...props}
    />
  );
};
