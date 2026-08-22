"use client";

import { useQueryState } from "nuqs";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { PageRootContainer } from "../_components/PageRootContainer";
import { Dashboard__BriefingSection } from "./_sections/BriefingSection";
import { Dashboard__TabsSection } from "./_sections/BriefingSection/_sections/TabsSection";
import { Dashboard__HomeworkSection } from "./_sections/HomeworkSection";

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

        {activeTab === "homework" && <Dashboard__HomeworkSection />}
      </PageRootContainer>
    </FormProvider>
  );
}
