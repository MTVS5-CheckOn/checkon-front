import { cn } from "@/ui/utils/tailwind/cn";

export type AchievementGridHeaderProps = {
  children: React.ReactNode;
};

/**
 * Achievement Grid Header
 */
export const AchievementGridHeader = ({
  children,
}: AchievementGridHeaderProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-12 w-full items-center justify-center gap-2.5",
        // 3. Color
        "bg-ods__base-50",
        // 4. Shadow & Border
        "rounded-lg",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-medium",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {children}
      </div>
    </div>
  );
};
