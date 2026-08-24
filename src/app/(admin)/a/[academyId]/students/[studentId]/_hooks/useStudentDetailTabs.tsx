import { usePathname } from "next/navigation";

import { useStudentDetailNavigation } from "@/ui/routers/StudentDetailNavigation";

/**
 * 학생 상세 페이지의 최상위 탭 식별
 */
const resolveTopLevelTab = (pathname: string) => {
  if (pathname.includes("basic-info")) {
    return "basic-info";
  }
  if (pathname.includes("signal")) {
    return "signal";
  }
  if (pathname.includes("learnings")) {
    return "learnings";
  }
  if (pathname.includes("care")) {
    return "care";
  }

  return "basic-info";
};

/**
 * 학생 상세 페이지의 학업 관리 탭 식별
 */
const resolveLearningTab = (pathname: string) => {
  if (pathname.includes("analysis")) {
    return "analysis";
  }
  if (pathname.includes("homeworks")) {
    return "homeworks";
  }
  if (pathname.includes("achievements")) {
    return "achievements";
  }

  return "analysis";
};

export const useStudentDetailTabs = () => {
  const pathname = usePathname();
  const { push } = useStudentDetailNavigation();

  const activeTab = resolveTopLevelTab(pathname);
  const activeLearningTab = resolveLearningTab(pathname);

  /**
   * 중첩 탭 여부
   *
   * 현재는 학업 관리 탭만 중첩 탭으로 구현되어 있음
   */
  const isNestedTab = activeTab === "learnings";

  const handleActiveTabChange = (link: string) => {
    push(link);
  };

  const handleActiveLearningTabChange = (link: string) => {
    push(`learnings/${link}`);
  };

  return {
    activeTab,
    activeLearningTab,
    isNestedTab,
    handleActiveTabChange,
    handleActiveLearningTabChange,
  };
};
