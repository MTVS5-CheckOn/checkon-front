"use client";

import { cn } from "@/ui/utils/tailwind/cn";

import { Tabs } from "@base-ui/react/tabs";

const dashboardTabs = [
  {
    label: "오늘의 브리핑",
    value: "briefing",
  },
  {
    label: "통계",
    value: "stats",
  },
] as const;

function DashboardTabs() {
  return (
    <Tabs.Root
      defaultValue="briefing"
      onValueChange={(v) => {
        console.log(v);
      }}
    >
      <Tabs.List
        className={cn("relative flex items-start justify-start gap-1")}
      >
        <Tabs.Indicator
          className={cn(
            "absolute bottom-0 left-[calc(var(--active-tab-left)+10px)] z-1",
            "flex h-0.5 w-[calc(var(--active-tab-width)-20px)] flex-col items-stretch justify-end",
            "bg-sky-700 opacity-60",
            "rounded-tl-lg rounded-tr-lg",
            "ods__animate__default",
          )}
        />

        {dashboardTabs.map(({ label, value }) => (
          <Tabs.Tab
            key={value}
            className={cn(
              "flex min-w-25 flex-col items-center justify-center px-2.5 py-2",
              "ods__typo__label-large font-normal data-active:font-semibold",
              "text-ods__base-400 data-active:bg-blue-50 data-active:text-sky-700",
              "rounded-tl-lg rounded-tr-lg",
              "ods__animate__default transition-colors",
            )}
            value={value}
          >
            <span>{label}</span>
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-full flex-col",
        "bg-ods__white",
        "border-ods__base-100 rounded-tl-4xl border",
      )}
    >
      <div className={cn("border-ods__base-100 border-b px-6 pt-6")}>
        <DashboardTabs />
      </div>
    </div>
  );
}

{
  /* 
      <Tabs.Panel
        className={cn("flex-1 p-4", "ods__typo__body-small")}
        value="briefing"
      >
        <p>오늘의 브리핑 콘텐츠</p>
      </Tabs.Panel>
      <Tabs.Panel
        className={cn("flex-1 p-4", "ods__typo__body-small")}
        value="stats"
      >
        <p>통계 콘텐츠</p>
      </Tabs.Panel> */
}
