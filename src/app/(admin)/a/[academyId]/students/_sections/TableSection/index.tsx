import { TableContainer } from "@/ui/components/Table/parts/TableContainer";

import { Students__Pagination } from "./_components/Pagination";
import { Students__Table } from "./_components/Table";

export const Students__TableSection = () => {
  return (
    <TableContainer className="h-full">
      <Students__Table />
      <Students__Pagination />
    </TableContainer>
  );
};
