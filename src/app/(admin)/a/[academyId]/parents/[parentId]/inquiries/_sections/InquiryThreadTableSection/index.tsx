import { TableContainer } from "@/ui/components/Table/parts/TableContainer";

import { ParentInquiries__Pagination } from "./_components/Pagination";
import { ParentInquiries__Table } from "./_components/Table";

export const ParentInquiries__InquiryThreadTableSection = () => {
  return (
    <TableContainer className="h-full">
      <ParentInquiries__Table />
      <ParentInquiries__Pagination />
    </TableContainer>
  );
};
