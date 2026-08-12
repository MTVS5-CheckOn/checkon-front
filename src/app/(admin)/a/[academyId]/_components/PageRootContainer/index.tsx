import { cn } from "@/ui/utils/tailwind/cn";

export const PageRootContainer = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-full w-full flex-col items-center",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-tl-4xl border max-xl:rounded-none",
        // 6. Utility
        "overflow-auto",
        //
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
