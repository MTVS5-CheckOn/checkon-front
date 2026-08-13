import { cn } from "@/ui/utils/tailwind/cn";

import { InputSection } from "./_sections/Input";
import { MessagesSection } from "./_sections/Messages";
import { v7 as uuidv7 } from "uuid";
import { useFormContext } from "react-hook-form";
import { QuestionUpdateDialogModel } from "../..";
import { GeneratedQuestionModelsMockRepo } from "@/mocks/question-mocks";

export type ChatMessageModel = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

/**
 * 문항 수정 다이얼로그 - 채팅 섹션
 */
export const ChatSection = () => {
  const { watch, setValue } = useFormContext<QuestionUpdateDialogModel>();
  const messages = watch("chatMessages");

  const handleSend = async (message: string) => {
    setValue("chatMessages", [
      ...messages,
      { id: uuidv7(), role: "user", content: message },
      {
        id: uuidv7(),
        role: "assistant",
        content: `한국교육과정평가원(KICE)의 최근 수능·모의평가 국어 문항 형식을 참고했습니다. 특히 2027학년도 6월 모의평가에서 국어 영역이 공통 과목과 화법과 작문 / 언어와 매체 선택 과목으로 구성되는 점, 실제 문항에서 지문·보기·5지선다 구조가 활용되는 점을 기준으로 구성했습니다.`,
      },
    ]);

    (() => {
      const oldQuestion = watch("questionPreview");
      const randomQuestion = GeneratedQuestionModelsMockRepo.getRandomItem();

      setValue("questionPreview", {
        questionId: oldQuestion.questionId,
        topic: randomQuestion.topic,
        type: randomQuestion.type,
        title: randomQuestion.title,
        choices: randomQuestion.choices,
        answer: randomQuestion.answer,
        level: randomQuestion.level,
        status: randomQuestion.status,
        statusReason: randomQuestion.statusReason,
        generatedReason: randomQuestion.generatedReason,
        version: oldQuestion.version + 1,
        createdAt: new Date(),
      });
    })();
  };

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
      <MessagesSection messages={messages} />

      <InputSection onSend={handleSend} />
    </section>
  );
};
