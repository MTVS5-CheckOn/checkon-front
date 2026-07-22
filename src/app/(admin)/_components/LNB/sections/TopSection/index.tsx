"use client";

import { LNB__AcademySelector } from "./components/AcademySelector";

/**
 * LNB - Top Section
 */
export const LNB__TopSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="ods__title-medium text-ods__base-600 font-bold">{`Free · 김서현 선생님`}</div>

      <LNB__AcademySelector />
    </div>
  );
};
