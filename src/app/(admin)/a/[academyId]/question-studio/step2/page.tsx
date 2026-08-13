"use client";

import Link from "next/link";

import { Button } from "@/ui/components/Button";
import { FieldLabel } from "@/ui/components/FieldLabel";
import { Input } from "@/ui/components/Input";
import { cn } from "@/ui/utils/tailwind/cn";

import { Selector } from "@/ui/components/Selector";

export default function Page() {
  return (
    <div className={cn("flex w-full flex-col gap-8")}>
      <div className={cn("flex w-full flex-col gap-3")}>
        <div className={cn("flex w-full flex-col gap-2")}>
          {/* Header Section */}
          <div className={cn("flex flex-col items-start")}>
            <span
              className={cn(
                // 2. Typography
                "ods__typo__title-medium font-medium",
                // 3. Color
                "text-ods__base-600",
              )}
            >
              출제 조건 설정
            </span>

            <span
              className={cn(
                // 2. Typography
                "ods__typo__body-medium",
                // 3. Color
                "text-ods__base-400",
              )}
            >
              난이도를 설정하고 생성을 요청합니다.
            </span>
          </div>
        </div>

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
              <Input defaultValue={"7"} disabled />
            </div>

            <div className={cn("flex w-full flex-col gap-1")}>
              <FieldLabel required>난이도</FieldLabel>
              <Selector
                size="large"
                items={[
                  {
                    label: "하",
                    value: "하",
                  },
                  {
                    label: "중",
                    value: "중",
                  },
                  {
                    label: "상",
                    value: "상",
                  },
                ]}
                value={"하"}
                onValueChange={(v) => {
                  console.log(v);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Link href="./step3">
        <Button size="large" color="blue" className={cn("w-full")}>
          다음
        </Button>
      </Link>
    </div>
  );
}
