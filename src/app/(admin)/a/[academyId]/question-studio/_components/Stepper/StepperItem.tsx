import { cn } from "@/ui/utils/tailwind/cn";

export type StepperItemModel = {
  step: number;
  title: string;
  description: string;
  link: string;
};

export type StepperItemProps = {
  model: StepperItemModel;
  isActive: boolean;
};

export const StepperItem = ({ model, isActive }: StepperItemProps) => {
  const styles = Styles[isActive ? "active" : "inactive"];

  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-full min-h-14 w-full items-center gap-3 px-4 py-3",
        // 3. Color
        styles.bgColor,
        // 5. Interaction
        "ods__animate__default hover:opacity-80",
      )}
    >
      {/* Step Number */}
      <div
        className={cn(
          // 1. Layout
          "flex size-6 items-center justify-center",
          // 3. Color
          styles.badgeBgColor,
          // 4. Shadow & Border
          "rounded-full",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__label-medium font-semibold",
            // 3. Color
            styles.stepNumberColor,
          )}
        >
          {model.step}
        </span>
      </div>

      {/* Step Title & Description */}
      <dl
        className={cn(
          // 1. Layout
          "flex flex-1 flex-col items-start gap-1 text-start",
        )}
      >
        <dt
          className={cn(
            // 2. Typography
            "ods__typo__title-small font-semibold",
            // 3. Color
            styles.titleColor,
          )}
        >
          {model.title}
        </dt>

        <dd
          className={cn(
            // 1. Layout
            "w-full",
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            styles.descriptionColor,
          )}
        >
          {model.description}
        </dd>
      </dl>
    </div>
  );
};

const Styles: Record<
  "active" | "inactive",
  {
    bgColor: string;
    badgeBgColor: string;
    stepNumberColor: string;
    titleColor: string;
    descriptionColor: string;
  }
> = {
  active: {
    bgColor: "bg-ods__blue-300",
    badgeBgColor: "bg-ods__white",
    stepNumberColor: "text-ods__blue-300",
    titleColor: "text-ods__white",
    descriptionColor: "text-ods__base-100",
  },
  inactive: {
    bgColor: "bg-ods__base-50",
    badgeBgColor: "bg-ods__base-200",
    stepNumberColor: "text-ods__base-500",
    titleColor: "text-ods__base-400",
    descriptionColor: "text-ods__base-400",
  },
};
