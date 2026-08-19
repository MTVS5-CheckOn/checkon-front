"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../_components/PageRootContainer";
import { Students__HeaderSection } from "./_sections/HeaderSection";
import { Students__TableSection } from "./_sections/TableSection";

export default function Page() {
  return (
    <PageRootContainer>
      <div
        className={cn(
          // 1. Layout
          "flex h-full w-full flex-col gap-6 px-6 pt-8 pb-6",
        )}
      >
        <Students__HeaderSection />
        <Students__TableSection />
      </div>
    </PageRootContainer>
  );
}
