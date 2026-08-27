import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";
import { useRouter } from "next/navigation";

export const Students__Table = () => {
  const router = useRouter();

  const handleItemClick = (studentId: string) => {
    router.push(`./students/${studentId}/basic-info`);
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
        {MOCK_STUDENTS.map((student, index) => (
          <TableRow
            key={`${student.id}-${index}`}
            className={cn("cursor-pointer")}
            hasBorderBottom
            onClick={() => handleItemClick(student.id)}
          >
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
    name: "김민준",
    gender: "남자",
    age: "17",
    phone: "010-1234-5678",
    parentName: "김영희",
    managementDays: "111",
    memo: "학부모님이 성적에 민감하며, 감정적임. 자주 오프라인 방문을 원함",
  },
  {
    id: "2",
    name: "이서연",
    gender: "여자",
    age: "16",
    phone: "010-2345-6789",
    parentName: "이정숙",
    managementDays: "87",
    memo: "내신 대비에 집중. 주 1회 학습 피드백 요청",
  },
  {
    id: "3",
    name: "박지호",
    gender: "남자",
    age: "18",
    phone: "010-3456-7890",
    parentName: "박미경",
    managementDays: "203",
    memo: "수능 국어 약점 보완 중. 야간 자습 참여율 높음",
  },
  {
    id: "4",
    name: "최유나",
    gender: "여자",
    age: "17",
    phone: "010-4567-8901",
    parentName: "최은정",
    managementDays: "54",
    memo: "최근 정답률 하락. 상담 일정 조율 필요",
  },
  {
    id: "5",
    name: "정하율",
    gender: "여자",
    age: "16",
    phone: "010-5678-9012",
    parentName: "정소영",
    managementDays: "142",
    memo: "독해 속도는 빠르나 추론 문항에서 실수 잦음",
  },
  {
    id: "6",
    name: "박서연",
    gender: "여자",
    age: "17",
    phone: "010-6789-0123",
    parentName: "박현주",
    managementDays: "98",
    memo: "과제 미제출이 늘어남. 학부모 연락 권장",
  },
  {
    id: "7",
    name: "송지아",
    gender: "여자",
    age: "18",
    phone: "010-7890-1234",
    parentName: "송미라",
    managementDays: "176",
    memo: "문학 영역 강점. 비문학 지문 훈련 필요",
  },
  {
    id: "8",
    name: "한예린",
    gender: "여자",
    age: "16",
    phone: "010-8901-2345",
    parentName: "한지영",
    managementDays: "31",
    memo: "신규 등록. 기초 문법부터 점검 중",
  },
  {
    id: "9",
    name: "정도현",
    gender: "남자",
    age: "17",
    phone: "010-9012-3456",
    parentName: "정민호",
    managementDays: "65",
    memo: "집중력 기복이 큼. 짧은 세트 과제에 잘 반응",
  },
  {
    id: "10",
    name: "윤서준",
    gender: "남자",
    age: "18",
    phone: "010-1122-3344",
    parentName: "윤혜진",
    managementDays: "220",
    memo: "모의고사 성적 안정권. 실전 시간 배분 연습 중",
  },
] as const;
