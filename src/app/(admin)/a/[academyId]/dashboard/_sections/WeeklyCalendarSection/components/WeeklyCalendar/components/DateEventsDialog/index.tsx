import { BaseDialog } from "@/ui/components/BaseDialog";
import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { Separator } from "@/ui/components/Separator";
import { SignalItem } from "@/ui/components/SignalListItem/SignalItem";
import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import { Suspense } from "react";
import { useDateEventsDialog } from "./hooks/useDateEventsDialog";

export type WeeklyCalendar__DateEventsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
};

export const WeeklyCalendar__DateEventsDialog = ({
  isOpen,
  onClose,
  selectedDate,
}: WeeklyCalendar__DateEventsDialogProps) => {
  const formatedSelectedDate = format(selectedDate, "M월 d일 (E)", {
    locale: ko,
  });

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle={
        <div
          className={cn(
            // 1. Layout
            "justify-start",
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {formatedSelectedDate}
        </div>
      }
      dialogContent={
        <Suspense
          fallback={
            <LoadingFallback
              className={cn("flex h-100 w-full items-center justify-center")}
            />
          }
        >
          <Content selectedDate={selectedDate} />
        </Suspense>
      }
    />
  );
};

const Content = ({ selectedDate }: { selectedDate: Date }) => {
  const { data } = useDateEventsDialog(selectedDate);

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <Separator thickness="1px" />

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-1",
          // 6. Utility
          "overflow-hidden",
        )}
      >
        <div
          className={cn(
            // 2. Typography
            "ods__typo__title-small font-semibold",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {`이벤트 (${data?.length}개)`}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 6. Utility
            "overflow-auto",
          )}
        >
          {data?.map((item, index) => {
            const isLast = index === data?.length - 1;

            return (
              <div
                key={item.title + item.caption}
                className={cn(
                  // 1. Layout
                  "flex w-full",
                  // 4. Shadow & Border
                  "border-ods__border border-b",
                  isLast && "border-b-0",
                )}
              >
                <SignalItem model={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
