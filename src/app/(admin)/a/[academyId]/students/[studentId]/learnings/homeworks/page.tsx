"use client";

import {
  HomeworkResultCard,
  HomeworkResultCardModel,
} from "@/ui/domain-components/question/HomeworkResultCard";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <div
      className={cn(
        // 1. Layout
        "grid w-full grid-cols-4 gap-3 px-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {HOMEWORK_RESULT_CARDS.map((card, index) => (
        <HomeworkResultCard key={`${card.title}-${index}`} model={card} />
      ))}
    </div>
  );
}

const HOMEWORK_RESULT_CARDS = [
  new HomeworkResultCardModel({
    title: "독서x사실적 이해 외 2영역",
    date: new Date("2026-08-16"),
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 900,
      correctAnswerCount: 60,
      wrongAnswerCount: 40,
      memoCount: 20,
    },
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 900,
      correctAnswerCount: 40,
      wrongAnswerCount: 60,
      memoCount: 20,
    },
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 900,
      correctAnswerCount: 80,
      wrongAnswerCount: 20,
      memoCount: 20,
    },
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 540,
      correctAnswerCount: 65,
      wrongAnswerCount: 35,
      memoCount: 8,
    },
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 1200,
      correctAnswerCount: 92,
      wrongAnswerCount: 8,
      memoCount: 31,
    },
    totalQuestionCount: 100,
  }),
  new HomeworkResultCardModel({
    title: "문학x어휘개념 외 4영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 45,
      correctAnswerCount: 12,
      wrongAnswerCount: 38,
      memoCount: 3,
    },
    totalQuestionCount: 50,
  }),
  new HomeworkResultCardModel({
    title: "독해x논리 외 3영역",
    date: new Date("2026-08-16"),
    submissionInfo: {
      solveTimeSeconds: 720,
      correctAnswerCount: 50,
      wrongAnswerCount: 0,
      memoCount: 5,
    },
    totalQuestionCount: 50,
  }),
];
