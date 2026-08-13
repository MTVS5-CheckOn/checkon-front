import { cn } from "@/ui/utils/tailwind/cn";

export const Separator = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "bg-ods__border h-px min-h-px w-full",
      )}
    />
  );
};
