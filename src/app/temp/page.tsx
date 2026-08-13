"use client";

import { Checkbox } from "@/ui/components/Checkbox";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-screen w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <Checkbox size="small" />
      <Checkbox size="medium" />
      <Checkbox size="large" />
      <Checkbox size="small" disabled />
      <Checkbox size="medium" disabled />
      <Checkbox size="large" disabled />
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox size="large" defaultChecked />
      <Checkbox size="small" defaultChecked disabled />
      <Checkbox size="medium" defaultChecked disabled />
      <Checkbox size="large" defaultChecked disabled />
    </div>
  );
}
