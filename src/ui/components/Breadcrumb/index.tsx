import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { cn } from "@/ui/utils/tailwind/cn";

export type BreadcrumbItem = {
  label: string;
  link?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center gap-1 px-6",
        // 6. Utility
        "overflow-hidden",
        className,
      )}
    >
      {items.map(({ label, link }, index) => {
        const isLast = index === items.length - 1;

        const itemClassName = cn(
          // 2. Typography
          "ods__typo__body-small",
          isLast ? "font-medium" : "font-normal",
          // 3. Color
          isLast ? "text-ods__base-500" : "text-ods__base-400",
        );

        return (
          <Fragment key={`${label}-${index}`}>
            {index > 0 && (
              <ChevronRightIcon
                className={cn("size-3.5", "text-ods__base-400")}
              />
            )}

            {link ? (
              <Link href={link} className={itemClassName}>
                {label}
              </Link>
            ) : (
              <span className={itemClassName}>{label}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
