import { BaseDialog } from "@/ui/components/BaseDialog";
import { LoadingFallback } from "@/ui/components/LoadingFallback";
import { Separator } from "@/ui/components/Separator";
import { SignalItem } from "@/ui/components/SignalListItem/SignalItem";
import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import { Suspense } from "react";
import {
  DateEventsDialogItemModel,
  useDateEventsDialog,
} from "./hooks/useDateEventsDialog";

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

  const { data } = useDateEventsDialog(format(selectedDate, "yyyy-MM-dd"));
  const items = data;

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      className="w-200"
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
          <Content items={items} />
        </Suspense>
      }
    />
  );
};

const Content = ({ items }: { items: DateEventsDialogItemModel[] }) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-6",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      <Separator />

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
          {`이벤트 (${items?.length}개)`}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-start justify-start",
            // 6. Utility
            "overflow-auto",
          )}
        >
          {items?.map((item, index) => {
            const isLast = index === items?.length - 1;

            return (
              <div
                key={item.id}
                className={cn(
                  // 1. Layout
                  "flex w-full",
                  // 4. Shadow & Border
                  "border-ods__border border-b",
                  isLast && "border-b-0",
                )}
              >
                <SignalItem
                  model={{
                    title: item.title,
                    status: item.label.status,
                    statusLabel: item.label.text,
                    caption: item.caption,
                    content: item.content,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
