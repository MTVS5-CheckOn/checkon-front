"use client";

import { SignalState } from "@/domain/signal/state";
import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";

import { SignalHistoryTable } from "./_components/SignalHistoryTable";
import { SignalTrendChart } from "./_components/SignalTrendChart";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 px-6",
      )}
    >
      <div className={cn("flex w-full flex-col gap-6")}>
        <Alert
          variant={SignalState.Warning}
          title="숨은 신호"
          description={
            "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다."
          }
        />
      </div>

      <div className={cn("flex w-full flex-col gap-6 pb-8")}>
        <div className={cn("flex w-full flex-col items-start gap-2")}>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__label-large text-center",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            이상 신호 발생 추이
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
              <SignalTrendChart />
            </div>
          </div>
        </div>

        <SignalHistoryTable />
      </div>
    </div>
  );
}
