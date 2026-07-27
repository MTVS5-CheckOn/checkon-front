import { cn } from "@/ui/utils/tailwind/cn";

export type AlertProps = {
  variant?: "default" | "success" | "warning" | "error";
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export const Alert = ({
  variant = "default",
  icon,
  title,
  description,
}: AlertProps) => {
  const colorPalette = (() => {
    switch (variant) {
      case "default":
        return {
          bgColor: "bg-ods__base-50",
          iconColor: "text-ods__base-600",
          titleColor: "text-ods__base-700",
          descriptionColor: "text-ods__base-600",
        };
      case "success":
        return {
          bgColor: "bg-ods__blue-20",
          iconColor: "text-ods__blue-600",
          titleColor: "text-ods__blue-700",
          descriptionColor: "text-ods__blue-600",
        };
      case "warning":
        return {
          bgColor: "bg-ods__yellow-20",
          iconColor: "text-ods__bronze-600",
          titleColor: "text-ods__bronze-700",
          descriptionColor: "text-ods__bronze-600",
        };
      case "error":
        return {
          bgColor: "bg-ods__red-20",
          iconColor: "text-ods__red-600",
          titleColor: "text-ods__red-700",
          descriptionColor: "text-ods__red-600",
        };
    }
  })();

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-start gap-3 px-5 py-4",
        // 3. Color
        colorPalette.bgColor,
        // 4. Shadow & Border
        "border-ods__border rounded-lg border",
      )}
    >
      {/* Icon Wrapper */}
      <div
        className={cn(
          // 1. Layout
          "flex items-center pt-0.5",
          // 3. Color
          colorPalette.iconColor,
        )}
      >
        {icon}
      </div>

      {/* Content Container */}
      <dl
        className={cn(
          // 1. Layout
          "flex w-full flex-col gap-1",
        )}
      >
        {title && (
          <dt className={cn("flex w-full flex-col")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__title-medium font-medium",
                // 3. Color
                colorPalette.titleColor,
              )}
            >
              {title}
            </div>
          </dt>
        )}

        {description && (
          <dd className={cn("flex w-full flex-col")}>
            <div
              className={cn(
                // 2. Typography
                "ods__typo__body-medium",
                // 3. Color
                colorPalette.descriptionColor,
              )}
            >
              {description}
            </div>
          </dd>
        )}
      </dl>
    </div>
  );
};
