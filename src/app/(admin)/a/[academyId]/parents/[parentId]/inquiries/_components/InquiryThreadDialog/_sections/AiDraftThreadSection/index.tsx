"use client";

import { ChatInput } from "@/ui/components/ai-chat/ChatInput";
import { ModelResponseMessage } from "@/ui/components/ai-chat/ModelResponseMessage";
import { UserMessageBubble } from "@/ui/components/ai-chat/UserMessageBubble";
import { cn } from "@/ui/utils/tailwind/cn";

const MOCK_USER_MESSAGE =
  "What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

const MOCK_MODEL_RESPONSE =
  'Where does it come from?\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

const AI_DRAFT_SUGGESTION_CHIPS = [
  "결론 먼저",
  "정답률 강조",
  "상담 일정 제안",
];

export const AiDraftThreadSection = () => {
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
          <UserMessageBubble isMine>{MOCK_USER_MESSAGE}</UserMessageBubble>

          <ModelResponseMessage>{MOCK_MODEL_RESPONSE}</ModelResponseMessage>
        </div>
      </div>

      <div className={cn("flex w-full flex-col px-6 pt-2 pb-6")}>
        <ChatInput
          onSend={() => {}}
          suggestionChips={AI_DRAFT_SUGGESTION_CHIPS}
        />
      </div>
    </section>
  );
};
