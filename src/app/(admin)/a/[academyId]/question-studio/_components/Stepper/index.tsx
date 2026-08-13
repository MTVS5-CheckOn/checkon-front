import { cn } from "@/ui/utils/tailwind/cn";

import { StepperItem, StepperItemModel } from "./StepperItem";

export type StepperProps = {
  steps: StepperItemModel[];
  activatedStepNumber: number;
  onActivateStepNumber: (stepNumber: number) => void;
};

export const Stepper = ({
  steps,
  activatedStepNumber,
  onActivateStepNumber,
}: StepperProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex min-h-16 w-full",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {steps.map((model, index) => {
        const isLast = index === steps.length - 1;
        const isActive = model.step === activatedStepNumber;

        return (
          <div
            key={model.step}
            className={cn(
              // 1. Layout
              "flex flex-1",
              // 4. Shadow & Border
              !isLast && "border-ods__border border-r",
            )}
          >
            <button
              className={cn(
                // 1. Layout
                "flex flex-1",
              )}
              onClick={() => onActivateStepNumber(model.step)}
            >
              <StepperItem model={model} isActive={isActive} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
