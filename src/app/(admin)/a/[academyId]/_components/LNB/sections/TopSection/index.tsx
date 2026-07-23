import { cn } from "@/ui/utils/tailwind/cn";

import { LNB__AcademySelector } from "./components/AcademySelector";

/**
 * LNB - Top Section
 */
export const LNB__TopSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div
        className={cn(
          "ods__typo__title-medium font-bold",
          "text-ods__base-600",
        )}
      >{`Free · 김서현 선생님`}</div>

      <LNB__AcademySelector />
    </div>
  );
};
