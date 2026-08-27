"use client";

import { SignalState } from "@/domain/signal/state";
import { ChatInput } from "@/ui/components/ai-chat/ChatInput";
import { UserMessageBubble } from "@/ui/components/ai-chat/UserMessageBubble";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

export type ParentThreadMessage = {
  id: string;
  isMine: boolean;
  sender?: string;
  content: string;
  timestamp: string;
};

type ParentInquiryThreadSectionProps = {
  messages: ParentThreadMessage[];
  onReplyWithAi: () => void;
  onSend: (message: string) => void;
};

export const ParentInquiryThreadSection = ({
  messages,
  onReplyWithAi,
  onSend,
}: ParentInquiryThreadSectionProps) => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex flex-1 flex-col items-start justify-between",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div className={cn("flex w-full flex-1 flex-col gap-4 overflow-hidden")}>
        <ChatThreadHeader
          title="학부모 문의 쓰레드"
          description="메세지 오발송을 방지하기 위해 보내기 전에 확인 Alert가 발생해요."
        />

        <div
          className={cn(
            "flex w-full flex-1 flex-col gap-6 overflow-y-auto px-6",
          )}
        >
          {messages.map((message) => (
            <UserMessageBubble
              key={message.id}
              isMine={message.isMine}
              sender={message.sender}
              timestamp={message.timestamp}
              options={
                !message.isMine ? (
                  <button type="button" onClick={onReplyWithAi}>
                    <StatusLabel status={SignalState.Default}>
                      AI로 답변하기
                    </StatusLabel>
                  </button>
                ) : undefined
              }
            >
              {message.content}
            </UserMessageBubble>
          ))}
        </div>
      </div>

      <div className={cn("flex w-full flex-col px-6 pt-2 pb-6")}>
        <ChatInput onSend={onSend} />
      </div>
    </section>
  );
};

const ChatThreadHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
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
          {title}
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            "text-ods__base-400",
          )}
        >
          {description}
        </span>
      </div>
    </div>
  );
};
