import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";

export type FollowUpDetailDialog__FollowUpStatusSectionProps = {
  variant: "warning" | "danger" | "success" | "default";
  statusTitle: string;
  statusDescription: string;
  statusCreatedAt: Date;
};

export const FollowUpDetailDialog__FollowUpStatusSection = ({
  variant,
  statusTitle,
  statusDescription,
  statusCreatedAt,
}: FollowUpDetailDialog__FollowUpStatusSectionProps) => {
  const statusCreatedAtLabel = format(
    statusCreatedAt,
    "yyyy년 MM월 dd일 HH:mm 생성",
  );

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
        현재 팔로업 상태
      </div>

      <Alert
        variant={variant}
        title={statusTitle}
        description={statusDescription}
        caption={statusCreatedAtLabel}
      />
    </section>
  );
};
