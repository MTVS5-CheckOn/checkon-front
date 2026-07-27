import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";

import {
  SignalItem,
  SignalItemModel,
} from "@/ui/components/SignalListItem/SignalItem";
import { StatusLabel } from "@/ui/components/StatusLabel";

export const Dashboard__FollowUpSection = () => {
  const data: {
    signalCount: number;
    items: SignalItemModel[];
  } = {
    signalCount: 3,
    items: [
      {
        title: "박서연",
        status: "POSITIVE",
        statusLabel: "경과 양호",
        caption: "5일 전",
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
      {
        title: "김민준",
        status: "WARNING",
        statusLabel: "재검토",
        caption: "4일 전",
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
      {
        title: "박서연",
        status: "DANGER",
        statusLabel: "결과 부정확",
        caption: "3일 전",
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
    ],
  };

  const handleMoreClick = () => {
    alert("확인이 필요한 신호 더보기");
  };

  return (
    <div className={cn("flex flex-col items-start justify-start gap-3")}>
      {/* 헤더 */}
      <div className={cn("flex w-full items-center justify-between")}>
        <div className={cn("flex items-center justify-start gap-2")}>
          <div className={cn("flex flex-col items-start justify-start")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__title-small font-semibold",
                // 3. Color
                "text-ods__base-600",
              )}
            >
              팔로업 진행 중
            </div>
          </div>

          {/* 신호 개수 */}
          <StatusLabel status="POSITIVE">{`${data.signalCount}건`}</StatusLabel>
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
        {data.items.map((item) => (
          <SignalItem
            key={item.title + item.caption}
            model={item}
            onClick={handleMoreClick}
          />
        ))}

        {/* 더보기 버튼 */}
        <CardMoreBottomButton onClick={handleMoreClick} />
      </div>
    </div>
  );
};
