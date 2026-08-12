"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { PageRootContainer } from "../../_components/PageRootContainer";
import { QuestionStudio__HeaderSection } from "../_components/HeaderSection";
import { QuestionStudio__TargetStudents__Section } from "./_sections/TargetStudentsSection";
import { QuestionStudio__TopicSelect__Section } from "./_sections/TopicSelectSection";
import { Button } from "@/ui/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-col gap-8 p-6")}>
        <QuestionStudio__HeaderSection />

        <div className={cn("flex w-full flex-col gap-8")}>
          <QuestionStudio__TargetStudents__Section />
          <QuestionStudio__TopicSelect__Section />
        </div>

        <Link href="./step2">
          <Button size="large" color="blue" className={cn("w-full")}>
            다음
          </Button>
        </Link>
      </div>
    </PageRootContainer>
  );
}
