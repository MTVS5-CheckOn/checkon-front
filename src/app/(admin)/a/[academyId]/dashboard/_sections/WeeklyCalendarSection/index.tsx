import { cn } from "@/ui/utils/tailwind/cn";
import { WeeklyCalendar } from "./components/WeeklyCalendar";

export const Dashboard__WeeklyCalendarSection = () => {
  return (
    <div className={cn("flex w-full")}>
      <WeeklyCalendar />
    </div>
  );
};
