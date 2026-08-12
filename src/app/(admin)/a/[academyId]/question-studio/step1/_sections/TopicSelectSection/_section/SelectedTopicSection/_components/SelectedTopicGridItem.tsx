import { Button } from "@/ui/components/Button";
import { FieldLabel } from "@/ui/components/FieldLabel";
import { Input } from "@/ui/components/Input";
import { Separator } from "@/ui/components/Separator";
import { cn } from "@/ui/utils/tailwind/cn";

export type SelectedTopicGridItemProps = {
  title: string;
  value: number;
  onChange: (value: number) => void;
  onRemove?: () => void;
};

export const SelectedTopicGridItem = ({
  title,
  value,
  onChange,
  onRemove,
}: SelectedTopicGridItemProps) => (
  <div
    className={cn(
      // 1. Layout
      "flex w-full flex-col items-start justify-start gap-3 px-4 py-3",
      // 3. Color
      "bg-ods__white",
      // 4. Shadow & Border
      "border-ods__border rounded-lg border",
    )}
  >
    <div className={cn("flex w-full items-end justify-between")}>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        {title}
      </span>

      <Button size="small" onClick={onRemove}>
        {"제거"}
      </Button>
    </div>

    <Separator />

    <div className={cn("flex w-full flex-col items-start justify-start gap-1")}>
      <div className={cn("flex")}>
        <FieldLabel required>문항 수</FieldLabel>
      </div>

      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  </div>
);
