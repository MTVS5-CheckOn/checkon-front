import { FieldLabel } from "@/ui/components/FieldLabel";
import { Input } from "@/ui/components/Input";
import { Selector } from "@/ui/components/Selector";
import { cn } from "@/ui/utils/tailwind/cn";
import { useFormContext } from "react-hook-form";
import { QuestionStudioPageModel } from "../../../layout";

export const QuestionStudio__QuestionCondSelect__Section = () => {
  const { watch, setValue } = useFormContext<QuestionStudioPageModel>();
  const model = watch();

  const questionCount = model.selectedTopics.reduce(
    (acc, curr) => acc + curr.questionCount,
    0,
  );

  const handleLevelChange = (level: string) => {
    setValue("level", level as "상" | "중" | "하");
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "px-6 py-5",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "grid w-full max-w-135 grid-cols-2 gap-5",
        )}
      >
        <div className={cn("flex w-full flex-col gap-1")}>
          <FieldLabel>문항 형식</FieldLabel>
          <Input defaultValue={"5지선다"} disabled />
        </div>

        <div className={cn("flex w-full flex-col gap-1")}>
          <FieldLabel>문항 수</FieldLabel>
          <Input defaultValue={questionCount.toString()} disabled />
        </div>

        <div className={cn("flex w-full flex-col gap-1")}>
          <FieldLabel required>난이도</FieldLabel>
          <Selector
            size="large"
            items={[
              {
                label: "상",
                value: "상",
              },
              {
                label: "중",
                value: "중",
              },
              {
                label: "하",
                value: "하",
              },
            ]}
            value={model.level}
            onValueChange={handleLevelChange}
          />
        </div>
      </div>
    </div>
  );
};
