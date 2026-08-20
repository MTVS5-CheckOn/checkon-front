"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { Breadcrumb } from "@/ui/components/Breadcrumb";
import { TabsParts } from "@/ui/components/Tabs/parts";

import { PageRootContainer } from "../../_components/PageRootContainer";

import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-1 flex-col items-start gap-7 py-8")}>
        <Header />

        {children}
      </div>
    </PageRootContainer>
  );
}

const Header = () => {
  const STUDENT_DETAIL_TABS = [
    { label: "학생 정보", value: "info" },
    { label: "이상신호", value: "signal" },
    { label: "학업 분석", value: "analysis" },
    { label: "케어", value: "care" },
  ] as const;

  const [activeTab, setActiveTab] = useState<string>(
    STUDENT_DETAIL_TABS[0].value,
  );

  return (
    <div className={cn("flex w-full flex-col items-start gap-5")}>
      <Breadcrumb
        items={[
          { label: "학생 목록", link: "./students" },
          { label: "학생 상세", link: "./students/1" },
          { label: "홍길동" },
        ]}
      />

      {/* Tabs */}
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start gap-2.5 px-6",
          // 4. Shadow & Border
          "border-ods__border border-b",
        )}
      >
        <TabsParts.Root value={activeTab} onValueChange={setActiveTab}>
          <TabsParts.List>
            <TabsParts.Indicator />

            {STUDENT_DETAIL_TABS.map(({ label, value }) => (
              <TabsParts.Tab key={value} value={value}>
                <span>{label}</span>
              </TabsParts.Tab>
            ))}
          </TabsParts.List>
        </TabsParts.Root>
      </div>
    </div>
  );
};
