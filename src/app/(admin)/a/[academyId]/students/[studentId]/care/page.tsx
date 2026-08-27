"use client";

import { SignalState } from "@/domain/signal/state";
import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";

import { CareCountTrendChart } from "./_components/CareCountTrendChart";
import { CareRecordTable } from "./_components/CareRecordTable";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 overflow-hidden px-6",
      )}
    >
      <Alert
        variant={SignalState.Warning}
        title="숨은 신호"
        description="최근 일주일간 케어 횟수가 해당 학생 일주일 평균 케어 기록보다 많이 발생했습니다."
      />

      <div className={cn("flex w-full flex-col gap-6")}>
        <div className={cn("flex w-full flex-col items-start gap-2")}>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__label-large text-center",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            케어 횟수 추이
          </span>

          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col px-2 py-3",
              // 4. Shadow & Border
              "border-ods__border rounded-lg border",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <div className={cn("relative h-72 w-full")}>
              <CareCountTrendChart />
            </div>
          </div>
        </div>

        <CareRecordTable />
      </div>
    </div>
  );
}
