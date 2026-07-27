import { cn } from "@/ui/utils/tailwind/cn";
import { Avatar } from "@base-ui/react/avatar";

export type Ods__AvatarProps = {
  src?: string;
  fallback?: React.ReactNode;

  className?: string;
} & React.RefAttributes<HTMLDivElement>;

export const Ods__Avatar = ({
  src,
  fallback,
  className,
  ...props //
}: Ods__AvatarProps) => {
  return (
    <Avatar.Root
      className={cn(
        "relative size-10",
        "rounded-4xl",
        "border-ods__border border",
        "overflow-hidden",
        className,
      )}
      {...props}
    >
      <Avatar.Image src={src} className={cn("h-full w-full", "object-cover")} />
      <Avatar.Fallback>{fallback}</Avatar.Fallback>
    </Avatar.Root>
  );
};
