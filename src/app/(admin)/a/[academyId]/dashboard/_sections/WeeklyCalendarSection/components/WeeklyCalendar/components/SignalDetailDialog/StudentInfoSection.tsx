import { Ods__Avatar } from "@/ui/components/Avatar";
import { cn } from "@/ui/utils/tailwind/cn";
import { format } from "date-fns";
import Image from "next/image";

export type WeeklyCalendar__SignalDetailDialog__StudentInfoSectionProps = {
  studentName: string;
  studentClassTitle: string;
  signalCreatedAt: Date;
  studentProfileImageUrl: string;
};

export const WeeklyCalendar__SignalDetailDialog__StudentInfoSection = ({
  studentName,
  studentClassTitle,
  signalCreatedAt,
  studentProfileImageUrl,
}: WeeklyCalendar__SignalDetailDialog__StudentInfoSectionProps) => {
  const studentNameLabel = `${studentName} 학생`;

  const signalCreatedAtLabel = format(
    signalCreatedAt,
    "yyyy년 MM월 dd일 HH:mm 생성",
  );

  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full items-start justify-between",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex flex-1 items-center justify-start gap-2",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex flex-col items-center justify-center p-0.5",
          )}
        >
          <Ods__Avatar
            className={cn("size-11")}
            src={studentProfileImageUrl}
            fallback={
              <Image
                src={studentProfileImageUrl}
                fill
                className={cn("object-cover")}
                alt="fallback"
              />
            }
          />
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex flex-col items-start justify-start",
          )}
        >
          {/* Student Name */}
          <div
            className={cn(
              // 2. Typography
              "ods__typo__title-large font-medium",
              // 3. Color
              "text-ods__base-700",
            )}
          >
            {studentNameLabel}
          </div>

          {/* Class Title */}
          <div
            className={cn(
              // 2. Typography
              "ods__typo__title-small",
              // 3. Color
              "text-ods__base-400",
            )}
          >
            {studentClassTitle}
          </div>
        </div>
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex flex-col items-end justify-start",
        )}
      >
        <span
          className={cn(
            // 2. Typography
            "ods__typo__caption",
            // 3. Color
            "text-ods__base-400",
          )}
        >
          {signalCreatedAtLabel}
        </span>
      </div>
    </section>
  );
};
