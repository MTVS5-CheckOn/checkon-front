"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionStudio__TargetStudents__Section } from "./_sections/TargetStudentsSection";
import { QuestionStudio__TopicSelect__Section } from "./_sections/TopicSelectSection";
import { Button } from "@/ui/components/Button";
import { useFormContext } from "react-hook-form";
import {
  QuestionStudioPageModel,
  QuestionStudioPageModelHelper,
} from "../layout";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { watch } = useFormContext<QuestionStudioPageModel>();
  const model = watch();
  const isStep1Valid = QuestionStudioPageModelHelper.validateStep1(model);

  const handleSubmit = () => {
    if (!isStep1Valid) {
      return;
    }
    router.push("./step2");
  };

  return (
    <div className={cn("flex w-full flex-col gap-8")}>
      <div className={cn("flex w-full flex-col gap-8")}>
        <QuestionStudio__TargetStudents__Section />
        {!!model.targetStudentId && <QuestionStudio__TopicSelect__Section />}
      </div>

      <Button
        size="large"
        color="blue"
        className={cn("w-full")}
        disabled={!isStep1Valid}
        onClick={handleSubmit}
      >
        다음
      </Button>
    </div>
  );
}
