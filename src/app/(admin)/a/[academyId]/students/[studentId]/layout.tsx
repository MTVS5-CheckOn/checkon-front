"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { Breadcrumb } from "@/ui/components/Breadcrumb";
import { TabsParts } from "@/ui/components/Tabs/parts";

import { PageRootContainer } from "../../_components/PageRootContainer";
import { useStudentDetailTabs } from "./_hooks/useStudentDetailTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageRootContainer>
      <div className={cn("flex w-full flex-1 flex-col items-start gap-7")}>
        <Header />

        {children}
      </div>
    </PageRootContainer>
  );
}

const Header = () => {
  const {
    activeTab,
    activeLearningTab,
    isNestedTab,
    handleActiveTabChange,
    handleActiveLearningTabChange,
  } = useStudentDetailTabs();

  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex w-full flex-col items-start gap-5 pt-8",
        // 3. Color
        "bg-ods__white",
      )}
    >
      <Breadcrumb
        items={[
          { label: "학생 목록", link: "." },
          { label: "학생 상세", link: "./1" },
          { label: "김민준" },
        ]}
      />

      {/* Tabs */}
      <div className={cn("flex w-full flex-col items-start gap-2")}>
        {/* 최상위 탭 */}
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start gap-2.5 px-6",
            // 4. Shadow & Border
            !isNestedTab && "border-ods__border border-b",
          )}
        >
          <TabsParts.Root
            value={activeTab}
            onValueChange={handleActiveTabChange}
          >
            <TabsParts.List>
              <TabsParts.Indicator />

              <TabsParts.Tab value="basic-info">
                <span>학생 정보</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="signal">
                <span>이상 신호</span>
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

        {/* 학업 관리 하위 탭 */}
        {activeTab === "learnings" && (
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
              onValueChange={handleActiveLearningTabChange}
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
        )}
      </div>
    </div>
  );
};
