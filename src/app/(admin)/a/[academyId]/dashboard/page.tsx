"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { useQueryState } from "nuqs";
import { Dashboard__SignalSection } from "./_sections/SignalSection";
import { Dashboard__TabsSection } from "./_sections/TabsSection";
import { Dashboard__FollowUpSection } from "./_sections/FollowUpSection";
import { Dashboard__TodayTodoSection } from "./_sections/TodayTodoSection";
import { Dashboard__WeeklyCalendarSection } from "./_sections/WeeklyCalendarSection";

export default function Page() {
  const [activeTab] = useQueryState("tab", {
    defaultValue: "briefing",
  });

  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-full flex-col",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__base-100 rounded-tl-4xl border",
        // 6. Utility
        "overflow-auto",
      )}
    >
      <Dashboard__TabsSection />

      {activeTab === "briefing" && (
        <div className={cn("flex w-full flex-col gap-8 px-6 pt-5 pb-10")}>
          <Dashboard__WeeklyCalendarSection />

          <div className={cn("flex w-full gap-6")}>
            <div className={cn("flex flex-1 flex-col gap-8")}>
              <Dashboard__SignalSection />
              <Dashboard__FollowUpSection />
            </div>

            <Dashboard__TodayTodoSection />
          </div>
        </div>
      )}

      {activeTab === "stats" && <div>통계</div>}
    </div>
  );
}
