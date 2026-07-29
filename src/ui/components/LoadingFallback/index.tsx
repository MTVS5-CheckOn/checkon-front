import { cn } from "@/ui/utils/tailwind/cn";
import { Spinner } from "../Spinner";

export const LoadingFallback = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-full w-full items-center justify-center",
        //
        className,
      )}
      {...props}
    >
      <Spinner className="size-10" />
    </div>
  );
};
