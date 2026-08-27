"use client";

import { useState } from "react";

import { BaseDialog } from "@/ui/components/BaseDialog";
import { cn } from "@/ui/utils/tailwind/cn";

import {
  AiDraftThreadSection,
  type AiDraftMessage,
} from "./_sections/AiDraftThreadSection";
import {
  ParentInquiryThreadSection,
  type ParentThreadMessage,
} from "./_sections/ParentInquiryThreadSection";

export type InquiryThreadDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  threadId?: string;
};

const PARENT_INQUIRY_CONTENT =
  "여름방학 특강 시간표가 궁금합니다. 그리고 요즘 민준이 성적이 왜 이런지도 좀 알려주세요";

const AI_DRAFT_PROMPT = `학부모가 '${PARENT_INQUIRY_CONTENT}'라고 보냈다. 학부모 라벨과 과거 문의 내용을 토대로 적합한 답변 초안을 생성해줘`;

const MOCK_AI_DRAFT_RESPONSE = `안녕하세요, 김영희 학부모님.

여름방학 특강은 7/28(월)~8/15(금) 평일 10:00~12:00, 국어 독해·추론 집중 과정으로 진행됩니다. 시간표와 출석 안내는 이번 주 중 학부모님 연락처로 다시 보내드리겠습니다.

민준이 최근 2주 정답률은 비문학(추론)에서 약 61%로, 이전 대비 다소 하락했습니다. 오답 7건 중 5건이 문단 중심 내용 파악에서 발생해, 특강에서 해당 유형을 우선 보완할 예정입니다.

성적 관련 상세 설명은 민감하실 수 있어, 편하신 시간에 짧게 통화 드려도 될까요?`;

const AI_DRAFT_CHIP_RESPONSES: Record<string, string> = {
  "결론 먼저": `안녕하세요, 김영희 학부모님.

결론부터 말씀드리면, 여름방학 특강은 7/28(월)~8/15(금) 평일 10:00~12:00이며, 민준이는 비문학 추론을 우선 보완하는 과정으로 배정하는 것이 적합합니다.

특강 시간표와 출석 안내는 이번 주 중 학부모님 연락처로 보내드리겠습니다. 민준이 최근 2주 정답률은 비문학(추론) 약 61%로 이전보다 낮아, 문단 중심 내용 파악부터 다시 점검할 예정입니다.

성적 관련 상세 설명은 민감하실 수 있어, 편하신 시간에 짧게 통화 드려도 될까요?`,
  "정답률 강조": `안녕하세요, 김영희 학부모님.

민준이 최근 2주 정답률을 먼저 공유드립니다. 비문학(추론)은 약 61%로 베이스라인 대비 하락했고, 오답 7건 중 5건이 문단 중심 내용 파악에서 발생했습니다. 나머지 영역은 비교적 안정적입니다.

여름방학 특강(7/28~8/15, 평일 10:00~12:00)에서는 이 정답률 구간을 끌어올리는 독해·추론 집중 과정으로 구성할 예정입니다. 시간표는 이번 주 중 따로 보내드리겠습니다.

성적 숫자는 민감하실 수 있어, 해석과 보완 계획은 편하신 시간에 짧게 설명드려도 될까요?`,
  "상담 일정 제안": `안녕하세요, 김영희 학부모님.

여름방학 특강은 7/28(월)~8/15(금) 평일 10:00~12:00, 국어 독해·추론 집중 과정입니다. 민준이 최근 비문학(추론) 정답률 약 61%라 특강에서 해당 유형을 우선 보완할 예정입니다.

성적과 특강 배정을 편하게 여쭤보실 수 있도록, 아래 중 가능하신 시간을 알려주시면 감사하겠습니다.
- 평일 수업 전 09:20~09:50
- 평일 수업 후 12:10~12:40
- 토요일 10:00~10:30

원하시는 요일·시간을 회신해 주시면 바로 잡아드리겠습니다.`,
};

const resolveAiDraftResponse = (prompt: string) =>
  AI_DRAFT_CHIP_RESPONSES[prompt] ?? MOCK_AI_DRAFT_RESPONSE;

const INITIAL_PARENT_THREAD_MESSAGES: ParentThreadMessage[] = [
  {
    id: "parent-inquiry-1",
    isMine: false,
    sender: "김영희",
    content: PARENT_INQUIRY_CONTENT,
    timestamp: "22:00",
  },
];

const formatLocalTime = (date: Date) =>
  `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

/**
 * 학부모 문의 쓰레드 상세 다이얼로그
 */
export const InquiryThreadDialog = ({
  isOpen,
  onClose,
}: InquiryThreadDialogProps) => {
  const [parentThreadMessages, setParentThreadMessages] = useState<
    ParentThreadMessage[]
  >(INITIAL_PARENT_THREAD_MESSAGES);
  const [aiDraftMessages, setAiDraftMessages] = useState<AiDraftMessage[]>([]);

  const handleReplyWithAi = () => {
    setAiDraftMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: AI_DRAFT_PROMPT,
      },
      {
        id: crypto.randomUUID(),
        role: "model",
        content: MOCK_AI_DRAFT_RESPONSE,
      },
    ]);
  };

  const handleSendAiDraftPrompt = (prompt: string) => {
    setAiDraftMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: prompt,
      },
      {
        id: crypto.randomUUID(),
        role: "model",
        content: resolveAiDraftResponse(prompt),
      },
    ]);
  };

  const handleSendInstructorMessage = (message: string) => {
    setParentThreadMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        isMine: true,
        content: message,
        timestamp: formatLocalTime(new Date()),
      },
    ]);
  };

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      dialogTitle={"문의 쓰레드"}
      dialogContent={
        <div
          className={cn(
            // 1. Layout
            "flex h-full w-full items-stretch gap-6",
            // 6. Utility
            "overflow-hidden",
          )}
        >
          <ParentInquiryThreadSection
            messages={parentThreadMessages}
            onReplyWithAi={handleReplyWithAi}
            onSend={handleSendInstructorMessage}
          />
          <AiDraftThreadSection
            messages={aiDraftMessages}
            onSend={handleSendAiDraftPrompt}
          />
        </div>
      }
    />
  );
};
