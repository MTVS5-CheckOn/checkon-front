"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { ReportViewerDialog } from "../(admin)/a/[academyId]/report-studio/_components/ReportViewerDialog";

export default function Page() {
  const handleClick = () => {
    overlay.open(({ isOpen, close }) => (
      <ReportViewerDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 overflow-hidden px-6 py-6",
      )}
    >
      <button onClick={handleClick}>a</button>
      {/* <div className="h-screen w-full overflow-auto">
        <PdfRender />
      </div> */}
    </div>
  );
}
