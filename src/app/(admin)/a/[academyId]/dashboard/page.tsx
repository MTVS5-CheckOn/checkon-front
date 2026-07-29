"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryState } from "nuqs";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Dashboard__FollowUpSection } from "./_sections/FollowUpSection";
import { Dashboard__SignalSection } from "./_sections/SignalSection";
import { Dashboard__TabsSection } from "./_sections/TabsSection";
import { Dashboard__TodayTodoSection } from "./_sections/TodayTodoSection";
import { Dashboard__WeeklyCalendarSection } from "./_sections/WeeklyCalendarSection";
import { Suspense } from "react";
import { LoadingFallback } from "@/ui/components/LoadingFallback";

export const DashboardPageModel = z.object({
  /**
   * 선택된 날짜
   */
  selectedDate: z.date(),
});

export default function Page() {
  const [activeTab] = useQueryState("tab", {
    defaultValue: "briefing",
  });

  const formMethods = useForm({
    resolver: zodResolver(DashboardPageModel),
    defaultValues: {
      selectedDate: new Date(),
    },
  });

  return (
    <FormProvider {...formMethods}>
      <div
        className={cn(
          // 1. Layout
          "flex h-full w-full flex-col",
          // 3. Color
          "bg-ods__white",
          // 4. Shadow & Border
          "border-ods__border rounded-tl-4xl border",
          // 6. Utility
          "overflow-auto",
        )}
      >
        <Dashboard__TabsSection />

        {activeTab === "briefing" && (
          <div
            className={cn("flex h-full w-full flex-col gap-8 px-6 pt-5 pb-10")}
          >
            <Suspense fallback={<div />}>
              <Dashboard__WeeklyCalendarSection />
            </Suspense>

            <Suspense
              fallback={
                <div
                  className={cn(
                    "flex w-full flex-1 items-center justify-center",
                  )}
                >
                  <LoadingFallback />
                </div>
              }
            >
              <div className={cn("flex w-full gap-6")}>
                <div className={cn("flex w-full flex-col gap-8")}>
                  <Dashboard__SignalSection />

                  <Dashboard__FollowUpSection />
                </div>

                <Dashboard__TodayTodoSection />
              </div>
            </Suspense>
          </div>
        )}

        {/* TODO: 통계 섹션 추가 */}
        {activeTab === "stats" && <div>통계</div>}
      </div>
    </FormProvider>
  );
}
