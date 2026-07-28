import { Ods__Avatar } from "@/ui/components/Avatar";
import { cn } from "@/ui/utils/tailwind/cn";
import Image from "next/image";

export type SignalDetailDialog__StudentInfoSectionProps = {
  studentName: string;
  studentClassTitle: string;
  studentProfileImageUrl: string;
};

export const SignalDetailDialog__StudentInfoSection = ({
  studentName,
  studentClassTitle,
  studentProfileImageUrl,
}: SignalDetailDialog__StudentInfoSectionProps) => {
  const studentNameLabel = `${studentName} 학생`;

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
    </section>
  );
};
