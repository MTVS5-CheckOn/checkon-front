import { cn } from "@/ui/utils/tailwind/cn";
import SelectorParts from "@/ui/components/Selector/Parts";
import { Select } from "@base-ui/react/select";
import { Separator } from "@base-ui/react/separator";

import { useParams, useRouter } from "next/navigation";
import { useMyAcademies } from "../../hooks/useMyAcademies";

/**
 * LNB - Academy Selector
 */
export const LNB__AcademySelector = () => {
  const { academyId } = useParams<{ academyId: string }>();
  const router = useRouter();

  const academies = useMyAcademies();

  const handleMyAcademyClick = () => {
    console.log("handleMyAcademyClick");
    // TODO: 내 학원 관리 페이지로 이동
  };

  const handleAcademyItemClick = (v: string) => {
    router.push(`/a/${v}/dashboard`);
  };

  return (
    <SelectorParts.Root
      items={academies}
      value={academyId}
      onValueChange={(v) => {
        handleAcademyItemClick(v as string);
      }}
    >
      <SelectorParts.Trigger size="medium" />

      <SelectorParts.Portal>
        <SelectorParts.Positioner>
          <SelectorParts.Popup className={cn("ml-1.75")}>
            <SelectorParts.List>
              <button onClick={handleMyAcademyClick}>
                <Select.Label
                  className={cn(
                    // 1. Layout
                    "flex gap-2 p-2",
                    // 2. Typography
                    "ods__typo__body-medium font-semibold",
                    // 3. Color
                    "text-ods__base-600",
                    // 4. Shadow & Border
                    "rounded-sm",
                    // 5. Interaction
                    "ods__animate__default hover:bg-ods__hover",
                  )}
                >
                  {/* Icon Space */}
                  <div className={cn("size-4")}></div>

                  <span>{"내 학원 관리"}</span>
                </Select.Label>
              </button>

              <Separator
                orientation="horizontal"
                className={cn("h-px", "bg-ods__base-100")}
              />

              <div className={cn("flex flex-col gap-1")}>
                {academies.map(({ label, value }) => {
                  const isSelected = academyId === value;

                  return (
                    <SelectorParts.Item
                      key={label}
                      value={value}
                      label={label}
                      isSelected={isSelected}
                    />
                  );
                })}
              </div>
            </SelectorParts.List>
          </SelectorParts.Popup>
        </SelectorParts.Positioner>
      </SelectorParts.Portal>
    </SelectorParts.Root>
  );
};
