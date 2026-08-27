import { SignalState } from "@/domain/signal/state";

import { cn } from "@/ui/utils/tailwind/cn";
import {
  AchievementGrid,
  type AchievementGridProps,
} from "./_components/AchievementGrid";

const P = SignalState.Positive;
const W = SignalState.Warning;
const D = SignalState.Danger;
const Def = SignalState.Default;

const createLevels = (statuses: SignalState[]) =>
  statuses.map((status, index) => ({
    id: String(index + 1),
    status,
  }));

const createRow = (
  levelLow: SignalState[],
  levelMiddle: SignalState[],
  levelHigh: SignalState[],
) => ({
  levelLow: createLevels(levelLow),
  levelMiddle: createLevels(levelMiddle),
  levelHigh: createLevels(levelHigh),
});

const MOCK_ACHIEVEMENT_ROWS_BY_TOPIC: Record<
  string,
  AchievementGridProps["rows"]
> = {
  독서: {
    row1: createRow([P, W, P, Def], [W, D, P, W], [P, P, W, D]),
    row2: createRow([D, W, P], [P, W, W], [W, P, D]),
    row3: createRow([W, P, D], [D, P, W], [P, W, P]),
    row4: createRow([P, D, W], [W, W, P], [D, P, W]),
  },
  문학: {
    row1: createRow([P, P, W, Def], [W, P, D, W], [D, W, P, Def]),
    row2: createRow([W, D, P], [P, P, W], [W, D, P]),
    row3: createRow([P, W, D], [D, W, P], [P, D, W]),
    row4: createRow([D, P, W], [W, P, P], [P, W, D]),
  },
  "화법과 작문": {
    row1: createRow([Def, P, W, P], [P, W, W, D], [W, P, P, W]),
    row2: createRow([P, W, Def], [W, D, P], [P, P, W]),
    row3: createRow([W, P, P], [P, D, W], [D, W, P]),
    row4: createRow([P, W, D], [W, P, Def], [W, W, P]),
  },
  언어: {
    row1: createRow([P, Def, P, W], [D, P, W, P], [P, W, D, W]),
    row2: createRow([W, P, D], [P, W, P], [D, P, W]),
    row3: createRow([D, W, P], [W, P, D], [P, P, W]),
    row4: createRow([P, P, W], [D, W, P], [W, D, P]),
  },
  매체: {
    row1: createRow([W, P, D, P], [P, Def, W, P], [P, W, P, D]),
    row2: createRow([P, D, W], [W, P, P], [P, W, Def]),
    row3: createRow([Def, P, W], [P, D, P], [W, P, D]),
    row4: createRow([W, W, P], [P, P, D], [D, P, W]),
  },
};

const ACHIEVEMENT_TOPICS = [
  "독서",
  "문학",
  "화법과 작문",
  "언어",
  "매체",
] as const;

export const AchievementGridContentSection = () => {
  return (
    <div className={cn("flex w-full flex-col items-start gap-15")}>
      {ACHIEVEMENT_TOPICS.map((topic) => (
        <AchievementGrid
          key={topic}
          topic={topic}
          rows={MOCK_ACHIEVEMENT_ROWS_BY_TOPIC[topic]}
        />
      ))}
    </div>
  );
};
