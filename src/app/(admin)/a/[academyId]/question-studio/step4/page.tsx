"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../../_components/PageRootContainer";
import { QuestionStudio__HeaderSection } from "../_components/HeaderSection";
import { QuestionSelectSection } from "./_sections/QuestionReviewSection";
import { TargetStudentSection } from "./_sections/TargetStudentSection";

export default function Page() {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-col gap-8 p-6")}>
        <QuestionStudio__HeaderSection />

        <div className={cn("flex w-full flex-col gap-12")}>
          <QuestionSelectSection />
          <TargetStudentSection />
        </div>
      </div>
    </PageRootContainer>
  );
}
