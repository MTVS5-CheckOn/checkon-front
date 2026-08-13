"use client";

import MenuParts from "@/ui/components/Menu/Parts";
import { Menu } from "@/ui/components/Menu";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <Menu trigger="Song">
        <MenuParts.Item isButton>Add to Library</MenuParts.Item>
        <MenuParts.Item>Add to Playlist</MenuParts.Item>
        <MenuParts.Item>Play Next</MenuParts.Item>
        <MenuParts.Item>Play Last</MenuParts.Item>
        <MenuParts.Item>Favorite</MenuParts.Item>
        <MenuParts.Item>Share</MenuParts.Item>
      </Menu>
    </div>
  );
}
