"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SignalTrendDatum = {
  month: string;
  count: number;
};

const MOCK_SIGNAL_TREND_DATA: SignalTrendDatum[] = [
  { month: "3월", count: 0 },
  { month: "4월", count: 1 },
  { month: "5월", count: 2 },
  { month: "6월", count: 3 },
  { month: "7월", count: 2 },
  { month: "8월", count: 4 },
];

const CHART_COLORS = {
  stroke: "#b58766",
  grid: "#e8eaed",
  axis: "#9aa0a6",
  tooltipBorder: "#e8eaed",
  tooltipBg: "#ffffff",
  tooltipText: "#3c4043",
  tooltipMuted: "#9aa0a6",
} as const;

export const SignalTrendChart = () => {
  return (
    <div className={cn("relative h-full w-full")}>
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart
          data={MOCK_SIGNAL_TREND_DATA}
          margin={{ top: 8, right: 12, left: -8, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="signalTrendGradient"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={CHART_COLORS.stroke}
                stopOpacity={0.35}
              />
              <stop
                offset="100%"
                stopColor={CHART_COLORS.stroke}
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={CHART_COLORS.grid}
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            axisLine={false}
            dataKey="month"
            dy={8}
            tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
            tickLine={false}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            domain={[0, "dataMax + 1"]}
            tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
            tickLine={false}
            width={28}
          />

          <Tooltip content={<SignalTrendTooltip />} cursor={false} />

          <Area
            activeDot={{
              fill: CHART_COLORS.stroke,
              r: 4,
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
            dataKey="count"
            fill="url(#signalTrendGradient)"
            stroke={CHART_COLORS.stroke}
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const SignalTrendTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value?: number }>;
  label?: string;
}) => {
  if (!active || !payload?.length) {
    return null;
  }

  const count = payload[0]?.value ?? 0;

  return (
    <div
      className={cn(
        // 1. Layout
        "flex flex-col gap-0.5 px-3 py-2",
        // 4. Shadow & Border
        "rounded-lg border shadow-sm",
      )}
      style={{
        backgroundColor: CHART_COLORS.tooltipBg,
        borderColor: CHART_COLORS.tooltipBorder,
      }}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__caption font-medium",
        )}
        style={{ color: CHART_COLORS.tooltipMuted }}
      >
        {label}
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-small font-semibold",
        )}
        style={{ color: CHART_COLORS.tooltipText }}
      >
        이상 신호 {count}건
      </span>
    </div>
  );
};
