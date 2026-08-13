import { cn } from "@/ui/utils/tailwind/cn";
import type { ComponentPropsWithRef } from "react";

export type TableHeaderCellProps = ComponentPropsWithRef<"th">;

export const TableHeaderCell = ({
  className,
  children,
  ...props
}: TableHeaderCellProps) => {
  return (
    <th
      className={cn(
        // 1. Layout
        "flex shrink-0 flex-col justify-center overflow-hidden p-4",
        // 2. Typography
        "ods__typo__label-large",
        // 3. Color
        "bg-ods__base-50 text-ods__base-500",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};
