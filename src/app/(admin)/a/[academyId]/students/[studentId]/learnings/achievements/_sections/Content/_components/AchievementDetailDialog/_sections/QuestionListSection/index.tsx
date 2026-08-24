import { TableContainer } from "@/ui/components/Table/parts/TableContainer";
import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionListPagination } from "./_components/Pagination";
import { MOCK_QUESTIONS, QuestionListTable } from "./_components/Table";

export const QuestionListSection = () => {
  return (
    <div className={cn("flex w-full flex-col items-start gap-2")}>
      <div className={cn("flex items-center gap-2")}>
        <span className={cn("ods__typo__title-medium text-ods__base-500")}>
          문항 목록
        </span>

        <span
          className={cn(
            // 2. Typography
            "ods__typo__title-small",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {MOCK_QUESTIONS.length}개
        </span>
      </div>

      <TableContainer>
        <QuestionListTable />
        <QuestionListPagination />
      </TableContainer>
    </div>
  );
};
