import { cn } from "@/ui/utils/tailwind/cn";

export type IconButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Ods__IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "relative flex aspect-square items-center justify-center",
        "rounded-4xl",
        "ods__animate__default hover:bg-ods__hover",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
