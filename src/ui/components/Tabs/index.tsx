import { cn } from "@/ui/utils/tailwind/cn";

import { TabsParts } from "./parts";

export type TabsItemModel = {
  label: string;
  value: string;
};

export type TabsProps = {
  items: TabsItemModel[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export const Tabs = ({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
}: TabsProps) => {
  const tabs = (
    <TabsParts.Root
      className={cn(className)}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(v) => {
        onValueChange?.(v as string);
      }}
    >
      <TabsParts.List>
        <TabsParts.Indicator />

        {items.map(({ label, value: itemValue }) => (
          <TabsParts.Tab key={itemValue} value={itemValue}>
            <span>{label}</span>
          </TabsParts.Tab>
        ))}
      </TabsParts.List>
    </TabsParts.Root>
  );

  return tabs;
};
