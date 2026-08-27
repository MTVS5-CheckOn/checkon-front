"use client";

import { useStudentDetailNavigation } from "@/ui/routers/StudentDetailNavigation";
import { useEffect } from "react";

export default function Page() {
  const { replace } = useStudentDetailNavigation();
  useEffect(() => {
    replace("learnings/analysis");
  }, [replace]);

  return <div></div>;
}
