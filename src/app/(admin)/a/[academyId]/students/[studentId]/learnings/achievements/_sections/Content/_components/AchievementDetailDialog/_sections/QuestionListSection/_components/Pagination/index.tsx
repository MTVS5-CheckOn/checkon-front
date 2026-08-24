import { PaginationParts } from "@/ui/components/Pagination/parts";
import { cn } from "@/ui/utils/tailwind/cn";

export const QuestionListPagination = () => {
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
      <PaginationParts.Root>
        {PAGINATION_PAGES.map((page) => (
          <PaginationParts.Item key={page} isActive={page === 1}>
            {page}
          </PaginationParts.Item>
        ))}

        <PaginationParts.Ellipsis />

        <PaginationParts.Item>50</PaginationParts.Item>
        <PaginationParts.Prev disabled />
        <PaginationParts.Next />
      </PaginationParts.Root>
    </div>
  );
};

const PAGINATION_PAGES = [1, 2, 3, 4, 5] as const;
