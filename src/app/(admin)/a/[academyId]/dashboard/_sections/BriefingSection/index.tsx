"use client";

import { Suspense } from "react";

import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { cn } from "@/ui/utils/tailwind/cn";

import { Dashboard__FollowUpSection } from "./_sections/FollowUpSection";
import { Dashboard__SignalSection } from "./_sections/SignalSection";
import { Dashboard__TodayTodoSection } from "./_sections/TodayTodoSection";
import { Dashboard__WeeklyCalendarSection } from "./_sections/WeeklyCalendarSection";

export const Dashboard__BriefingSection = () => {
  return (
    <div
      className={cn(
        "max-w-ods__layout-container-max-width flex w-full flex-col items-center gap-12 px-6 pt-6 pb-10",
      )}
    >
      <Suspense fallback={<div />}>
        <Dashboard__WeeklyCalendarSection />
      </Suspense>

      <Suspense
        fallback={
          <div
            className={cn(
              "flex min-h-200 w-full flex-1 items-center justify-center",
            )}
          >
            <LoadingFallback />
          </div>
        }
      >
        <div
          className={cn(
            "grid w-full grid-cols-[repeat(8,1fr)_360px] gap-x-6 gap-y-12 max-xl:grid-cols-[repeat(8,1fr)]",
          )}
        >
          <div className={cn("col-span-8 max-lg:col-span-full")}>
            <Dashboard__SignalSection />
          </div>

          <div className={cn("col-span-8 max-lg:col-span-full")}>
            <Dashboard__FollowUpSection />
          </div>

          <div
            className={cn(
              "max-lg:col-start-none max-lg:row-start-none col-span-4 col-start-9 row-start-1 max-lg:col-span-full",
            )}
          >
            <Dashboard__TodayTodoSection />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
