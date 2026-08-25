"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { StatisticsSection } from "./_sections/Statistics";
import { TableSection } from "./_sections/Table";
import { PageRootContainer } from "../(admin)/a/[academyId]/_components/PageRootContainer";
import { Breadcrumb } from "@/ui/components/Breadcrumb";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 overflow-hidden px-6",
      )}
    >
      <PageRootContainer>
        <div
          className={cn(
            "sticky top-0 z-10 flex w-full flex-col items-start gap-5 pt-6 pb-5",
            // 3. Color
            "bg-ods__white",
            // 4. Shadow & Border
            "border-ods__border border-b",
          )}
        >
          <Breadcrumb
            items={[{ label: "리포트 스튜디오", link: "./report-studio" }]}
          />
        </div>

        <div className={cn("flex w-full flex-col gap-12 px-6 py-7")}>
          <StatisticsSection />
          <TableSection />
        </div>
      </PageRootContainer>
    </div>
  );
}
