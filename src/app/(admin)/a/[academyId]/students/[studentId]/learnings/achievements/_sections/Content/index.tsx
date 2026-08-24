import { SignalState } from "@/domain/signal/state";

import { cn } from "@/ui/utils/tailwind/cn";
import { AchievementGrid } from "./_components/AchievementGrid";

export const AchievementGridContentSection = () => {
  return (
    <div className={cn("flex w-full flex-col items-start gap-15")}>
      <AchievementGrid
        topic="독서"
        rows={{
          row1: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
          },
          row2: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row3: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row4: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
        }}
      />

      <AchievementGrid
        topic="문학"
        rows={{
          row1: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
          },
          row2: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row3: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row4: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
        }}
      />

      <AchievementGrid
        topic="화법과 작문"
        rows={{
          row1: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
          },
          row2: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row3: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row4: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
        }}
      />

      <AchievementGrid
        topic="언어"
        rows={{
          row1: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
          },
          row2: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row3: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row4: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
        }}
      />

      <AchievementGrid
        topic="매체"
        rows={{
          row1: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
              { id: "4", status: SignalState.Default },
            ],
          },
          row2: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row3: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
          row4: {
            levelLow: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelMiddle: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
            levelHigh: [
              { id: "1", status: SignalState.Positive },
              { id: "2", status: SignalState.Warning },
              { id: "3", status: SignalState.Danger },
            ],
          },
        }}
      />
    </div>
  );
};
