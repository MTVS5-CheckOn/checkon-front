"use client";

import { AchievementGridHeaderSection } from "@/app/(admin)/a/[academyId]/students/[studentId]/learnings/achievements/_sections/Header";

import { cn } from "@/ui/utils/tailwind/cn";
import { AchievementGridContentSection } from "./_sections/Content";

export default function Page() {
  // const handleClick = () => {
  //   overlay.open(({ isOpen, close }) => (
  //     <HomeworkDetailDialog isOpen={isOpen} onClose={close} />
  //   ));
  // };

  return (
    <div className="flex w-full flex-col gap-5 px-6">
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
