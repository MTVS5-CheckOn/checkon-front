import { cn } from "@/ui/utils/tailwind/cn";

import { GNB__RightSection } from "./sections/RightSection";

/**
 * Global Navigation Bar
 */
export const GNB = () => {
  return (
    <div className={cn("flex h-17 w-full items-center justify-between")}>
      <div>Left</div>

      <GNB__RightSection />
    </div>
  );
};
