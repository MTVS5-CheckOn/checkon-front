"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { ParentInquiries__InquiryThreadTableSection } from "./_sections/InquiryThreadTableSection";
import { InquiryFrequencyChart } from "./_components/InquiryFrequencyChart";

export default function Page() {
  return (
    <div className={cn("flex w-full flex-col items-start gap-6 px-6")}>
      <div className={cn("flex w-full flex-col items-start gap-12")}>
        <div
          className={cn(
            "flex w-full flex-col items-start gap-2 overflow-hidden",
          )}
        >
          <span
            className={cn(
              // 2. Typography
              "ods__typo__label-large text-center",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            문의 발생 빈도
          </span>

          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start px-2 py-3",
              // 4. Shadow & Border
              "border-ods__border rounded-lg border",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <div className={cn("relative h-72 w-full")}>
              <InquiryFrequencyChart />
            </div>
          </div>
        </div>

        <div className={cn("flex w-full flex-col items-start gap-3")}>
          <div className={cn("flex items-center gap-2 overflow-hidden")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__label-large",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              문의 쓰레드 목록
            </span>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__body-small",
                // 3. Color
                "text-ods__base-500",
              )}
            >
              100개
            </span>
          </div>

          <ParentInquiries__InquiryThreadTableSection />
        </div>
      </div>
    </div>
  );
}
