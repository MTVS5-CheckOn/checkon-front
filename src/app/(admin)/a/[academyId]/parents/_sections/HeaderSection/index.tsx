import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";

import { ParentInviteDialog } from "../../components/ParentInviteDialog";
import { MOCK_PARENTS } from "../TableSection/_components/Table";

export const Parents__HeaderSection = () => {
  const handleItemClick = () => {
    overlay.open(({ isOpen, close }) => (
      <ParentInviteDialog isOpen={isOpen} onClose={close} />
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
          학부모 목록
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {MOCK_PARENTS.length}개
        </span>
      </div>

      <Button color="blue" onClick={handleItemClick}>
        학부모 초대
      </Button>
    </div>
  );
};
