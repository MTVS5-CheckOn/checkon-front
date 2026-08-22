import { Tabs } from "@base-ui/react/tabs";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type TabsRootProps = ComponentPropsWithoutRef<typeof Tabs.Root>;

export const TabsRoot = ({ className, ...props }: TabsRootProps) => {
  return <Tabs.Root className={cn(className)} {...props} />;
};
