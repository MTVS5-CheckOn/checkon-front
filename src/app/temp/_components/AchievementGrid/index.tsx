import { SignalState } from "@/domain/signal/state";
import { cn } from "@/ui/utils/tailwind/cn";
import { Fragment } from "react/jsx-runtime";
import { AchievementGridHeader } from "./_components/AchievementGridHeader";
import { AchievementGridItem } from "./_components/AchievementGridItem";
import { AchievementGridTopic } from "./_components/AchievementGridTopic";

/**
 * 성취도 난이도
 * 하 | 중 | 상
 */
type AchievementLevel = {
  id: string;
  status: SignalState;
};

/**
 * 성취도 그리드 행
 */
type AchievementRow = {
  levelLow: AchievementLevel[];
  levelMiddle: AchievementLevel[];
  levelHigh: AchievementLevel[];
};

export type AchievementGridProps = {
  /**
   * 출제 영역
   */
  topic: string;
  rows: {
    /**
     * 사실적 이해
     */
    row1: AchievementRow;
    /**
     * 추론적 이해
     */
    row2: AchievementRow;
    /**
     * 비판적 이해
     */
    row3: AchievementRow;
    /**
     * 어휘·개념
     */
    row4: AchievementRow;
  };
};

export const AchievementGrid = ({ topic, rows }: AchievementGridProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "grid w-full grid-cols-4 gap-2",
      )}
    >
      {/* Header */}
      <AchievementGridTopic>{topic}</AchievementGridTopic>
      <AchievementGridHeader>{"하"}</AchievementGridHeader>
      <AchievementGridHeader>{"중"}</AchievementGridHeader>
      <AchievementGridHeader>{"상"}</AchievementGridHeader>

      {/* Row 1 */}
      <Fragment>
        <AchievementGridHeader>{"사실적 이해"}</AchievementGridHeader>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row1.levelLow.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row1.levelMiddle.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row1.levelHigh.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>
      </Fragment>

      {/* Row 2 */}
      <Fragment>
        <AchievementGridHeader>{"추론적 이해"}</AchievementGridHeader>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row2.levelLow.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row2.levelMiddle.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row2.levelHigh.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>
      </Fragment>

      {/* Row 3 */}
      <Fragment>
        <AchievementGridHeader>{"비판적 이해"}</AchievementGridHeader>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row3.levelLow.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row3.levelMiddle.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row3.levelHigh.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>
      </Fragment>

      {/* Row 4 */}
      <Fragment>
        <AchievementGridHeader>{"어휘·개념"}</AchievementGridHeader>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row4.levelLow.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row4.levelMiddle.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex gap-2",
          )}
        >
          {rows.row4.levelHigh.map((level) => (
            <AchievementGridItem key={level.id} status={level.status} />
          ))}
        </div>
      </Fragment>
    </div>
  );
};
