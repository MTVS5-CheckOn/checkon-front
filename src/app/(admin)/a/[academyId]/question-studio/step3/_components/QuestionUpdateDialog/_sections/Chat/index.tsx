import { cn } from "@/ui/utils/tailwind/cn";

import { InputSection } from "./_sections/Input";
import { MessagesSection } from "./_sections/Messages";

// ================================================

/**
 * 문항 수정 다이얼로그 - 채팅 섹션
 */
export const ChatSection = () => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex h-full flex-1 flex-col items-start justify-between",
        "w-full px-6 py-5",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <MessagesSection />

      <InputSection />
    </section>
  );
};
