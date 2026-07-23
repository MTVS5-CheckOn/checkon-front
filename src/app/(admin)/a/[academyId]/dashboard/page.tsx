"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { useQueryState } from "nuqs";
import { Dashboard__SignalSection } from "./_sections/SignalSection";
import { Dashboard__TabsSection } from "./_sections/TabsSection";

export default function Page() {
  const [activeTab] = useQueryState("tab", {
    defaultValue: "briefing",
  });

  return (
    <div
      className={cn(
        "flex h-full flex-col",
        "bg-ods__white",
        "border-ods__base-100 rounded-tl-4xl border",
      )}
    >
      <Dashboard__TabsSection />

      <div className="flex flex-col gap-6 px-6">
        <div>calendar</div>

        {activeTab === "briefing" && <Dashboard__SignalSection />}
      </div>
    </div>
  );
}
