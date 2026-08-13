import { cn } from "@/ui/utils/tailwind/cn";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { Button } from "@/ui/components/Button";

import TextareaAutosize from "react-textarea-autosize";

const SUGGESTION_CHIPS = [
  "선지 자연스럽게",
  "발문 간결하게",
  "차단되는 요청 예시",
];

/**
 * 문항 수정 다이얼로그 - 채팅 섹션 - 입력 섹션
 */
export const InputSection = () => {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-start justify-start gap-2 pt-2",
      )}
    >
      <div className={cn("flex items-start justify-start gap-2")}>
        {SUGGESTION_CHIPS.map((chip) => (
          <button key={chip}>
            <StatusLabel status="Default">{chip}</StatusLabel>
          </button>
        ))}
      </div>

      <div className={cn("flex w-full items-start justify-start gap-2")}>
        <div className={cn("flex-1")}>
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col",
              // 4. Shadow & Border
              "border-ods__border rounded-sm border",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <TextareaAutosize
              defaultValue="문제 수정해줘"
              maxRows={5}
              className={cn(
                // 1. Layout
                "w-full p-3",
                // 2. Typography
                "ods__typo__body-medium",
                // 3. Color
                "text-ods__base-600",
                // 4. Shadow & Border
                "rounded-[12px]",
                // 5. Interaction
                "ods__animate__default hover:opacity-80",
                // 6. Utility
                "resize-none focus:outline-none",

                // Placeholder
                "placeholder:text-ods__base-400 font-light",

                // Disabled
                // disabled && "pointer-events-none opacity-30",
              )}
              onKeyDown={(e) => {
                // 한글 등 IME 입력 시 엔터 중복 입력(두 번 실행) 방지
                if (e.nativeEvent.isComposing) {
                  return;
                }

                // Shift + Enter -> 기본 동작(줄바꿈) 실행
                if (e.key === "Enter" && e.shiftKey) {
                  return;
                }

                // 일반 Enter -> 전송
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault(); // 줄바꿈 기본 동작 방지
                  alert("전송");
                }
              }}
            />

            <div
              className={cn(
                "flex w-full items-center justify-end px-3 pt-1 pb-3",
              )}
            >
              <Button size="small" color="blue">
                보내기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
