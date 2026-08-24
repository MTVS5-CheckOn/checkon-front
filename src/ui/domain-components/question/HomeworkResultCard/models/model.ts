import { SignalState } from "@/domain/signal/state";
import { StatusLabelStatus } from "@/ui/components/StatusLabel";
import { isNil } from "es-toolkit/predicate";

/**
 * 제출 정보
 */
export type HomeworkResultCardSubmissionInfo = {
  /**
   * 풀이시간 (초)
   */
  solveTimeSeconds?: number;
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
 * 상태 라벨 모델
 */
export type HomeworkResultCardStatusLabelModel = {
  status: StatusLabelStatus;
  label: string;
};

/**
 * 카드 상태
 */
export type HomeworkResultCardState = SignalState;

/**
 * 과제 결과 카드 모델
 */
export class HomeworkResultCardModel {
  readonly title: string;
  readonly subtitle: string;
  readonly totalQuestionCount: number;
  readonly labelModel: HomeworkResultCardStatusLabelModel;
  readonly submissionInfo?: HomeworkResultCardSubmissionInfo;

  constructor(input: {
    title: string;
    subtitle: string;
    totalQuestionCount: number;
    labelModel: HomeworkResultCardStatusLabelModel;
    submissionInfo?: HomeworkResultCardSubmissionInfo;
  }) {
    this.title = input.title;
    this.subtitle = input.subtitle;
    this.totalQuestionCount = input.totalQuestionCount;
    this.labelModel = input.labelModel;
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
      return SignalState.Default;
    }
    if (answerRatio >= 80) {
      return SignalState.Positive;
    }
    if (answerRatio >= 60) {
      return SignalState.Warning;
    }

    return SignalState.Danger;
  }

  /**
   * 풀이시간 포맷 mm분 ss초
   */
  formatSolveTime(): string {
    if (!this.submissionInfo?.solveTimeSeconds) {
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

    if (state === SignalState.Positive) {
      return "bg-ods__blue-300";
    }
    if (state === SignalState.Warning) {
      return "bg-ods__yellow-200";
    }
    if (state === SignalState.Danger) {
      return "bg-ods__red-400";
    }

    return "bg-ods__gray-200";
  }
}
