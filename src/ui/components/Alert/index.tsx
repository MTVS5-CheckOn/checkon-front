import { cn } from "@/ui/utils/tailwind/cn";
import {
  CheckCircleIcon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from "lucide-react";

export type AlertVariant = "Default" | "Positive" | "Warning" | "Danger";

export type AlertProps = {
  variant?: AlertVariant;
  /**
   * undefined인 경우, 기본 아이콘 반환
   *
   * null인 경우, 아이콘 미노출
   */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  caption?: React.ReactNode;
};

export const Alert = ({
  variant = "Default",
  icon,
  title,
  description,
  caption,
}: AlertProps) => {
  const alertIcon = (() => {
    if (!!icon) {
      return icon;
    }

    /**
     * undefined인 경우, 기본 아이콘 반환
     */
    if (icon === undefined) {
      switch (variant) {
        case "Default":
          return <InfoIcon />;
        case "Positive":
          return <CheckCircleIcon />;
        case "Warning":
          return <TriangleAlertIcon />;
        case "Danger":
          return <XCircleIcon />;
      }
    }

    /**
     * 명시적으로 null을 전달한 경우, undefined 반환
     */
    return undefined;
  })();

  const colorPalette = (() => {
    switch (variant) {
      case "Default":
        return {
          bgColor: "bg-ods__base-50",
          iconColor: "text-ods__base-600",
          titleColor: "text-ods__base-700",
          descriptionColor: "text-ods__base-600",
        };
      case "Positive":
        return {
          bgColor: "bg-ods__blue-20",
          iconColor: "text-ods__blue-600",
          titleColor: "text-ods__blue-700",
          descriptionColor: "text-ods__blue-600",
        };
      case "Warning":
        return {
          bgColor: "bg-ods__yellow-20",
          iconColor: "text-ods__bronze-600",
          titleColor: "text-ods__bronze-700",
          descriptionColor: "text-ods__bronze-600",
        };
      case "Danger":
        return {
          bgColor: "bg-ods__red-20",
          iconColor: "text-ods__red-600",
          titleColor: "text-ods__red-700",
          descriptionColor: "text-ods__red-600",
        };
    }
  })();

  console.log(variant);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex min-h-26 w-full items-start gap-3 px-5 py-4",
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
        {alertIcon}
      </div>

      {/* Content Container */}
      <dl
        className={cn(
          // 1. Layout
          "flex w-full flex-col gap-1",
        )}
      >
        {(title || caption) && (
          <dt className={cn("flex w-full items-start justify-between")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__title-medium font-medium",
                // 3. Color
                colorPalette.titleColor,
              )}
            >
              {title}
            </span>

            <span
              className={cn(
                // 2. Typography
                "ods__typo__caption",
                // 3. Color
                colorPalette.descriptionColor,
              )}
            >
              {caption}
            </span>
          </dt>
        )}

        {description && (
          <dd className={cn("flex w-full flex-col")}>
            <p
              className={cn(
                // 2. Typography
                "ods__typo__body-medium whitespace-pre-line",
                // 3. Color
                colorPalette.descriptionColor,
              )}
            >
              {description}
            </p>
          </dd>
        )}
      </dl>
    </div>
  );
};
