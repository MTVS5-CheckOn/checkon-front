import { TabsParts } from "@/ui/components/Tabs/parts";
import { cn } from "@/ui/utils/tailwind/cn";
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
    <div
      className={cn(
        "sticky top-0 z-10 flex w-full items-center justify-center",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border border-b",
      )}
    >
      <TabsParts.Root
        className={cn(
          "max-w-ods__layout-container-max-width flex w-full px-6 pt-6",
        )}
        value={activeTab}
        onValueChange={(v) => {
          setActiveTab(v);
        }}
      >
        <TabsParts.List>
          <TabsParts.Indicator />

          {dashboardTabs.map(({ label, value }) => (
            <TabsParts.Tab key={value} value={value}>
              <span>{label}</span>
            </TabsParts.Tab>
          ))}
        </TabsParts.List>
      </TabsParts.Root>
    </div>
  );
};
