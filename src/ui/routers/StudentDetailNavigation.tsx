"use client";

import { useParams } from "next/navigation";
import { useProtectedNavigation } from "./ProtectedNavigation";

/**
 * 학생 상세 페이지 내 라우터
 */
export const useStudentDetailNavigation = () => {
  const {
    academyId,
    push: pushAcademy,
    replace: replaceAcademy,
  } = useProtectedNavigation();

  const params = useParams();
  const studentId = params.studentId as string;

  const push = (path: string) => {
    pushAcademy(`/students/${studentId}/${path}`);
  };

  const replace = (path: string) => {
    replaceAcademy(`/students/${studentId}/${path}`);
  };

  return {
    academyId,
    studentId,
    push,
    replace,
  };
};
