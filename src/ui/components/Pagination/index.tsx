import { usePagination } from "./hooks/usePagination";
import { PaginationParts } from "./parts";

export type PaginationProps = {
  page: number;
  count: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, count, onPageChange }: PaginationProps) => {
  const paginationItems = usePagination({
    page,
    count,
  });

  return (
    <PaginationParts.Root>
      <PaginationParts.Prev
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      />

      {paginationItems.map((item, index) => {
        if (item === "ellipsis") {
          return <PaginationParts.Ellipsis key={`ellipsis-${index}`} />;
        }

        return (
          <PaginationParts.Item
            key={item}
            isActive={item === page}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PaginationParts.Item>
        );
      })}

      <PaginationParts.Next
        disabled={page >= count}
        onClick={() => onPageChange(page + 1)}
      />
    </PaginationParts.Root>
  );
};
