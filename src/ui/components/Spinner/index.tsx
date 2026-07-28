import { cn } from "@/ui/utils/tailwind/cn";
import { Loader2Icon } from "lucide-react";

export const Spinner = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <Loader2Icon
      className={cn(
        // 1. Layout
        "size-4",
        // 2. Animation
        "animate-spin",
        // 3. Color
        "text-ods__dark",
        //
        className,
      )}
      {...props}
    />
  );
};
