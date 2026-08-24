"use client";

import { overlay } from "overlay-kit";

import { SignalState } from "@/domain/signal/state";

import {
  HomeworkResultCard,
  HomeworkResultCardModel,
} from "@/ui/domain-components/question/HomeworkResultCard";
import { cn } from "@/ui/utils/tailwind/cn";

import { HomeworkDetailDialog } from "../../../../students/[studentId]/learnings/homeworks/_components/HomeworkDetailDialog";

export const MonthlyHomeworkSection = () => {
  const handleClick = () => {
    overlay.open(({ isOpen, close }) => (
      <HomeworkDetailDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "grid w-full grid-cols-3 gap-3",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {MONTHLY_HOMEWORK_RESULT_CARDS.map((card, index) => (
        <HomeworkResultCard
          key={`${card.title}-${index}`}
          model={card}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

const MONTHLY_HOMEWORK_RESULT_CARDS = [
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 60,
      wrongAnswerCount: 40,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 40,
      wrongAnswerCount: 60,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
  }),
  new HomeworkResultCardModel({
    title: "홍길동",
    subtitle: "학습 현황",
    totalQuestionCount: 100,
    labelModel: {
      status: SignalState.Default,
      label: "과제 1개",
    },
    submissionInfo: {
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
  }),
];
