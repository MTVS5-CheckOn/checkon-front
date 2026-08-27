import { cn } from "@/ui/utils/tailwind/cn";
import SelectorParts from "./Parts";

export type SelectorProps = {
  items: {
    label: string;
    value: string;
  }[];
  size?: "small" | "medium" | "large";
  disabled?: boolean;

  value?: string;
  onValueChange?: (value: string) => void;
};

export const Selector = ({
  items,
  size = "medium",
  disabled = false,
  value,
  onValueChange,
}: SelectorProps) => {
  return (
    <SelectorParts.Root
      items={items}
      value={value}
      onValueChange={(v) => {
        onValueChange?.(v as string);
      }}
    >
      <SelectorParts.Trigger size={size} disabled={disabled} />

      <SelectorParts.Portal>
        <SelectorParts.Positioner className={cn("z-9999 ml-6")} size={size}>
          <SelectorParts.Popup>
            <SelectorParts.List>
              {items.map(({ label, value: itemValue }, index) => {
                const isSelected = itemValue === value;

                return (
                  <SelectorParts.Item
                    key={label + itemValue + index}
                    value={itemValue}
                    label={label}
                    isSelected={isSelected}
                  />
                );
              })}
            </SelectorParts.List>
          </SelectorParts.Popup>
        </SelectorParts.Positioner>
      </SelectorParts.Portal>
    </SelectorParts.Root>
  );
};
