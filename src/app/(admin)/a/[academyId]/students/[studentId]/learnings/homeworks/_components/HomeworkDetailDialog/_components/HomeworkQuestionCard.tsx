"use client";

import { Alert } from "@/ui/components/Alert";
import { StatusLabel, StatusLabelStatus } from "@/ui/components/StatusLabel";
import {
  QuestionChoiceItem,
  QuestionChoiceItemState,
} from "@/ui/domain-components/question/QuestionChoiceItem";
import { QuestionCardParts } from "@/ui/domain-components/question/QuestionCard/parts";
import { cn } from "@/ui/utils/tailwind/cn";

export type HomeworkQuestionCardState = "Answer" | "Wrong" | "Default";

type HomeworkQuestionChoice = {
  title: string;
  content?: string;
  collapsed?: boolean;
  state?: QuestionChoiceItemState;
};

export type HomeworkQuestionCardProps = {
  state: HomeworkQuestionCardState;
};

const QUESTION_TITLE = `Q1. 다음 시를 읽고 물음에 답하시오.

해 질 무렵
빈 운동장을 지나
느티나무 그림자가 길어지고
나는 오래된 벤치에 앉았다.

바람은 운동장 끝에서 불어와
아무도 부르지 않은 이름을 흔들었다.

윗글의 내용과 일치하지 않는 것은?`;

const REASON =
  "시적 화자의 행동과 시적 배경에 대한 명시적 정보를 확인하는 사실적 이해 문항이다.";

const STUDENT_MEMO = `아무도 부르지 않은 이름을 흔들었다는 구절이 무슨 뜻인지 잘 이해가 안 가는데,
이 부분을 꼭 알아야 보기를 판단할 수 있나요?`;

const CHOICE_CONTENT_1 = `[해설]
시에 "빈 운동장", "나는 오래된 벤치에 앉았다"라고 제시되어 있어 화자는 혼자 적막한 운동장에 머물고 있음을 알 수 있습니다.`;

const CHOICE_CONTENT_5 = `[해설]
본문 근거: 시의 3행에 "느티나무 그림자가 길어지고"라는 구절이 직접적으로 제시되어 있습니다.
배경과의 연관성: 1행의 시간적 배경인 "해 질 무렵"은 해가 지평선 쪽으로 낮아지면서 사물의 그림자가 길어지는 시간대입니다.
따라서 3행의 표현은 해 질 녘 풍경을 시각적으로 묘사한 사실과 정확히 부합합니다.`;

const BASE_CHOICES: HomeworkQuestionChoice[] = [
  {
    title: "1. 화자는 시끌벅적한 운동장에서 사람들과 함께 머물고 있다.",
    content: CHOICE_CONTENT_1,
    collapsed: false,
  },
  {
    title: "2. 작품의 시간적 배경은 해가 뜨는 이른 아침이다.",
    collapsed: true,
  },
  {
    title: "3. 바람이 불어와 화자가 애타게 부르던 사람의 이름을 전해주고 있다.",
    collapsed: true,
  },
  {
    title: "4. 화자는 운동장 한가운데 새로 설치된 벤치에 앉아 있다.",
    collapsed: true,
  },
  {
    title: "5. 느티나무의 그림자가 길어지는 모습이 나타난다.",
    content: CHOICE_CONTENT_5,
    collapsed: false,
    state: "Answer",
  },
];

const CARD_STYLE: Record<
  HomeworkQuestionCardState,
  { bgColor: string; badgeStatus: StatusLabelStatus; badgeLabel: string }
> = {
  Answer: {
    bgColor: "bg-ods__blue-20",
    badgeStatus: "Positive",
    badgeLabel: "정답",
  },
  Wrong: {
    bgColor: "bg-ods__red-20",
    badgeStatus: "Danger",
    badgeLabel: "오답",
  },
  Default: {
    bgColor: "bg-ods__white",
    badgeStatus: "Default",
    badgeLabel: "미채점",
  },
};

const getChoices = (
  state: HomeworkQuestionCardState,
): HomeworkQuestionChoice[] => {
  if (state !== "Wrong") {
    return BASE_CHOICES;
  }

  return BASE_CHOICES.map((choice, index) =>
    index === 0 ? { ...choice, state: "Wrong" } : choice,
  );
};

/**
 * 과제 문항 카드
 */
export const HomeworkQuestionCard = ({ state }: HomeworkQuestionCardProps) => {
  const cardStyle = CARD_STYLE[state];
  const choices = getChoices(state);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start gap-2.5 px-6 py-5",
        // 3. Color
        cardStyle.bgColor,
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start gap-7",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <div className={cn("flex w-full flex-col items-start gap-4")}>
          <div className={cn("flex w-full flex-col items-start gap-1")}>
            <div className={cn("flex w-full items-start justify-between")}>
              <div className={cn("flex items-center gap-2")}>
                <StatusLabel status="Default">난이도: 하</StatusLabel>
                <StatusLabel status="Default">풀이시간: 15분 10초</StatusLabel>
              </div>

              <StatusLabel status={cardStyle.badgeStatus}>
                {cardStyle.badgeLabel}
              </StatusLabel>
            </div>

            <QuestionCardParts.Title>{QUESTION_TITLE}</QuestionCardParts.Title>
          </div>

          <div
            className={cn(
              // 1. Layout
              "grid w-full grid-cols-2 gap-3",
            )}
          >
            {choices.map((choice, index) => (
              <QuestionChoiceItem
                content={choice.content}
                key={`${choice.title}-${index}`}
                state={choice.state ?? "Default"}
                title={choice.title}
              />
            ))}
          </div>
        </div>

        <QuestionCardParts.Reason reason={REASON} />

        <Alert description={STUDENT_MEMO} title="학생 메모" />
      </div>
    </div>
  );
};
