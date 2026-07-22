import { LayoutDashboardIcon, UsersIcon } from "lucide-react";

const items = [
  {
    icon: <LayoutDashboardIcon />,
    label: "대시보드",
  },
  {
    icon: <UsersIcon />,
    label: "학생 목록",
  },
];

/**
 * LNB - Menu Section
 */
export const LNB__MenuSection = () => {
  return (
    <div>
      {items.map((it) => (
        <div key={it.label}>
          {it.icon}
          {it.label}
        </div>
      ))}
    </div>
  );
};
