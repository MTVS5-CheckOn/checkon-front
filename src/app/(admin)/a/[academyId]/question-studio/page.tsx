import { PageRootContainer } from "../_components/PageRootContainer";
import { QuestionStudio__Header } from "./_sections/HeaderSection";
import { QuestionStudio__TargetStudents__Section } from "./_sections/TargetStudentsSection";
import { QuestionStudio__TopicSelect__Section } from "./_sections/TopicSelectSection";

export default function Page() {
  return (
    <PageRootContainer>
      <QuestionStudio__Header />
      <QuestionStudio__TargetStudents__Section />
      <QuestionStudio__TopicSelect__Section />
    </PageRootContainer>
  );
}
