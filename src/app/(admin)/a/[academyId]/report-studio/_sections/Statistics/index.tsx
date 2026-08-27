import { SignalState } from "@/domain/signal/state";
import { StatisticsCard } from "@/ui/domain-components/statistics/StatisticsCard";
import { cn } from "@/ui/utils/tailwind/cn";

import { StatisticsDateSelector } from "./_components/StatisticsDateSelector";

const STATISTICS_CARDS = [
  {
    variant: SignalState.Default,
    title: "이번 달 리포트 대상",
    count: 8,
  },
  {
    variant: SignalState.Warning,
    title: "생성 완료",
    count: 6,
  },
  {
    variant: SignalState.Danger,
    title: "데이터 부족 · 생략",
    count: 2,
  },
  {
    variant: SignalState.Positive,
    title: "발송 완료",
    count: 2,
  },
] as const;

export const StatisticsSection = () => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-6",
      )}
    >
      <StatisticsDateSelector />

      <div
        className={cn(
          // 1. Layout
          "flex w-full items-start justify-start",
          // 4. Shadow & Border
          "border-ods__border rounded-xl border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {STATISTICS_CARDS.map((card, index) => (
          <StatisticsCard
            key={card.title}
            variant={card.variant}
            title={card.title}
            count={card.count}
            className={cn(
              index === STATISTICS_CARDS.length - 1 && "border-r-0",
            )}
          />
        ))}
      </div>
    </section>
  );
};
