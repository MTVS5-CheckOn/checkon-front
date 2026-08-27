import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";
import { useRouter } from "next/navigation";

export const Parents__Table = () => {
  const router = useRouter();

  const handleItemClick = (parentId: string) => {
    router.push(`./parents/${parentId}/basic-info`);
  };

  return (
    <Table>
      <TableHeader hasBorderBottom>
        <TableRow hoverable={false}>
          {TABLE_COLUMNS.map((column) => (
            <TableHeaderCell
              key={column.label}
              className={cn(
                column.width,
                "headerAlign" in column ? column.headerAlign : column.align,
              )}
            >
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {MOCK_PARENTS.map((parent, index) => (
          <TableRow
            key={`${parent.id}-${index}`}
            className={cn("cursor-pointer")}
            hasBorderBottom
            onClick={() => handleItemClick(parent.id)}
          >
            <TableCell
              className={cn(TABLE_COLUMNS[0].width, TABLE_COLUMNS[0].align)}
            >
              {parent.id}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[1].width, TABLE_COLUMNS[1].align)}
            >
              {parent.name}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[2].width, TABLE_COLUMNS[2].align)}
            >
              {parent.gender}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[3].width, TABLE_COLUMNS[3].align)}
            >
              {parent.phone}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[4].width, TABLE_COLUMNS[4].align)}
            >
              {parent.studentName}
            </TableCell>
            <TableCell
              className={cn(
                TABLE_COLUMNS[5].width,
                TABLE_COLUMNS[5].align,
                "line-clamp-1 font-medium",
              )}
            >
              {parent.memo}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TABLE_COLUMNS = [
  { label: "ID", width: "w-20", align: "items-center text-center" },
  { label: "학부모 명", width: "w-28", align: "items-center text-center" },
  { label: "성별", width: "w-20", align: "items-center text-center" },
  { label: "연락처", width: "w-36", align: "items-center text-center" },
  { label: "학생 명", width: "w-28", align: "items-center text-center" },
  {
    label: "학부모 메모",
    width: "w-full flex-1",
    align: "items-center text-start",
    headerAlign: "items-start text-start",
  },
] as const;

export const MOCK_PARENTS = [
  {
    id: "1",
    name: "김영희",
    gender: "여자",
    phone: "010-1234-5678",
    studentName: "홍길동",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
  {
    id: "2",
    name: "김영희",
    gender: "여자",
    phone: "010-1234-5678",
    studentName: "홍길동",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
  {
    id: "3",
    name: "김영희",
    gender: "여자",
    phone: "010-1234-5678",
    studentName: "홍길동",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
  {
    id: "4",
    name: "김영희",
    gender: "여자",
    phone: "010-1234-5678",
    studentName: "홍길동",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
  {
    id: "5",
    name: "김영희",
    gender: "여자",
    phone: "010-1234-5678",
    studentName: "홍길동",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
] as const;
