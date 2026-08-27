import { SignalState } from "@/domain/signal/state";
import {
  WeekMap,
  type WeekMapRowDataItemModel,
} from "@/ui/domain-components/student/WeekMap";

const MOCK_WEAKNESS_MAP_DATA: WeekMapRowDataItemModel[][] = [
  [
    { status: SignalState.Positive, value: "88" },
    { status: SignalState.Warning, value: "75" },
    { status: SignalState.Danger, value: "61" },
    { status: SignalState.Default, value: "" },
  ],
  [
    { status: SignalState.Positive, value: "88" },
    { status: SignalState.Warning, value: "75" },
    { status: SignalState.Danger, value: "61" },
    { status: SignalState.Default, value: "" },
  ],
  [
    { status: SignalState.Positive, value: "88" },
    { status: SignalState.Warning, value: "75" },
    { status: SignalState.Danger, value: "61" },
    { status: SignalState.Default, value: "" },
  ],
  [
    { status: SignalState.Positive, value: "88" },
    { status: SignalState.Warning, value: "75" },
    { status: SignalState.Danger, value: "61" },
    { status: SignalState.Default, value: "" },
  ],
  [
    { status: SignalState.Positive, value: "88" },
    { status: SignalState.Warning, value: "75" },
    { status: SignalState.Danger, value: "61" },
    { status: SignalState.Default, value: "" },
  ],
];

export const WeaknessMap = () => {
  return <WeekMap data={MOCK_WEAKNESS_MAP_DATA} />;
};
