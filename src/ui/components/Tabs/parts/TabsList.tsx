import { Tabs } from "@base-ui/react/tabs";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type TabsListProps = ComponentPropsWithoutRef<typeof Tabs.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
  return (
    <Tabs.List
      className={cn(
        // 1. Layout
        "relative flex items-start justify-start gap-1",
        className,
      )}
      {...props}
    />
  );
};
