"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { TargetStudentSection } from "../(admin)/a/[academyId]/question-studio/step4/_sections/TargetStudentSection";

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-screen w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <TargetStudentSection />
    </div>
  );
}
