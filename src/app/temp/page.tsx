"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { MonthlyHomeworkHeader } from "../(admin)/a/[academyId]/dashboard/_sections/HomeworkSection/_sections/Header";
import { MonthlyHomeworkSection } from "../(admin)/a/[academyId]/dashboard/_sections/HomeworkSection/_sections/Homeworks";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-6 px-6",
      )}
    >
      <MonthlyHomeworkHeader />
      <MonthlyHomeworkSection />
    </div>
  );
}
