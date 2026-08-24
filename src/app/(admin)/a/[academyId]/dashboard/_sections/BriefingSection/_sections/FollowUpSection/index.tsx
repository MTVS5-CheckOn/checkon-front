import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { Separator } from "@/ui/components/Separator";
import { SignalItem } from "@/ui/components/SignalListItem/SignalItem";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { overlay } from "overlay-kit";
import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { FollowUpDetailDialog } from "./components/FollowUpDetailDialog";
import { useFollowUpSection } from "./hooks/useFollowUpSection";

export const Dashboard__FollowUpSection = () => {
  /**
   * 폼 컨텍스트
   */
  const { watch } = useFormContext();

  /**
   * 팔로업 목록 데이터
   */
  const { data } = useFollowUpSection(watch("selectedDate"));

  const handleItemClick = () => {
    overlay.open(({ isOpen, close }) => (
      <FollowUpDetailDialog
        isOpen={isOpen}
        onClose={close}
        followUpId={"TODO:"}
      />
    ));
  };

  const handleFollowUpItemMoreClick = () => {
    alert("팔로업 진행 중 더보기");
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
              팔로업 진행 중
            </div>
          </div>

          {/* 팔로업 개수 */}
          <StatusLabel status={SignalState.Positive}>{`${data.followUpCount}건`}</StatusLabel>
        </div>
      </div>

      {/* 팔로업 목록 */}
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
        {data.items.map((item) => (
          <Fragment key={item.title + item.caption}>
            <SignalItem model={item} onClick={handleItemClick} />
            <Separator />
          </Fragment>
        ))}

        {/* 더보기 버튼 */}
        <CardMoreBottomButton onClick={handleFollowUpItemMoreClick} />
      </div>
    </div>
  );
};
