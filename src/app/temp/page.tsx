"use client";

import { Button } from "@base-ui/react/button";
import { overlay } from "overlay-kit";

import { BaseDialog } from "@/ui/components/BaseDialog";
import { Separator } from "@/ui/components/Separator";
import {
  SignalItem,
  SignalItemModel,
} from "@/ui/components/SignalListItem/SignalItem";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  const data: {
    selectedDate: Date;
    items: SignalItemModel[];
  } = {
    selectedDate: new Date("2026-07-21"),
    items: [
      {
        title: "박서연",
        status: "POSITIVE",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "09:00",
        content:
          "지문당 풀이시간 개인 베이스라인 대비 1.9배, 3주 연속 상승 , '비문학 추론 유형' 진입 시점과 일치.\n추론 유형 접근법(발문 분석 및 지문 근거 연결) 클리닉을 제안합니다.",
      },
      {
        title: "김민준",
        status: "WARNING",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "10:00",
        content:
          "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
      },
      {
        title: "박서연",
        status: "DANGER",
        statusLabel: "숨은 신호 · 풀이시간 급증",
        caption: "13:00",
        content: "결석 2회 후 오늘 첫 등원.\n가볍게 안부를 물어봐 주세요.",
      },
      {
        title: "박서연",
        status: "DEFAULT",
        statusLabel: "경과 양호",
        caption: "15:00",
        content:
          "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      },
    ],
  };

  const handleClick2 = () => {
    overlay.open(({ isOpen, close }) => (
      <BaseDialog
        isOpen={isOpen}
        onClose={close}
        dialogTitle={
          <div
            className={cn(
              // 1. Layout
              "justify-start",
              // 2. Typography
              "ods__typo__title-large",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {"7월 21일 (화)"}
          </div>
        }
        dialogContent={
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start justify-start gap-3",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <Separator variants="dashed" />

            <div
              className={cn(
                // 2. Typography
                "ods__typo__title-small font-semibold",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              {"이벤트 (4개)"}
            </div>

            <div
              className={cn(
                // 1. Layout
                "flex w-full flex-col items-start justify-start",
                // 6. Utility
                "overflow-auto",
              )}
            >
              {data.items.map((item, index) => {
                const isLast = index === data.items.length - 1;

                return (
                  <div
                    key={item.title + item.caption}
                    className={cn(
                      // 1. Layout
                      "flex w-full",
                      // 4. Shadow & Border
                      "border-ods__border border-b",
                      isLast && "border-b-0",
                    )}
                  >
                    <SignalItem model={item} />
                  </div>
                );
              })}
            </div>
          </div>
        }
      />
    ));
  };

  return (
    <div className={cn("flex h-full w-full items-center justify-center p-8")}>
      <Button onClick={handleClick2}>Click me</Button>
    </div>
  );
}
