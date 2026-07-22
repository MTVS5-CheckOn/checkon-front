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
        "ods__decorate__hover",
        "rounded-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
