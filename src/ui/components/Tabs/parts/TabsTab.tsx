import { Tabs } from "@base-ui/react/tabs";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type TabsTabProps = ComponentPropsWithoutRef<typeof Tabs.Tab>;

export const TabsTab = ({ className, children, ...props }: TabsTabProps) => {
  return (
    <Tabs.Tab
      className={cn(
        // 1. Layout
        "flex min-w-25 flex-col items-center justify-center px-3 py-2",
        // 2. Typography
        "ods__typo__label-large font-normal data-active:font-semibold",
        // 3. Color
        "text-ods__base-400 data-active:bg-ods__base-50 data-active:text-ods__base-500",
        // 4. Shadow & Border
        "rounded-tl-lg rounded-tr-lg",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </Tabs.Tab>
  );
};
