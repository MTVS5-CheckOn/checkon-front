import { Alert } from "@/ui/components/Alert";
import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { cn } from "@/ui/utils/tailwind/cn";

export type FollowUpDetailDialog__FollowUpHistorySectionProps = {
  followUpHistoryItems: Array<{
    variant: "warning" | "default" | "danger" | "success";
    title: string;
    description: string;
    caption: string;
  }>;
};

export const FollowUpDetailDialog__FollowUpHistorySection = ({
  followUpHistoryItems,
}: FollowUpDetailDialog__FollowUpHistorySectionProps) => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2.5",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-small font-semibold",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        팔로업 히스토리
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2.5",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col gap-2.5",
          )}
        >
          {followUpHistoryItems.map((item) => (
            <Alert
              key={item.title}
              variant={item.variant}
              title={item.title}
              description={item.description}
              caption={item.caption}
            />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full items-center justify-center",
            // 4. Shadow & Border
            "border-ods__border rounded-lg border",
          )}
          onClick={() => {
            // TODO: 해당 학생 상세 페이지로 이동.
            alert("해당 학생 상세 페이지로 이동.");
          }}
        >
          <CardMoreBottomButton />
        </div>
      </div>
    </section>
  );
};
