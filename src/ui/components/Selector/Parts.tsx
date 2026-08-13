/* eslint-disable import/no-anonymous-default-export */

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { ComponentPropsWithRef } from "react";

import { cn } from "@/ui/utils/tailwind/cn";
import { Select } from "@base-ui/react/select";

const SelectorRoot = (
  p: React.ComponentPropsWithoutRef<typeof Select.Root>,
) => {
  return <Select.Root {...p} />;
};

const SelectorTrigger = ({
  size,
  disabled = false,
}: {
  size?: "small" | "medium" | "large";
} & ComponentPropsWithRef<typeof Select.Trigger>) => {
  return (
    <Select.Trigger
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-between px-3 py-2",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__base-200 rounded-[8px] border",

        // Size
        size === "small" && "h-8",
        size === "large" && "h-12",
        !size && "h-10",
        // Disabled
        disabled && "pointer-events-none opacity-30",
      )}
    >
      <Select.Value
        className={cn("ods__typo__label-large", "text-ods__base-600")}
      />

      <Select.Icon className={cn("flex items-center", "text-ods__base-400")}>
        <ChevronDownIcon className={cn("size-4")} />
      </Select.Icon>
    </Select.Trigger>
  );
};

const SelectorPortal = ({
  className,
  ...p
}: ComponentPropsWithRef<typeof Select.Portal>) => {
  return <Select.Portal className={cn(className)} {...p} />;
};

const SelectorPositioner = ({
  size,
  className,
  ...p
}: {
  size?: "small" | "medium" | "large";
} & ComponentPropsWithRef<typeof Select.Positioner>) => {
  return (
    <Select.Positioner
      className={cn(
        // Size
        size === "small" && "mt-4",
        size === "large" && "mt-1.5",
        !size && "",
        className,
      )}
      {...p}
    />
  );
};

const SelectorPopup = ({ className, ...p }: ComponentPropsWithRef<"div">) => {
  return (
    <Select.Popup
      className={cn(
        // 1. Layout
        "h-fit p-1",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-[8px] border shadow-md",
        // 5. Interaction
        "ods__animate__popup-open",
        className,
      )}
      style={{
        // 셀렉터 width 동기화
        width: "var(--anchor-width)",
      }}
      {...p}
    />
  );
};

const SelectorList = ({ className, ...p }: ComponentPropsWithRef<"div">) => {
  return (
    <Select.List
      className={cn(
        // 1. Layout
        "flex flex-1 flex-col gap-1",
        className,
      )}
      {...p}
    />
  );
};

const SelectorItem = ({
  value,
  label,
  isSelected,
}: {
  value: string;
  label: string;
  isSelected: boolean;
}) => {
  return (
    <button>
      <Select.Item
        value={value}
        className={cn(
          // 1. Layout
          "flex items-center gap-2 p-2",
          // 2. Typography
          "ods__typo__label-large",
          // 3. Color
          "text-ods__base-400",
          // 4. Shadow & Border
          "rounded-sm",
          // 5. Interaction
          "ods__animate__default hover:bg-ods__hover",
          //
          isSelected && "bg-ods__base-100 text-ods__base-600",
        )}
      >
        <Select.Icon className={cn("size-4")}>
          {isSelected && <CheckIcon className={cn("size-4")} />}
        </Select.Icon>

        <Select.ItemText>{label}</Select.ItemText>
      </Select.Item>
    </button>
  );
};

export default {
  Root: SelectorRoot,
  Trigger: SelectorTrigger,
  Portal: SelectorPortal,
  Positioner: SelectorPositioner,
  Popup: SelectorPopup,
  List: SelectorList,
  Item: SelectorItem,
};
