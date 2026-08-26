"use client";

import { useParams } from "next/navigation";
import { useProtectedNavigation } from "./ProtectedNavigation";

/**
 * 학부모 상세 페이지 내 라우터
 */
export const useParentDetailNavigation = () => {
  const {
    academyId,
    push: pushAcademy,
    replace: replaceAcademy,
  } = useProtectedNavigation();

  const params = useParams();
  const parentId = params.parentId as string;

  const push = (path: string) => {
    pushAcademy(`/parents/${parentId}/${path}`);
  };

  const replace = (path: string) => {
    replaceAcademy(`/parents/${parentId}/${path}`);
  };

  return {
    academyId,
    parentId,
    push,
    replace,
  };
};
