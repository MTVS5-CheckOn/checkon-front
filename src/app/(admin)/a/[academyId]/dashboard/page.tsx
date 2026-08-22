"use client";

import { useQueryState } from "nuqs";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { PageRootContainer } from "../_components/PageRootContainer";
import { Dashboard__BriefingSection } from "./_sections/BriefingSection";
import { Dashboard__TabsSection } from "./_sections/BriefingSection/_sections/TabsSection";

export const DashboardPageModel = z.object({
  /**
   * 선택된 날짜
   */
  selectedDate: z.date(),
});

export default function Page() {
  const [activeTab] = useQueryState("tab", {
    defaultValue: "briefing",
  });

  const formMethods = useForm({
    resolver: zodResolver(DashboardPageModel),
    defaultValues: {
      selectedDate: new Date(),
    },
  });

  return (
    <FormProvider {...formMethods}>
      <PageRootContainer>
        <Dashboard__TabsSection />

        {activeTab === "briefing" && <Dashboard__BriefingSection />}

        {/* TODO: 통계 섹션 추가 */}
        {activeTab === "stats" && <div>통계</div>}
      </PageRootContainer>
    </FormProvider>
  );
}
