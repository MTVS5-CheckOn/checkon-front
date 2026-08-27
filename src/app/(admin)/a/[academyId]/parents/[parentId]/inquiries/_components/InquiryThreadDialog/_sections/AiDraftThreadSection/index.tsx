"use client";

import { ChatInput } from "@/ui/components/ai-chat/ChatInput";
import { ModelResponseMessage } from "@/ui/components/ai-chat/ModelResponseMessage";
import { UserMessageBubble } from "@/ui/components/ai-chat/UserMessageBubble";
import { cn } from "@/ui/utils/tailwind/cn";

export type AiDraftMessage =
  | { id: string; role: "user"; content: string }
  | { id: string; role: "model"; content: string };

const AI_DRAFT_SUGGESTION_CHIPS = [
  "결론 먼저",
  "정답률 강조",
  "상담 일정 제안",
];

type AiDraftThreadSectionProps = {
  messages: AiDraftMessage[];
  onSend: (message: string) => void;
};

export const AiDraftThreadSection = ({
  messages,
  onSend,
}: AiDraftThreadSectionProps) => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-[684px] flex-col items-start justify-between",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div className={cn("flex w-full flex-1 flex-col gap-4 overflow-hidden")}>
        <div
          className={cn(
            // 1. Layout
            "flex w-full items-center gap-2.5 px-6 pt-5 pb-4",
            // 4. Shadow & Border
            "border-ods__border border-b",
          )}
        >
          <div className={cn("flex flex-col items-start")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__title-medium",
                // 3. Color
                "text-ods__base-600",
              )}
            >
              AI로 답변 초안 생성하기
            </span>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__body-small",
                // 3. Color
                "text-ods__base-400",
              )}
            >
              AI에게 답변 초안을 작성을 요청하고 복사할 수 있어요.
            </span>
          </div>
        </div>

        <div
          className={cn(
            "flex w-full flex-1 flex-col gap-6 overflow-y-auto px-6",
          )}
        >
          {messages.map((message) =>
            message.role === "user" ? (
              <UserMessageBubble key={message.id} isMine>
                {message.content}
              </UserMessageBubble>
            ) : (
              <ModelResponseMessage key={message.id}>
                {message.content}
              </ModelResponseMessage>
            ),
          )}
        </div>
      </div>

      <div className={cn("flex w-full flex-col px-6 pt-2 pb-6")}>
        <ChatInput
          onSend={onSend}
          suggestionChips={AI_DRAFT_SUGGESTION_CHIPS}
        />
      </div>
    </section>
  );
};
