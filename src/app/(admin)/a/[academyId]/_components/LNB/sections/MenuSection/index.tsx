import { cn } from "@/ui/utils/tailwind/cn";
import {
  BookCheckIcon,
  LayoutDashboardIcon,
  NotebookPenIcon,
  ShapesIcon,
  UsersIcon,
  UserStarIcon,
} from "lucide-react";

const items = [
  {
    icon: <LayoutDashboardIcon size={16} />,
    label: "대시보드",
  },
  {
    icon: <ShapesIcon size={16} />,
    label: "클래스 관리",
  },
  {
    icon: <UsersIcon size={16} />,
    label: "학생 관리",
  },
  {
    icon: <UserStarIcon size={16} />,
    label: "학부모 관리",
  },
  {
    icon: <NotebookPenIcon size={16} />,
    label: "문제 출제 스튜디오",
  },
  {
    icon: <BookCheckIcon size={16} />,
    label: "리포트 스튜디오",
  },
];

/**
 * LNB - Menu Section
 */
export const LNB__MenuSection = () => {
  return (
    <div className={cn("flex flex-col gap-2")}>
      {items.map((it, index) => {
        // TODO: URL 기반 매칭으로 변경하기
        const isActive = index === 0;

        return (
          <button key={it.label}>
            <MenuItem isActive={isActive} icon={it.icon} label={it.label} />
          </button>
        );
      })}
    </div>
  );
};

const MenuItem = ({
  isActive,
  icon: icon,
  label: label,
}: {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center gap-2 px-3 py-2",
        // 2. Typography
        "ods__typo__label-large font-medium",
        // 3. Color
        "text-ods__base-500",
        // 4. Shadow & Border
        "rounded-lg",
        // 5. Interaction
        "ods__animate__default hover:bg-ods__hover",
        //
        isActive && "text-ods__base-600 bg-ods__base-50",
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};
