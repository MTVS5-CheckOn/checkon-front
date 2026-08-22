import { cn } from "@/ui/utils/tailwind/cn";

import { MonthlyHomeworkHeader } from "./_sections/Header";
import { MonthlyHomeworkSection } from "./_sections/Homeworks";

export const Dashboard__HomeworkSection = () => {
  return (
    <div
      className={cn(
        "max-w-ods__layout-container-max-width flex w-full flex-col items-center gap-6 px-6 pt-6 pb-10",
      )}
    >
      <MonthlyHomeworkHeader />
      <MonthlyHomeworkSection />
    </div>
  );
};
