import { TableContainer } from "@/ui/components/Table/parts/TableContainer";

import { Parents__Pagination } from "./_components/Pagination";
import { Parents__Table } from "./_components/Table";

export const Parents__TableSection = () => {
  return (
    <TableContainer className="h-full">
      <Parents__Table />
      <Parents__Pagination />
    </TableContainer>
  );
};
