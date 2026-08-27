"use client";

import { Selector } from "@/ui/components/Selector";
import { cn } from "@/ui/utils/tailwind/cn";
import { eachDayOfInterval, format, isToday, subDays } from "date-fns";
import { ko } from "date-fns/locale";
import { useMemo, useState } from "react";

const createDateSelectorItems = () => {
  const today = new Date();

  return eachDayOfInterval({
    start: subDays(today, 14),
    end: today,
  })
    .reverse()
    .map((date) => ({
      label: isToday(date)
        ? `${format(date, "M월 d일", { locale: ko })} (오늘)`
        : format(date, "M월 d일", { locale: ko }),
      value: format(date, "yyyy-MM-dd"),
    }));
};

export const HomeworkDateSelector = () => {
  const items = useMemo(() => createDateSelectorItems(), []);
  const [value, setValue] = useState(
    () => items[0]?.value ?? format(new Date(), "yyyy-MM-dd"),
  );

  return (
    <div className={cn("w-40")}>
      <Selector items={items} value={value} onValueChange={setValue} />
    </div>
  );
};
