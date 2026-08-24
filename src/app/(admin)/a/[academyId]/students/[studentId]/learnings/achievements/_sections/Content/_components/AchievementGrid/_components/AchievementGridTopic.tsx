import { cn } from "@/ui/utils/tailwind/cn";

export type AchievementGridTopicProps = {
  children: React.ReactNode;
};

/**
 * Achievement Grid Topic
 */
export const AchievementGridTopic = ({
  children,
}: AchievementGridTopicProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-12 w-full items-center justify-center p-2.5",
        // 3. Color
        "bg-ods__base-50",
        // 4. Shadow & Border
        "rounded-lg",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {children}
      </div>
    </div>
  );
};
