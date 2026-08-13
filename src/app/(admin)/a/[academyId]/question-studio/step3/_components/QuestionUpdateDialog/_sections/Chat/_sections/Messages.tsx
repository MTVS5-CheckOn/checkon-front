import { cn } from "@/ui/utils/tailwind/cn";

import { ModelResponseMessage } from "@/ui/components/ai-chat/ModelResponseMessage";
import { UserQueryBubble } from "@/ui/components/ai-chat/UserQuery";

const MOCK_USER_MESSAGE = `What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

const MOCK_AI_MESSAGE = `Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

/**
 * 문항 수정 다이얼로그 - 채팅 섹션 - 메시지 섹션
 */
export const MessagesSection = () => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-1 flex-col items-start justify-start gap-6 pb-4",
        "overflow-y-auto",
      )}
    >
      <div className={cn("flex w-full items-start justify-end gap-2.5")}>
        <UserQueryBubble>{MOCK_USER_MESSAGE}</UserQueryBubble>
      </div>

      <div className={cn("flex w-full flex-col items-center justify-center")}>
        <ModelResponseMessage>{MOCK_AI_MESSAGE}</ModelResponseMessage>
        <ModelResponseMessage>{MOCK_AI_MESSAGE}</ModelResponseMessage>
        <ModelResponseMessage>{MOCK_AI_MESSAGE}</ModelResponseMessage>
        <ModelResponseMessage>{MOCK_AI_MESSAGE}</ModelResponseMessage>
      </div>
    </div>
  );
};
