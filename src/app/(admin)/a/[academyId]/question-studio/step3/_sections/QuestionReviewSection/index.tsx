import {
  QuestionCard,
  type QuestionCardProps,
} from "./_components/QuestionCard";

import { cn } from "@/ui/utils/tailwind/cn";

export const QuestionReviewSection = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-3",
      )}
    >
      <Header />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-6",
        )}
      >
        {MOCK_QUESTIONS.map((question) => (
          <QuestionCard key={question.statusLabel.text} {...question} />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center justify-center gap-2.5",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        문항 검토
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        10개
      </span>
    </div>
  );
};

// ================================

const MOCK_CHOICES = Array.from({ length: 5 }, () => ({
  label: "국물 → 궁물",
}));

const MOCK_QUESTIONS: QuestionCardProps[] = [
  {
    statusLabel: { status: "Positive", text: "검증 통과" },
    title: "Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?",
    choices: MOCK_CHOICES.map((choice, index) => ({
      ...choice,
      isSelected: index === 0,
    })),
    reason: "기준 자료의 비음화 탈락 항목",
  },
  {
    statusLabel: { status: "Warning", text: "검토 필요" },
    title: "Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?",
    choices: MOCK_CHOICES.map((choice, index) => ({
      ...choice,
      isSelected: index === 0,
    })),
    reason: "기준 자료의 비음화 탈락 항목",
    alert: {
      variant: "Warning",
      title: "검토 필요",
      description: "문제 의도가 목표와 맞는지 확인이 필요합니다.",
    },
  },
  {
    statusLabel: { status: "Danger", text: "검증 불가" },
    title: "Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?",
    choices: MOCK_CHOICES.map((choice, index) => ({
      ...choice,
      isSelected: index === 0,
    })),
    reason: "기준 자료의 비음화 탈락 항목",
    alert: {
      variant: "Danger",
      title: "검증 불가",
      description:
        "검사 시스템 문제로 확인하지 못한 상태입니다. 다시 검사해서 통과해야만 발행 목록에 올라옵니다.\n\n이 문항을 활용하려면 직접 출제 기능을 이용해 직접 작성해 주세요.",
    },
  },
  {
    statusLabel: { status: "Default", text: "폐기됨" },
    title: "Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?",
    choices: MOCK_CHOICES.map((choice, index) => ({
      ...choice,
      isSelected: index === 0,
    })),
    reason: "기준 자료의 비음화 탈락 항목",
    alert: {
      variant: "Default",
      title: "폐기/제외됨",
      description: `아래 사유로 문항 생성에 실패했습니다.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
  },
];
