import { cn } from "@/ui/utils/tailwind/cn";

type Step = {
  step: number;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    step: 1,
    title: "대상·약점 확인",
    description: "학생 약점 진단 결과를 확인하고 보완 영역을 선택",
  },
  {
    step: 2,
    title: "출제 조건",
    description: "난이도를 설정하고 문항 생성 요청",
  },
  {
    step: 3,
    title: "초안 검토",
    description: "생성된 문항을 검토",
  },
  {
    step: 4,
    title: "발행",
    description: "검토된 문항을 학생에게 발행",
  },
];

type StepItemProps = {
  model: Step;
  isActive: boolean;
};

const StepItem = ({ model, isActive }: StepItemProps) => {
  const colorPalette = (() => {
    switch (isActive) {
      case true:
        return {
          bgColor: "bg-ods__blue-300",
          badgeBgColor: "bg-ods__white",
          stepNumberColor: "text-ods__blue-300",
          titleColor: "text-ods__white",
          descriptionColor: "text-ods__base-100",
        };
      case false:
        return {
          bgColor: "bg-ods__base-50",
          badgeBgColor: "bg-ods__base-200",
          stepNumberColor: "text-ods__base-500",
          titleColor: "text-ods__base-400",
          descriptionColor: "text-ods__base-400",
        };
    }
  })();

  return (
    <div
      data-active={isActive}
      className={cn(
        // 1. Layout
        "flex h-full min-h-14 w-full items-center gap-3 px-4 py-3",
        // 3. Color
        colorPalette.bgColor,
      )}
    >
      {/* Step Number */}
      <div
        className={cn(
          // 1. Layout
          "flex size-6 items-center justify-center",
          // 3. Color
          colorPalette.badgeBgColor,
          // 4. Shadow & Border
          "rounded-full",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__label-medium font-semibold",
            // 3. Color
            colorPalette.stepNumberColor,
          )}
        >
          {model.step}
        </span>
      </div>

      {/* Step Title & Description */}
      <div
        className={cn(
          // 1. Layout
          "flex flex-1 flex-col items-start gap-1",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-small font-semibold",
            // 3. Color
            colorPalette.titleColor,
          )}
        >
          {model.title}
        </span>
        <span
          className={cn(
            // 1. Layout
            "w-full",
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            colorPalette.descriptionColor,
          )}
        >
          {model.description}
        </span>
      </div>
    </div>
  );
};

export const QuestionStudio__Stepper = () => {
  const activeStep = 1;

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
      {STEPS.map((model, index) => {
        const isLast = index === STEPS.length - 1;
        const isActive = model.step === activeStep;

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
            <StepItem model={model} isActive={isActive} />
          </div>
        );
      })}
    </div>
  );
};
