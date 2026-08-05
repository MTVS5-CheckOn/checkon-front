"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { GNB } from "./_components/GNB";
import { LNB } from "./_components/LNB";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        // 1. Layout
        "min-w-breakpoint-tablet flex h-screen w-full flex-col",
        // 3. Color
        "bg-ods__baselayout-bgcolor",
      )}
    >
      <div className={cn("flex h-full w-full flex-1")}>
        <div className={cn("flex max-md:hidden")}>
          <LNB />
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col",
            // 6. Utility
            "overflow-auto",
          )}
        >
          <GNB />

          {children}
        </div>
      </div>
    </div>
  );
}
