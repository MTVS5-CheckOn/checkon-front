import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";

import {
  Dashboard__StudentSignalItem,
  Dashboard__StudentSignalItemModel,
} from "../../_components/SignalItem";

export const Dashboard__FollowUpSection = () => {
  const data: {
    signalCount: number;
    items: Dashboard__StudentSignalItemModel[];
  } = {
    signalCount: 3,
    items: [
      {
        studentName: "박서연",
        status: "POSITIVE",
        statusLabel: "경과 양호",
        createdAt: new Date("2026-07-18"),
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
      {
        studentName: "김민준",
        status: "WARNING",
        statusLabel: "재검토",
        createdAt: new Date("2026-07-19"),
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
      {
        studentName: "박서연",
        status: "DANGER",
        statusLabel: "결과 부정확",
        createdAt: new Date("2026-07-20"),
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
          <div
            className={cn(
              // 1. Layout
              "flex flex-col items-start justify-start px-1.5 py-0.5",
              // 3. Color
              "bg-orange-100",
              // 4. Shadow & Border
              "rounded-full",
            )}
          >
            <div
              className={cn(
                // 2. Typography
                "ods__typo__caption font-semibold",
                // 3. Color
                "text-yellow-700",
              )}
            >
              {`${data.signalCount}건`}
            </div>
          </div>
        </div>
      </div>

      {/* 신호 목록 */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start",
          // 4. Shadow & Border
          "border-ods__base-100 rounded-xl border",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        {data.items.map((item) => (
          <Dashboard__StudentSignalItem
            key={item.studentName + item.createdAt.toISOString()}
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
