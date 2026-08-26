import { usePathname } from "next/navigation";

import { useParentDetailNavigation } from "@/ui/routers/ParentDetailNavigation";

/**
 * 학부모 상세 페이지의 최상위 탭 식별
 */
const resolveTopLevelTab = (pathname: string) => {
  if (pathname.includes("basic-info")) {
    return "basic-info";
  }
  if (pathname.includes("labels")) {
    return "labels";
  }
  if (pathname.includes("inquiries")) {
    return "inquiries";
  }

  return "basic-info";
};

export const useParentDetailTabs = () => {
  const pathname = usePathname();
  const { push } = useParentDetailNavigation();

  const activeTab = resolveTopLevelTab(pathname);

  const handleActiveTabChange = (link: string) => {
    push(link);
  };

  return {
    activeTab,
    handleActiveTabChange,
  };
};
