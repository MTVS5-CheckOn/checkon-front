import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionStudio__TargetStudents__Pagination } from "../Pagination";

import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableContainer } from "@/ui/components/Table/parts/TableContainer";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";

const TableHeaderModels = [
  {
    label: "번호",
    width: "w-20",
    align: "text-center",
  },
  {
    label: "학생 명",
    width: "w-30",
    align: "text-center",
  },
  {
    label: "클래스 명",
    width: "w-40",
    align: "text-start",
  },
  {
    label: "과목",
    width: "w-20",
    align: "text-center",
  },
  {
    label: "관리 일수",
    width: "w-24",
    align: "text-center",
  },
  {
    label: "특이사항",
    width: "w-full",
    align: "text-start",
  },
];

const MOCK_DATA = [
  {
    id: 1,
    name: "홍길동",
    className: "수능 국어 대비 반",
    subject: "국어",
    managementDays: 111,
    note: "최근 한 달 동안 이상 신호 2건 발생",
  },
  {
    id: 2,
    name: "홍길동",
    className: "수능 국어 대비 반",
    subject: "국어",
    managementDays: 111,
    note: "최근 한 달 동안 이상 신호 2건 발생",
  },
];

export const QuestionStudio__TargetStudents__Table = () => (
  <TableContainer>
    <Table>
      {/* Table Header */}
      <TableHeader>
        <TableRow hoverable={false}>
          {TableHeaderModels.map((model) => (
            <TableHeaderCell
              key={model.label}
              className={cn(model.width, model.align)}
            >
              {model.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>

      {/* Table Body */}
      <TableBody>
        {MOCK_DATA.map((data, index) => (
          <TableRow
            key={data.id}
            hasBorderBottom={index !== MOCK_DATA.length - 1}
          >
            {/* 번호 */}
            <TableCell
              className={cn(
                TableHeaderModels[0].width,
                TableHeaderModels[0].align,
              )}
            >
              {data.id}
            </TableCell>

            {/* 학생 명 */}
            <TableCell
              className={cn(
                TableHeaderModels[1].width,
                TableHeaderModels[1].align,
              )}
            >
              {data.name}
            </TableCell>

            {/* 클래스 명 */}
            <TableCell
              className={cn(
                TableHeaderModels[2].width,
                TableHeaderModels[2].align,
              )}
            >
              {data.className}
            </TableCell>

            {/* 과목 */}
            <TableCell
              className={cn(
                TableHeaderModels[3].width,
                TableHeaderModels[3].align,
              )}
            >
              {data.subject}
            </TableCell>

            {/* 관리 일수 */}
            <TableCell
              className={cn(
                TableHeaderModels[4].width,
                TableHeaderModels[4].align,
              )}
            >
              {data.managementDays}
            </TableCell>

            {/* 특이사항 */}
            <TableCell
              className={cn(
                TableHeaderModels[5].width,
                TableHeaderModels[5].align,
              )}
            >
              {data.note}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <QuestionStudio__TargetStudents__Pagination />
  </TableContainer>
);
