import { cn } from "@/ui/utils/tailwind/cn";

import { WeekMapCell } from "./WeekMapCell";

import {
  StatusLabel,
  type StatusLabelStatus,
} from "@/ui/components/StatusLabel";
import { Separator } from "@/ui/components/Separator";
import { ComponentPropsWithRef } from "react";

const model = {
  columnHeaders: ["사실적 이해", "추론적 이해", "비판적 이해", "어휘·개념"],
  rowHeaders: ["독서 (비문학)", "문학", "화법과 작문", "언어", "매체"],
  statusLabels: [
    { status: "Positive", label: "양호 (평균)" },
    { status: "Warning", label: "약점 신호" },
    { status: "Danger", label: "약점 확정" },
    { status: "Default", label: "판단 보류" },
  ],
};

export type WeekMapRowDataItemModel = {
  status: StatusLabelStatus;
  value: string;
};

export type WeekMapProps = {
  data: WeekMapRowDataItemModel[][];
};

/**
 * 학생 약점 맵
 */
export const WeekMap = ({ data }: WeekMapProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-5",
        // 3. Color
        "bg-ods__white",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {/* ── Header Section: 제목 · 설명 · 상태 범례 ── */}
      <div className={cn("flex w-full items-end justify-between")}>
        <div className={cn("flex flex-col items-start justify-center gap-1")}>
          <p
            className={cn(
              // 2. Typography
              "ods__typo__body-large",
              // 3. Color
              "text-ods__base-600",
            )}
          >
            최근 8주간 문제풀이 데이터의 [출제 영역x유형] 분석
          </p>
          <p
            className={cn(
              // 2. Typography
              "ods__typo__body-medium",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            한 칸을 판단하기 위해 최소 10문항 이상의 문제풀이 데이터가 필요하며,
            학생 본인의 평균을 기준으로 평가 수치를 계산합니다.
          </p>
        </div>

        {/* Status Labels */}
        <div
          className={cn(
            "flex items-start justify-start gap-2",
            "overflow-hidden",
          )}
        >
          {model.statusLabels.map(({ status, label }) => (
            <StatusLabel key={status} status={status as StatusLabelStatus}>
              {label}
            </StatusLabel>
          ))}
        </div>
      </div>

      {/* ── Divider Section ── */}
      <Separator />

      {/* ── Matrix Section: 출제 영역 × 유형 히트맵 ── */}
      <div
        className={cn("flex w-full flex-col items-start justify-start gap-2.5")}
      >
        <div
          className={cn("flex w-full flex-col items-start justify-start gap-3")}
        >
          {/* Column Headers */}
          <div
            className={cn(
              "flex w-full items-start justify-end gap-3",
              "overflow-hidden",
            )}
          >
            {model.columnHeaders.map((header) => (
              <ColumnHeader key={header}>{header}</ColumnHeader>
            ))}
          </div>

          {/* Data Rows */}
          {model.rowHeaders.map((rowHeaderValue, rowHeaderIndex) => (
            <div
              key={rowHeaderValue + `-${rowHeaderIndex}`}
              className={cn(
                "flex w-full items-center justify-between",
                "overflow-hidden",
              )}
            >
              {/* Row Header */}
              <span
                className={cn(
                  // 2. Typography
                  "ods__typo__body-medium text-center",
                  // 3. Color
                  "text-ods__base-600",
                )}
              >
                {rowHeaderValue}
              </span>

              {/* Row Data Cells */}
              <div className={cn("flex items-center justify-start gap-3")}>
                {data[rowHeaderIndex].map((rowDataItem, rowDataItemIndex) => (
                  <WeekMapCell
                    key={`${rowDataItem.value}-${rowDataItemIndex}`}
                    status={rowDataItem.status as StatusLabelStatus}
                  >
                    {rowDataItem.value}
                  </WeekMapCell>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ColumnHeader = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-44 items-center justify-center gap-2.5",
        // 2. Typography
        "ods__typo__label-large",
        // 3. Color
        "text-ods__base-600",
        className,
      )}
      {...props}
    />
  );
};
