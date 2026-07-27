import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/ui/utils/tailwind/cn";
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
    <Select.Root
      items={academies}
      value={academyId}
      onValueChange={(v) => {
        handleAcademyItemClick(v as string);
      }}
    >
      <Select.Trigger
        className={cn(
          // 1. Layout
          "flex w-full justify-between px-3 py-2",
          // 3. Color
          "bg-ods__white",
          // 4. Shadow & Border
          "border-ods__base-200 rounded-lg border",
        )}
      >
        <Select.Value
          className={cn("ods__typo__label-medium", "text-ods__base-600")}
        />

        <Select.Icon className={cn("flex items-center", "text-ods__base-400")}>
          <ChevronDownIcon className={cn("size-4")} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner>
          <Select.Popup
            className={cn(
              // 1. Layout
              "ml-1.75 h-fit p-1",
              // 3. Color
              "bg-ods__white",
              // 4. Shadow & Border
              "border-ods__border rounded-lg border shadow-md",
              // 5. Interaction
              "ods__animate__popup-open",
            )}
            style={{
              // 셀렉터 width 동기화
              width: "var(--anchor-width)",
            }}
          >
            <Select.List className={cn("flex flex-1 flex-col gap-1")}>
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
                    <button key={label}>
                      <Select.Item
                        value={value}
                        className={cn(
                          // 1. Layout
                          "flex gap-2 p-2",
                          // 2. Typography
                          "ods__typo__body-small",
                          // 3. Color
                          "text-ods__base-600",
                          isSelected && "bg-ods__base-100",
                          // 4. Shadow & Border
                          "rounded-sm",
                          // 5. Interaction
                          "ods__animate__default hover:bg-ods__hover",
                        )}
                      >
                        <Select.Icon className={cn("size-4")}>
                          {isSelected && <CheckIcon className={cn("size-4")} />}
                        </Select.Icon>

                        <Select.ItemText>{label}</Select.ItemText>
                      </Select.Item>
                    </button>
                  );
                })}
              </div>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
};
