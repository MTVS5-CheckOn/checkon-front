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
  const [activeTab, setActiveTab] = useState("info");
  const [activeLearningTab, setActiveLearningTab] = useState("homeworks");

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
      <div className={cn("flex w-full flex-col items-start gap-2")}>
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start gap-2.5 px-6",
          )}
        >
          <TabsParts.Root value={activeTab} onValueChange={setActiveTab}>
            <TabsParts.List>
              <TabsParts.Indicator />

              <TabsParts.Tab value="info">
                <span>학생 정보</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="signal">
                <span>이상신호</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="learnings">
                <span>학업 관리</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="care">
                <span>케어</span>
              </TabsParts.Tab>
            </TabsParts.List>
          </TabsParts.Root>
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start gap-2.5 px-6",
            // 4. Shadow & Border
            "border-ods__border border-b",
          )}
        >
          <TabsParts.Root
            value={activeLearningTab}
            onValueChange={setActiveLearningTab}
          >
            <TabsParts.List>
              <TabsParts.Indicator />

              <TabsParts.Tab value="analysis">
                <span>학업 분석</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="homeworks">
                <span>과제 관리</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="achievements">
                <span>성취도 분석</span>
              </TabsParts.Tab>
            </TabsParts.List>
          </TabsParts.Root>
        </div>
      </div>
    </div>
  );
};
