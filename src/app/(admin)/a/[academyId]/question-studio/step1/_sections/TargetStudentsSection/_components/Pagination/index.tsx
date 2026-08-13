import { Pagination } from "@/ui/components/Pagination";
import { cn } from "@/ui/utils/tailwind/cn";

import { parseAsInteger, useQueryState } from "nuqs";

export const QuestionStudio__TargetStudents__Pagination = () => {
  const [selectedPage, setSelectedPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );

  const metadata = {
    totalPageCount: 50,
  };

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-end px-4 py-3",
        // 3. Color
        "bg-white",
        // 4. Shadow & Border
        "border-ods__border border-t",
      )}
    >
      <Pagination
        page={selectedPage}
        count={metadata.totalPageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
