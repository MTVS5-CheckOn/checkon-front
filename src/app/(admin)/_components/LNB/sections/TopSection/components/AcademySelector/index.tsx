/* eslint-disable react-hooks/exhaustive-deps */

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

import { cn } from "@/ui/utils/tailwind/cn";
import { Select } from "@base-ui/react/select";
import { Separator } from "@base-ui/react/separator";

import { useMyAcademies } from "../../hooks/useMyAcademies";

/**
 * LNB - Academy Selector
 */
export const LNB__AcademySelector = () => {
  const academies = useMyAcademies();
  const [selectedValue, setSelectedValue] = useQueryState("academyId");

  useEffect(() => {
    setSelectedValue(academies[0]?.value);
  }, [academies]);

  const handleMyAcademyClick = () => {
    console.log("handleMyAcademyClick");
    // TODO: 내 학원 관리 페이지로 이동
  };

  const handleAcademyItemClick = (v: string) => {
    setSelectedValue(v);
  };

  return (
    <Select.Root
      items={academies}
      value={selectedValue}
      onValueChange={(v) => {
        handleAcademyItemClick(v as string);
      }}
    >
      <Select.Trigger
        className={cn(
          "flex w-full justify-between px-3 py-2",
          "bg-ods__white",
          "border-ods__base-200 rounded-[8px] border",
        )}
      >
        <Select.Value
          className={cn("ods__typo__label-medium", "text-ods__base-600")}
        />

        <Select.Icon className={cn("flex items-center", "text-ods__base-400")}>
          <ChevronDownIcon className="size-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner>
          <Select.Popup
            className={cn(
              "ml-1.75 h-fit p-1",
              "bg-ods__white",
              "border-ods__base-100 rounded-[8px] border shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]",
              "ods__animate__popup-open",
            )}
            style={{
              // 셀렉터 width 동기화
              width: "var(--anchor-width)",
            }}
          >
            <Select.List className="flex flex-1 flex-col">
              <button onClick={handleMyAcademyClick}>
                <Select.Label
                  className={cn(
                    "flex gap-2 p-2",
                    "ods__typo__body-medium font-semibold",
                    "text-ods__base-600",
                    "rounded-sm",
                    "ods__animate__button-hover hover:bg-ods__base-200",
                  )}
                >
                  {/* Icon Space */}
                  <div className="size-4"></div>

                  <span>{"내 학원 관리"}</span>
                </Select.Label>
              </button>

              <Separator
                orientation="horizontal"
                className={cn("h-px", "bg-ods__base-100")}
              />

              <div className="h-1" />

              {academies.map(({ label, value }) => {
                const isSelected = selectedValue === value;

                return (
                  <button key={label}>
                    <Select.Item
                      value={value}
                      className={cn(
                        "flex gap-2 p-2",
                        "ods__typo__body-small",
                        "text-ods__base-600",
                        "rounded-sm",
                        "ods__animate__button-hover hover:bg-ods__base-200",
                        isSelected && "bg-ods__base-100",
                      )}
                    >
                      <Select.Icon className="size-4">
                        {isSelected && <CheckIcon className="size-4" />}
                      </Select.Icon>

                      <Select.ItemText>{label}</Select.ItemText>
                    </Select.Item>
                  </button>
                );
              })}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
};
