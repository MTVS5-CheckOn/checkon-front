import * as React from "react";

import { SignalState } from "@/domain/signal/state";

import { StatusLabelStatus } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

const STROKE_WIDTH = 10;
const RADIUS = 40;
const CENTER = RADIUS + STROKE_WIDTH / 2;
const VIEWBOX_SIZE = RADIUS * 2 + STROKE_WIDTH;
const DISPLAY_SIZE = 100;

interface CircularProgressProps {
  value: number;
  label?: React.ReactNode;
  status?: StatusLabelStatus;
}

const getProgressStrokeColor = (status: StatusLabelStatus) => {
  switch (status) {
    case SignalState.Positive:
      return "stroke-ods__blue-300";
    case SignalState.Warning:
      return "stroke-ods__yellow-200";
    case SignalState.Danger:
      return "stroke-ods__red-400";
    default:
      return "stroke-ods__base-300";
  }
};

export const CircularProgress = ({
  value,
  label,
  status = SignalState.Default,
}: CircularProgressProps) => {
  const circumference = Math.ceil(2 * Math.PI * RADIUS);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));
  const viewBox = `0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`;

  return (
    <div className="relative">
      <svg
        className="relative"
        height={DISPLAY_SIZE}
        style={{ transform: "rotate(-90deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={DISPLAY_SIZE}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-ods__base-100")}
          cx={CENTER}
          cy={CENTER}
          fill="transparent"
          r={RADIUS}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={STROKE_WIDTH}
        />

        {/* Progress */}
        <circle
          className={cn(getProgressStrokeColor(status))}
          cx={CENTER}
          cy={CENTER}
          fill="transparent"
          r={RADIUS}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={"round"}
          strokeWidth={STROKE_WIDTH}
        />
      </svg>

      {/* Label */}
      {label != null && (
        <div
          className={cn(
            "text-md absolute inset-0 flex items-center justify-center",
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
};
