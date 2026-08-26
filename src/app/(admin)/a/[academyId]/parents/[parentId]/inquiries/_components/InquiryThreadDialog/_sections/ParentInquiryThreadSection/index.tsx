"use client";

import { SignalState } from "@/domain/signal/state";
import { ChatInput } from "@/ui/components/ai-chat/ChatInput";
import { UserMessageBubble } from "@/ui/components/ai-chat/UserMessageBubble";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

const MOCK_PARENT_MESSAGE =
  "What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

export const ParentInquiryThreadSection = () => {
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
          <UserMessageBubble
            isMine={false}
            sender="김영희"
            timestamp="22:00"
            options={
              <StatusLabel status={SignalState.Default}>
                AI로 답변하기
              </StatusLabel>
            }
          >
            {MOCK_PARENT_MESSAGE}
          </UserMessageBubble>

          <UserMessageBubble isMine timestamp="22:00">
            {MOCK_PARENT_MESSAGE}
          </UserMessageBubble>
        </div>
      </div>

      <div className={cn("flex w-full flex-col px-6 pt-2 pb-6")}>
        <ChatInput onSend={() => {}} />
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
