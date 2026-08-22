import { cn } from "@/ui/utils/tailwind/cn";
import { Progress } from "@base-ui/react/progress";

export type Dashboard__TodayTodoSection__TodoCompletionRateSectionProps = {
  completionRate: number;
};

export const Dashboard__TodayTodoSection__TodoCompletionRateSection = ({
  completionRate,
}: Dashboard__TodayTodoSection__TodoCompletionRateSectionProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col gap-2 p-5",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div className={cn("flex justify-between")}>
        <div
          className={cn(
            // 2. Typography
            "ods__typo__label-large font-medium",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          오늘 완료율
        </div>

        <div
          className={cn(
            // 2. Typography
            "ods__typo__label-medium font-bold",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {`${completionRate}%`}
        </div>
      </div>

      <div className={cn("flex flex-col items-start justify-start")}>
        <ProgressBar value={completionRate} />
      </div>
    </div>
  );
};

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <Progress.Root className={cn("h-1.5 w-full")} value={value}>
      <Progress.Track
        className={cn(
          // 1. Layout
          "h-full",
          // 3. Color
          "bg-ods__base-100",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <Progress.Indicator
          className={cn(
            // 3. Color
            "from-ods__blue-300 to-ods__blue-400 bg-ods__blue-300 bg-linear-to-r",
            // 4. Shadow & Border
            "rounded-full",
            // 5. Interaction
            "ods__animate__default",
          )}
        />
      </Progress.Track>
    </Progress.Root>
  );
};
