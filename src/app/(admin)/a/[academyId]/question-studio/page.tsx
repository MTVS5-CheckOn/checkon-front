import { PageRootContainer } from "../_components/PageRootContainer";
import { QuestionStudio__Header } from "./_sections/HeaderSection";
import { QuestionStudio__TargetStudents__Section } from "./_sections/TargetStudentsSection";
import { QuestionStudio__TopicSelect__Section } from "./_sections/TopicSelectSection";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-col gap-8 p-6")}>
        <QuestionStudio__Header />

        <div className={cn("flex w-full flex-col gap-8")}>
          <QuestionStudio__TargetStudents__Section />
          <QuestionStudio__TopicSelect__Section />
        </div>
      </div>
    </PageRootContainer>
  );
}
