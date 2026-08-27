import { SignalState } from "@/domain/signal/state";
import { DateUtilForKo } from "@/ui/utils/date/date-util";
import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { SignalItem } from "@/ui/components/SignalListItem/SignalItem";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { overlay } from "overlay-kit";
import { useFormContext } from "react-hook-form";
import { SignalDetailDialog } from "./components/SignalDetailDialog";
import { useSignalSection } from "./hooks/useSignalSection";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/ui/components/Separator";
import { format } from "date-fns";

export const Dashboard__SignalSection = () => {
  /**
   * 폼 컨텍스트
   */
  const { watch } = useFormContext();

  /**
   * 신호 목록 데이터
   */
  const { data } = useSignalSection(
    format(watch("selectedDate"), "yyyy-MM-dd"),
  );

  const handleItemClick = (signalId: string) => {
    const item = data.find((item) => item.id === signalId);
    if (!item) {
      return;
    }

    overlay.open(({ isOpen, close }) => (
      <SignalDetailDialog isOpen={isOpen} onClose={close} model={item} />
    ));
  };

  const handleSignalItemMoreClick = () => {
    alert("확인이 필요한 신호 더보기");
  };

  return (
    <div className={cn("flex w-full flex-col items-start justify-start gap-3")}>
      {/* 헤더 */}
      <div className={cn("flex w-full items-center justify-between")}>
        <div className={cn("flex items-center justify-start gap-2")}>
          <div className={cn("flex flex-col items-start justify-start")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__title-medium font-medium",
                // 3. Color
                "text-ods__base-600",
              )}
            >
              확인이 필요한 신호
            </div>
          </div>

          {/* 신호 개수 */}
          <StatusLabel
            status={SignalState.Positive}
          >{`${data.length}건`}</StatusLabel>
        </div>
      </div>

      {/* 신호 목록 */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start",
          // 4. Shadow & Border
          "border-ods__border rounded-xl border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {data.map((item) => (
          <Fragment key={item.student.id + item.createdAt.toISOString()}>
            <SignalItem
              model={{
                title: item.student.name,
                status: item.label.status,
                statusLabel: item.label.text,
                caption: DateUtilForKo.formatDistanceToNow({
                  date: item.createdAt,
                  options: { addSuffix: true },
                }),
                content: item.briefingText,
              }}
              onClick={() => handleItemClick(item.id)}
            />
            <Separator />
          </Fragment>
        ))}

        {/* 더보기 버튼 */}
        <CardMoreBottomButton onClick={handleSignalItemMoreClick} />
      </div>
    </div>
  );
};
