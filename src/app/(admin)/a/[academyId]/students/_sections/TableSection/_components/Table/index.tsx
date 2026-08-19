import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

export const Students__Table = () => {
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
        {MOCK_STUDENTS.map((student, index) => (
          <TableRow key={`${student.id}-${index}`} hasBorderBottom>
            <TableCell
              className={cn(TABLE_COLUMNS[0].width, TABLE_COLUMNS[0].align)}
            >
              {student.id}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[1].width, TABLE_COLUMNS[1].align)}
            >
              {student.name}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[2].width, TABLE_COLUMNS[2].align)}
            >
              {student.gender}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[3].width, TABLE_COLUMNS[3].align)}
            >
              {student.age}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[4].width, TABLE_COLUMNS[4].align)}
            >
              {student.phone}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[5].width, TABLE_COLUMNS[5].align)}
            >
              {student.parentName}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[6].width, TABLE_COLUMNS[6].align)}
            >
              {student.managementDays}
            </TableCell>
            <TableCell
              className={cn(
                TABLE_COLUMNS[7].width,
                TABLE_COLUMNS[7].align,
                "line-clamp-1 font-medium",
              )}
            >
              {student.memo}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TABLE_COLUMNS = [
  { label: "번호", width: "w-20", align: "items-center text-center" },
  { label: "학생 명", width: "w-28", align: "items-center text-center" },
  { label: "성별", width: "w-20", align: "items-center text-center" },
  { label: "나이", width: "w-20", align: "items-center text-center" },
  { label: "연락처", width: "w-36", align: "items-center text-center" },
  { label: "학부모 명", width: "w-28", align: "items-center text-center" },
  { label: "관리 일수", width: "w-24", align: "items-center text-center" },
  {
    label: "학생 메모",
    width: "w-full flex-1",
    align: "items-center text-start",
    headerAlign: "items-start text-start",
  },
] as const;

export const MOCK_STUDENTS = [
  {
    id: "1",
    name: "홍길동",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
  {
    id: "2",
    name: "홍길동",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
  {
    id: "3",
    name: "홍길동",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
  {
    id: "4",
    name: "홍길동",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
  {
    id: "5",
    name: "홍길동",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
] as const;
