"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { Button } from "@base-ui/react";
import { overlay } from "overlay-kit";

export default function Page() {
  const handleClick = () => {
    // overlay.open(({ isOpen, close }) => (
    //   <WeeklyCalendar__SignalDetailDialog isOpen={isOpen} onClose={close} />
    // ));
  };

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
}
