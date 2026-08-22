import { Tabs } from "@base-ui/react/tabs";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type TabsIndicatorProps = ComponentPropsWithoutRef<typeof Tabs.Indicator>;

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
  return (
    <Tabs.Indicator
      className={cn(
        // 1. Layout
        "absolute bottom-0 left-[calc(var(--active-tab-left)+10px)] z-1",
        "flex h-0.5 w-[calc(var(--active-tab-width)-20px)] flex-col items-stretch justify-end",
        // 3. Color
        "bg-ods__blue-400 opacity-60",
        // 4. Shadow & Border
        "rounded-tl-lg rounded-tr-lg",
        // 5. Interaction
        "ods__animate__default",
        className,
      )}
      {...props}
    />
  );
};
