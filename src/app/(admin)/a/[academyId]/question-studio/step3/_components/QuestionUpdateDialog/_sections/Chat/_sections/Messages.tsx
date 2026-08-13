import { cn } from "@/ui/utils/tailwind/cn";
import { useEffect, useRef } from "react";

import { ModelResponseMessage } from "@/ui/components/ai-chat/ModelResponseMessage";
import { UserQueryBubble } from "@/ui/components/ai-chat/UserQuery";

import { ChatMessageModel } from "..";

/**
 * 문항 수정 다이얼로그 - 채팅 섹션 - 메시지 섹션
 */
export const MessagesSection = ({
  messages,
}: {
  messages: ChatMessageModel[];
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lastMessage = messages.at(-1);
    if (lastMessage?.role !== "user") {
      return;
    }

    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "flex h-full w-full flex-1 flex-col items-start justify-start gap-6 pb-4",
        "overflow-y-auto",
      )}
    >
      {messages.map((message) => {
        if (message.role === "user") {
          return (
            <div
              key={message.id}
              className={cn("flex w-full items-start justify-end gap-2.5")}
            >
              <UserQueryBubble>{message.content}</UserQueryBubble>
            </div>
          );
        }

        return (
          <div
            key={message.id}
            className={cn("flex w-full flex-col justify-center")}
          >
            <ModelResponseMessage>{message.content}</ModelResponseMessage>
          </div>
        );
      })}
    </div>
  );
};
