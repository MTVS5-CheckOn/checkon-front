import { cn } from "@/ui/utils/tailwind/cn";

import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import {
  SignalItem,
  SignalItemModel,
} from "@/ui/components/SignalListItem/SignalItem";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { overlay } from "overlay-kit";
import { WeeklyCalendar__SignalDetailDialog } from "./components/SignalDetailDialog";

export const Dashboard__SignalSection = () => {
  const data: {
    signalCount: number;
    items: SignalItemModel[];
  } = {
    signalCount: 3,
    items: [
      {
        title: "박서연",
        status: "POSITIVE",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "5일 전",
        content:
          "지문당 풀이시간 개인 베이스라인 대비 1.9배, 3주 연속 상승 , '비문학 추론 유형' 진입 시점과 일치.\n추론 유형 접근법(발문 분석 및 지문 근거 연결) 클리닉을 제안합니다.",
      },
      {
        title: "김민준",
        status: "WARNING",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "4일 전",
        content:
          "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
      },
      {
        title: "박서연",
        status: "DANGER",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "3일 전",
        content: "결석 2회 후 오늘 첫 등원.\n가볍게 안부를 물어봐 주세요.",
      },
    ],
  };

  const handleSignalItemClick = () => {
    overlay.open(({ isOpen, close }) => (
      <WeeklyCalendar__SignalDetailDialog isOpen={isOpen} onClose={close} />
    ));
  };

  const handleSignalItemMoreClick = () => {
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
              확인이 필요한 신호
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
            onClick={handleSignalItemClick}
          />
        ))}

        {/* 더보기 버튼 */}
        <CardMoreBottomButton onClick={handleSignalItemMoreClick} />
      </div>
    </div>
  );
};
