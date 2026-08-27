"use client";

import { SignalState } from "@/domain/signal/state";
import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";

import { AccuracyTrendChart } from "./_components/AccuracyTrendChart";
import { SolvingTimeTrendChart } from "./_components/SolvingTimeTrendChart";
import { WeaknessMap } from "./_components/WeaknessMap";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 overflow-hidden px-6 pb-8",
      )}
    >
      <Alert
        variant={SignalState.Warning}
        title="숨은 신호"
        description={
          "'비문학 추론'(61%)이 막혀있습니다. 독해 기능 사다리상 선행 단계인 '문단 중심 내용 파악' 재점검을 권장합니다.\n최근 오답 7건 중 5건이 중심 내용 오독에서 발생 되었습니다."
        }
      />

      <div className={cn("flex w-full flex-col gap-12")}>
        <div className={cn("flex w-full flex-col gap-6")}>
          <div className={cn("flex w-full flex-col DFitems-start gap-2")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__label-large text-center",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              정답률 추이
            </span>

            <div
              className={cn(
                // 1. Layout
                "flex w-full flex-col py-3 pr-2 pl-4",
                // 4. Shadow & Border
                "border-ods__border rounded-lg border",
              )}
            >
              <div className={cn("relative h-72 w-full")}>
                <AccuracyTrendChart />
              </div>
            </div>
          </div>

          <div className={cn("flex w-full flex-col items-start gap-2")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__label-large text-center",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              풀이시간 추이
            </span>

            <div
              className={cn(
                // 1. Layout
                "flex w-full flex-col py-3 pr-2 pl-4",
                // 4. Shadow & Border
                "border-ods__border rounded-lg border",
              )}
            >
              <div className={cn("relative h-72 w-full")}>
                <SolvingTimeTrendChart />
              </div>
            </div>
          </div>
        </div>

        <div className={cn("flex w-full flex-col items-start gap-2")}>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__label-large text-center",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            약점 지도
          </span>

          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col px-6 py-5",
              // 4. Shadow & Border
              "border-ods__border rounded-lg border",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <WeaknessMap />
          </div>
        </div>
      </div>
    </div>
  );
}
