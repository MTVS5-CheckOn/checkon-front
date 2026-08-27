"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { Breadcrumb } from "@/ui/components/Breadcrumb";
import { TabsParts } from "@/ui/components/Tabs/parts";

import { PageRootContainer } from "../../_components/PageRootContainer";
import { useParentDetailTabs } from "./_hooks/useParentDetailTabs";

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
  const { activeTab, handleActiveTabChange } = useParentDetailTabs();

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
          { label: "학부모 목록", link: "./" },
          { label: "학부모 상세", link: "./1" },
          { label: "김영희" },
        ]}
      />

      <div className={cn("flex w-full flex-col items-start gap-2")}>
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start gap-2.5 px-6",
            // 4. Shadow & Border
            "border-ods__border border-b",
          )}
        >
          <TabsParts.Root
            value={activeTab}
            onValueChange={handleActiveTabChange}
          >
            <TabsParts.List>
              <TabsParts.Indicator />

              <TabsParts.Tab value="basic-info">
                <span>학부모 정보</span>
              </TabsParts.Tab>
              <TabsParts.Tab value="inquiries">
                <span>문의 관리</span>
              </TabsParts.Tab>
            </TabsParts.List>
          </TabsParts.Root>
        </div>
      </div>
    </div>
  );
};
