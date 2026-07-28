import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { cn } from "@/ui/utils/tailwind/cn";

export type SignalDetailDialog__SignalReasonSectionProps = {
  signalReasonContent: string;
};

export const SignalDetailDialog__SignalReasonSection = ({
  signalReasonContent,
}: SignalDetailDialog__SignalReasonSectionProps) => {
  const handleMoreClick = () => {
    // TODO: 해당 학생 상세 페이지로 이동.
    alert("TODO: 해당 학생 상세 페이지로 이동.");
  };

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
        근거
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
            "flex w-full items-start justify-start p-3",
            // 3. Color
            "bg-ods__base-50",
            // 4. Shadow & Border
            "border-ods__border rounded-lg border",
          )}
        >
          <p
            className={cn(
              // 2. Typography
              "ods__typo__body-medium whitespace-pre-line",
              // 3. Color
              "text-ods__base-600",
            )}
          >
            {signalReasonContent}
          </p>
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full items-center justify-center",
            // 4. Shadow & Border
            "border-ods__border rounded-lg border",
          )}
          onClick={handleMoreClick}
        >
          <CardMoreBottomButton />
        </div>
      </div>
    </section>
  );
};
