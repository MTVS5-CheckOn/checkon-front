/* eslint-disable import/no-anonymous-default-export */

import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/ui/utils/tailwind/cn";

const MenuRoot = (p: ComponentPropsWithoutRef<typeof Menu.Root>) => {
  return <Menu.Root {...p} />;
};

const MenuTrigger = ({
  className,
  children,
  ...p
}: ComponentPropsWithRef<typeof Menu.Trigger>) => {
  return (
    <Menu.Trigger
      className={cn(
        // 1. Layout
        "flex items-center justify-center",
        className,
      )}
      {...p}
    >
      {children}
    </Menu.Trigger>
  );
};

const MenuPortal = ({
  className,
  ...p
}: ComponentPropsWithRef<typeof Menu.Portal>) => {
  return <Menu.Portal className={cn(className)} {...p} />;
};

const MenuPositioner = ({
  sideOffset = 8,
  align = "start",
  className,
  ...p
}: ComponentPropsWithRef<typeof Menu.Positioner>) => {
  return (
    <Menu.Positioner
      sideOffset={sideOffset}
      align={align}
      className={cn(className)}
      {...p}
    />
  );
};

const MenuPopup = ({
  className,
  ...p
}: ComponentPropsWithRef<typeof Menu.Popup>) => {
  return (
    <Menu.Popup
      className={cn(
        // 1. Layout
        "relative origin-(--transform-origin) p-1",
        // 3. Color
        "bg-ods__white text-ods__base-600",
        // 4. Shadow & Border
        "border-ods__border rounded-[8px] border shadow-md",
        // 5. Interaction
        "ods__animate__popup-open",
        className,
      )}
      {...p}
    />
  );
};

const MenuItem = ({
  className,
  isButton = false,
  ...p
}: { isButton?: boolean } & ComponentPropsWithRef<typeof Menu.Item>) => {
  return (
    <Menu.Item
      nativeButton={isButton}
      render={isButton ? <button /> : undefined}
      className={cn(
        // 1. Layout
        "flex w-full items-center px-3 py-2",
        // 2. Typography
        "ods__typo__label-large",
        // 3. Color
        "text-ods__base-600",
        // 4. Shadow & Border
        "rounded-sm",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover",
        className,
      )}
      {...p}
    />
  );
};

export default {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Item: MenuItem,
};
