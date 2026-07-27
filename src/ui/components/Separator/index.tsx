import { cn } from "@/ui/utils/tailwind/cn";

export const Separator = ({
  variants = "line",
}: {
  variants?: "line" | "dashed";
}) => {
  return (
    <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0"
        y1="2"
        x2="100%"
        y2="2"
        className={cn(
          "stroke-ods__border stroke-2",
          //
          variants === "dashed" && "[stroke-dasharray:8_6]",
        )}
      />
    </svg>
  );
};
