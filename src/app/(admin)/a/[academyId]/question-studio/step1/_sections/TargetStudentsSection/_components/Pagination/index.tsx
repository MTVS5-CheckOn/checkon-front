import { Pagination } from "@/ui/components/Pagination";
import { PaginationItem } from "@/ui/components/Pagination/PaginationItem";
import { PaginationEllipsis } from "@/ui/components/Pagination/PaginationEllipsis";
import { PaginationNext } from "@/ui/components/Pagination/PaginationNext";
import { PaginationPrev } from "@/ui/components/Pagination/PaginationPrev";
import { cn } from "@/ui/utils/tailwind/cn";

const PAGINATION_PAGES = [1, 2, 3, 4, 5] as const;

export const QuestionStudio__TargetStudents__Pagination = () => (
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
    <Pagination>
      {PAGINATION_PAGES.map((page) => (
        <PaginationItem key={page} isActive={page === 1}>
          {page}
        </PaginationItem>
      ))}

      <PaginationEllipsis />

      <PaginationItem>{50}</PaginationItem>

      <PaginationPrev disabled />
      <PaginationNext />
    </Pagination>
  </div>
);
