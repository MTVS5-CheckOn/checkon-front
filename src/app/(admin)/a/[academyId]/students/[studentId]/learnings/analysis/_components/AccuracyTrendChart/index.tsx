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

type AccuracyTrendDatum = {
  week: string;
  rate: number;
};

const MOCK_ACCURACY_TREND_DATA: AccuracyTrendDatum[] = [
  { week: "1주", rate: 62 },
  { week: "2주", rate: 64 },
  { week: "3주", rate: 68 },
  { week: "4주", rate: 67 },
  { week: "5주", rate: 70 },
  { week: "6주", rate: 72 },
  { week: "7주", rate: 73 },
  { week: "8주", rate: 74 },
];

const CHART_COLORS = {
  stroke: "#4f94e0",
  grid: "#e8eaed",
  axis: "#9aa0a6",
  tooltipBorder: "#e8eaed",
  tooltipBg: "#ffffff",
  tooltipText: "#3c4043",
  tooltipMuted: "#9aa0a6",
} as const;

export const AccuracyTrendChart = () => {
  return (
    <div className={cn("relative h-full w-full")}>
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart
          data={MOCK_ACCURACY_TREND_DATA}
          margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="accuracyTrendGradient"
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
            dataKey="week"
            dy={8}
            tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
            tickLine={false}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            domain={[0, 100]}
            tick={{ fill: CHART_COLORS.axis, fontSize: 12 }}
            tickLine={false}
            width={36}
          />

          <Tooltip content={<AccuracyTrendTooltip />} cursor={false} />

          <Area
            activeDot={{
              fill: CHART_COLORS.stroke,
              r: 4,
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
            dataKey="rate"
            fill="url(#accuracyTrendGradient)"
            stroke={CHART_COLORS.stroke}
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const AccuracyTrendTooltip = ({
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

  const rate = payload[0]?.value ?? 0;

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
        정답률 {rate}%
      </span>
    </div>
  );
};
