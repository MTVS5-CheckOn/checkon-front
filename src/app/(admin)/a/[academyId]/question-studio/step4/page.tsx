"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionSelectSection } from "./_sections/QuestionReviewSection";
import { TargetStudentSection } from "./_sections/TargetStudentSection";

export default function Page() {
  return (
    <div className={cn("flex w-full flex-col gap-8")}>
      <div className={cn("flex w-full flex-col gap-12")}>
        <QuestionSelectSection />
        <TargetStudentSection />
      </div>
    </div>
  );
}
