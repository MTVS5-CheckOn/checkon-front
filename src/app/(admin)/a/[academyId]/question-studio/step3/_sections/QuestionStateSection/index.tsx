import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionStudioPageModel } from "../../../layout";
import { StateCard } from "./_components/StateCard";
import { useFormContext } from "react-hook-form";
import { groupBy } from "es-toolkit/array";
import { SignalState } from "@/domain/signal/state";

export const QuestionStateSection = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const model = watch();

  const groupedQuestionModels = groupBy(
    model.generatedQuestionModels ?? [],
    (it) => it.status,
  );
  const statusWithCount = Object.entries(groupedQuestionModels).map(
    ([status, questionModels]) => {
      return {
        status: status as
          "Passed" | "ReviewNeeded" | "VerificationFailed" | "Rejected",
        count: questionModels.length,
      };
    },
  );
  const passedCount =
    statusWithCount.find((it) => it.status === "Passed")?.count ?? 0;
  const reviewNeededCount =
    statusWithCount.find((it) => it.status === "ReviewNeeded")?.count ?? 0;
  const verificationFailedCount =
    statusWithCount.find((it) => it.status === "VerificationFailed")?.count ??
    0;
  const rejectedCount =
    statusWithCount.find((it) => it.status === "Rejected")?.count ?? 0;

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-3",
      )}
    >
      {/* Header Section */}
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        문항 상태
      </span>

      {/* State Cards Section */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full items-start justify-start",
          // 4. Shadow & Border
          "border-ods__border rounded-[12px] border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <StateCard
          variant={SignalState.Positive}
          title="검증 통과"
          count={passedCount}
        />
        <StateCard
          variant={SignalState.Warning}
          title="검토 필요"
          count={reviewNeededCount}
        />
        <StateCard
          variant={SignalState.Danger}
          title="검증 불가"
          count={verificationFailedCount}
        />
        <StateCard
          variant={SignalState.Default}
          title="폐기·제외"
          count={rejectedCount}
          className="border-r-0"
        />
      </div>
    </div>
  );
};
