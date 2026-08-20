import { StatusLabelStatus } from "@/ui/components/StatusLabel";
import { isNil } from "es-toolkit/predicate";

/**
 * 제출 정보
 */
export type HomeworkResultCardSubmissionInfo = {
  /**
   * 풀이시간 (초)
   */
  solveTimeSeconds: number;
  /**
   * 정답 문항 수
   */
  correctAnswerCount: number;
  /**
   * 오답 문항 수
   */
  wrongAnswerCount: number;
  /**
   * 메모 수
   */
  memoCount: number;
};

/**
 * 카드 상태
 */
export type HomeworkResultCardState =
  "Default" | "Warning" | "Danger" | "Positive";

/**
 * 과제 결과 카드 모델
 */
export class HomeworkResultCardModel {
  readonly title: string;
  readonly date: Date;
  readonly totalQuestionCount: number;
  readonly submissionInfo?: HomeworkResultCardSubmissionInfo;

  constructor(input: {
    title: string;
    date: Date;
    totalQuestionCount: number;
    submissionInfo?: HomeworkResultCardSubmissionInfo;
  }) {
    this.title = input.title;
    this.date = input.date;
    this.totalQuestionCount = input.totalQuestionCount;
    this.submissionInfo = input.submissionInfo;
  }

  /**
   * 정답률 계산
   */
  getAnswerRatio(): number | null {
    if (!this.submissionInfo) {
      return null;
    }

    return (
      (this.submissionInfo.correctAnswerCount / this.totalQuestionCount) * 100
    );
  }

  /**
   * 카드 상태 계산
   */
  getCardState(): HomeworkResultCardState {
    const answerRatio = this.getAnswerRatio();

    if (isNil(answerRatio)) {
      return "Default";
    }
    if (answerRatio >= 80) {
      return "Positive";
    }
    if (answerRatio >= 60) {
      return "Warning";
    }

    return "Danger";
  }

  /**
   * 상태 라벨 모델 계산
   */
  getStatusLabelModel(): {
    status: StatusLabelStatus;
    label: string;
  } {
    if (!this.submissionInfo) {
      return {
        status: "Default",
        label: "미제출",
      };
    }

    return {
      status: "Positive",
      label: "채점 완료",
    };
  }

  /**
   * 풀이시간 포맷 mm분 ss초
   */
  formatSolveTime(): string {
    if (!this.submissionInfo) {
      return "-";
    }

    const { solveTimeSeconds } = this.submissionInfo;

    if (solveTimeSeconds < 60) {
      return `${solveTimeSeconds}초`;
    }

    const minutes = Math.floor(solveTimeSeconds / 60);
    const seconds = solveTimeSeconds % 60;
    return `${minutes}분 ${seconds}초`;
  }

  /**
   * 정답률 도넛 차트 색깔
   */
  getAnswerRatioChartColor(): string {
    const state = this.getCardState();

    if (state === "Positive") {
      return "bg-ods__blue-300";
    }
    if (state === "Warning") {
      return "bg-ods__yellow-200";
    }
    if (state === "Danger") {
      return "bg-ods__red-400";
    }

    return "bg-ods__gray-200";
  }
}
