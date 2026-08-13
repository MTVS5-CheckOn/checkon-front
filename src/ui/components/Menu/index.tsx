import { ComponentPropsWithoutRef, ReactNode } from "react";

import MenuParts from "./Parts";

export type MenuProps = {
  trigger: ReactNode;
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof MenuParts.Root>;

export const Menu = ({ trigger, children, ...rootProps }: MenuProps) => {
  return (
    <MenuParts.Root {...rootProps}>
      <MenuParts.Trigger>{trigger}</MenuParts.Trigger>

      <MenuParts.Portal>
        <MenuParts.Positioner>
          <MenuParts.Popup>{children}</MenuParts.Popup>
        </MenuParts.Positioner>
      </MenuParts.Portal>
    </MenuParts.Root>
  );
};
