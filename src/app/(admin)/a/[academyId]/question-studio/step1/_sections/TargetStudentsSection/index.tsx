import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionStudio__TargetStudents__Table } from "./_components/Table";

export const QuestionStudio__TargetStudents__Section = () => (
  <div className={cn("flex w-full flex-col")}>
    <div className={cn("flex w-full flex-col gap-2")}>
      <Header />

      <QuestionStudio__TargetStudents__Table />
    </div>
  </div>
);

const Header = () => {
  return (
    <div className={cn("flex flex-col items-start gap-0")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        대상 학생 선택
      </span>
      
      <span
        className={cn(
          // 2. Typography
          "ods__typo__body-medium",
          // 3. Color
          "text-ods__base-400",
        )}
      >
        약점 보완할 학생을 선택해주세요.
      </span>
    </div>
  );
};
