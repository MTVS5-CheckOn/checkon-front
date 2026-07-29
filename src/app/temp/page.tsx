"use client";

import { Spinner } from "@/ui/components/Spinner";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <Spinner className="size-10" />
    </div>
  );
}
