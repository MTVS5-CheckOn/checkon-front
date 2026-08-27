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
    studentName: "김민준",
    memo: "성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.",
  },
  {
    id: "2",
    name: "이정숙",
    gender: "여자",
    phone: "010-2345-6789",
    studentName: "이서연",
    memo: "내신 대비 피드백을 주 1회 요청함.",
  },
  {
    id: "3",
    name: "박미경",
    gender: "여자",
    phone: "010-3456-7890",
    studentName: "박지호",
    memo: "야간 자습 참여 현황을 자주 확인함.",
  },
  {
    id: "4",
    name: "최은정",
    gender: "여자",
    phone: "010-4567-8901",
    studentName: "최유나",
    memo: "최근 성적 하락으로 상담을 희망함.",
  },
  {
    id: "5",
    name: "정소영",
    gender: "여자",
    phone: "010-5678-9012",
    studentName: "정하율",
    memo: "독해 속도보다 추론 정확도를 중시함.",
  },
] as const;
