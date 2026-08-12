import { cn } from "@/ui/utils/tailwind/cn";
import type { ComponentPropsWithRef, ReactNode } from "react";

export type TableCellProps = {
  children: ReactNode;
} & ComponentPropsWithRef<"td">;

export const TableCell = ({
  className,
  children,
  ...props
}: TableCellProps) => (
  <td
    className={cn(
      // 1. Layout
      "flex shrink-0 flex-col justify-center overflow-hidden p-4",
      // 2. Typography
      "ods__typo__label-large",
      // 3. Color
      "text-ods__base-600",
      className,
    )}
    {...props}
  >
    {children}
  </td>
);
