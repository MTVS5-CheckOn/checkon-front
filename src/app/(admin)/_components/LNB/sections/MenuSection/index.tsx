import { cn } from "@/ui/utils/tailwind/cn";
import {
  CalendarDaysIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

const items = [
  {
    icon: <LayoutDashboardIcon size={16} />,
    label: "대시보드",
  },
  {
    icon: <MessageSquareIcon size={16} />,
    label: "학부모 360",
  },
  {
    icon: <UsersIcon size={16} />,
    label: "학생 목록",
  },
  {
    icon: <CalendarDaysIcon size={16} />,
    label: "상담 일정",
  },
  {
    icon: <SettingsIcon size={16} />,
    label: "설정",
  },
];

/**
 * LNB - Menu Section
 */
export const LNB__MenuSection = () => {
  return (
    <div className="flex flex-col gap-2">
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
        "flex items-center gap-2 p-2",
        "rounded-[8px]",
        "ods__title-small text-ods__base-500 font-normal",
        "hover:bg-ods__base-200",
        isActive && "bg-ods__blue-container text-ods__on-blue-container",
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};
