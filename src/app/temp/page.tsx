"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { HomeworkDetailDialog } from "../(admin)/a/[academyId]/students/[studentId]/learnings/homeworks/_components/HomeworkDetailDialog";

export default function Page() {
  const handleClick = () => {
    overlay.open(({ isOpen, close }) => (
      <HomeworkDetailDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-screen w-full gap-6 p-8",
      )}
    >
      <button onClick={handleClick}>asd</button>
    </div>
  );
}
