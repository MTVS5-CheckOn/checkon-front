import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";

import { MOCK_STUDENTS } from "../TableSection/_components/Table";
import { overlay } from "overlay-kit";
import { StudentInviteDialog } from "../../components/StudentInviteDialog";

export const Students__HeaderSection = () => {
  const handleItemClick = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentInviteDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-between",
      )}
    >
      <div className={cn("flex items-center gap-3")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__headline-small font-medium",
            // 3. Color
            "text-ods__base-600",
          )}
        >
          학생 목록
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {MOCK_STUDENTS.length}개
        </span>
      </div>

      <Button color="blue" onClick={handleItemClick}>
        학생 초대
      </Button>
    </div>
  );
};
