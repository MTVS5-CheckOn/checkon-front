import { cn } from "@/ui/utils/tailwind/cn";

import { Tabs } from "@base-ui/react/tabs";
import { useQueryState } from "nuqs";

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

export const Dashboard__TabsSection = () => {
  const [activeTab, setActiveTab] = useQueryState("tab", {
    defaultValue: dashboardTabs[0].value,
  });

  return (
    <div className={cn("px-6 pt-6", "border-ods__base-100 border-b")}>
      <Tabs.Root
        value={activeTab}
        onValueChange={(v) => {
          setActiveTab(v);
        }}
      >
        <Tabs.List
          className={cn("relative flex items-start justify-start gap-1")}
        >
          <Tabs.Indicator
            className={cn(
              // 1. Layout
              "absolute bottom-0 left-[calc(var(--active-tab-left)+10px)] z-1",
              "flex h-0.5 w-[calc(var(--active-tab-width)-20px)] flex-col items-stretch justify-end",
              // 3. Color
              "bg-sky-700 opacity-60",
              // 4. Shadow & Border
              "rounded-tl-lg rounded-tr-lg",
              // 5. Interaction
              "ods__animate__default",
            )}
          />

          {dashboardTabs.map(({ label, value }) => (
            <Tabs.Tab
              key={value}
              className={cn(
                // 1. Layout
                "flex min-w-25 flex-col items-center justify-center px-2.5 py-2",
                // 2. Typography
                "ods__typo__label-large font-normal data-active:font-semibold",
                // 3. Color
                "text-ods__base-400 data-active:bg-blue-50 data-active:text-sky-700",
                // 4. Shadow & Border
                "rounded-tl-lg rounded-tr-lg",
                // 5. Interaction
                "ods__animate__default transition-colors",
              )}
              value={value}
            >
              <span>{label}</span>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
};
