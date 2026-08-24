"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { AchievementGridContentSection } from "./_sections/Content";
import { AchievementGridHeaderSection } from "./_sections/Header";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-5 px-6 pb-8">
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start gap-5 px-6 py-5",
          // 3. Color
          "bg-ods__white",
          // 4. Shadow & Border
          "border-ods__border rounded-xl border",
        )}
      >
        <AchievementGridHeaderSection />
        <AchievementGridContentSection />
      </div>
    </div>
  );
}
