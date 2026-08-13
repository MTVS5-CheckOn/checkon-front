"use client";

import Link from "next/link";

import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../../_components/PageRootContainer";
import { QuestionStudio__HeaderSection } from "../_components/HeaderSection";
import { QuestionStateSection } from "./_sections/QuestionStateSection";
import { QuestionReviewSection } from "./_sections/QuestionReviewSection";

export default function Page() {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-col gap-8 p-6")}>
        <QuestionStudio__HeaderSection />

        <div className={cn("flex w-full flex-col gap-12")}>
          <QuestionStateSection />
          <QuestionReviewSection />
        </div>

        <Link href="./step4">
          <Button size="large" color="blue" className={cn("w-full")}>
            다음
          </Button>
        </Link>
      </div>
    </PageRootContainer>
  );
}
