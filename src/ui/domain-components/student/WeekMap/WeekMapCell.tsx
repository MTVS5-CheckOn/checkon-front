import { cn } from "@/ui/utils/tailwind/cn";

import type { StatusLabelStatus } from "@/ui/components/StatusLabel";
import { ComponentPropsWithRef } from "react";

export type WeekMapCellProps = {
  status: StatusLabelStatus;
} & ComponentPropsWithRef<"div">;

const CELL_STATUS_STYLES: Record<
  StatusLabelStatus,
  { bgColor: string; textColor: string }
> = {
  Positive: {
    bgColor: "bg-ods__blue-40",
    textColor: "text-ods__blue-500",
  },
  Warning: {
    bgColor: "bg-ods__yellow-20",
    textColor: "text-ods__bronze-500",
  },
  Danger: {
    bgColor: "bg-ods__red-20",
    textColor: "text-ods__red-500",
  },
  Default: {
    bgColor: "bg-ods__base-50",
    textColor: "text-ods__base-700",
  },
};

export const WeekMapCell = ({ status, ...props }: WeekMapCellProps) => (
  <div
    data-status={status}
    className={cn(
      // 1. Layout
      "flex h-12 w-44 items-center justify-center",
      // 2. Typography
      "ods__typo__body-medium",
      // 3. Color
      CELL_STATUS_STYLES[status].bgColor,
      CELL_STATUS_STYLES[status].textColor,
      // 4. Shadow & Border
      "rounded-lg",
    )}
    {...props}
  />
);
