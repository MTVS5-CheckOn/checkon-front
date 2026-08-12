import { cn } from "@/ui/utils/tailwind/cn";
import { MoreHorizontalIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

export type PaginationEllipsisProps = ComponentPropsWithRef<"div">;

export const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <div
    className={cn(
      // 1. Layout
      "flex size-8 items-center justify-center",
      // 3. Color
      "text-ods__base-500",
      className,
    )}
    {...props}
  >
    <MoreHorizontalIcon className={cn("size-4")} />
  </div>
);
