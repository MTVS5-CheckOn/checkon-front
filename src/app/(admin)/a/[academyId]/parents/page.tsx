"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../_components/PageRootContainer";
import { Parents__HeaderSection } from "./_sections/HeaderSection";
import { Parents__TableSection } from "./_sections/TableSection";

export default function Page() {
  return (
    <PageRootContainer>
      <div
        className={cn(
          // 1. Layout
          "flex h-full w-full flex-col gap-6 px-6 pt-8 pb-6",
        )}
      >
        <Parents__HeaderSection />
        <Parents__TableSection />
      </div>
    </PageRootContainer>
  );
}
