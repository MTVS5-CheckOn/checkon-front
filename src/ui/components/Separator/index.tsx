import { cn } from "@/ui/utils/tailwind/cn";

export const Separator = ({
  variants = "default",
  thickness = "2px",
}: {
  variants?: "default" | "dashed";
  thickness?: string;
}) => {
  return (
    <svg
      width="100%"
      height={thickness}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        minHeight: thickness,
      }}
    >
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        className={cn(
          "stroke-ods__border",
          //
          variants === "dashed" && "[stroke-dasharray:8_6]",
        )}
        style={{
          strokeWidth: thickness,
        }}
      />
    </svg>
  );
};
