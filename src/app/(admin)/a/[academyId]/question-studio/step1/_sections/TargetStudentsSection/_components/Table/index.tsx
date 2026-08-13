import { cn } from "@/ui/utils/tailwind/cn";

import { QuestionStudio__TargetStudents__Pagination } from "../Pagination";

import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableContainer } from "@/ui/components/Table/parts/TableContainer";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { useController, useFormContext } from "react-hook-form";
import { QuestionStudioPageModel } from "../../../../../layout";

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

export const QuestionStudio__TargetStudents__Table = () => {
  const { control } = useFormContext<QuestionStudioPageModel>();
  const { field } = useController({
    control,
    name: "targetStudentId",
  });
  const handleStudentSelect = (studentId: string) => {
    field.onChange(studentId);
  };

  return (
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
          {MOCK_DATA.map((data, index) => {
            const isSelected = data.id === field.value;
            const selectedClassName = isSelected
              ? "text-ods__base-800 font-bold"
              : "";

            return (
              <TableRow
                key={data.id}
                hasBorderBottom={index !== MOCK_DATA.length - 1}
                className={cn(
                  //
                  "cursor-pointer",
                  isSelected && "bg-ods__base-100",
                )}
                onClick={() => handleStudentSelect(data.id)}
              >
                {/* 번호 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[0].width,
                    TableHeaderModels[0].align,
                    selectedClassName,
                  )}
                >
                  {data.id}
                </TableCell>

                {/* 학생 명 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[1].width,
                    TableHeaderModels[1].align,
                    selectedClassName,
                  )}
                >
                  {data.name}
                </TableCell>

                {/* 클래스 명 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[2].width,
                    TableHeaderModels[2].align,
                    selectedClassName,
                  )}
                >
                  {data.className}
                </TableCell>

                {/* 과목 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[3].width,
                    TableHeaderModels[3].align,
                    selectedClassName,
                  )}
                >
                  {data.subject}
                </TableCell>

                {/* 관리 일수 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[4].width,
                    TableHeaderModels[4].align,
                    selectedClassName,
                  )}
                >
                  {data.managementDays}
                </TableCell>

                {/* 특이사항 */}
                <TableCell
                  className={cn(
                    TableHeaderModels[5].width,
                    TableHeaderModels[5].align,
                    selectedClassName,
                  )}
                >
                  {data.specialNote}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <QuestionStudio__TargetStudents__Pagination />
    </TableContainer>
  );
};

const MOCK_DATA = [
  {
    id: "1",
    name: "김민준",
    className: "수능 국어 대비 반",
    subject: "국어",
    managementDays: 128,
    specialNote: "비문학 지문 분석·요약에서 오답률 높음",
  },
  {
    id: "2",
    name: "이서연",
    className: "내신 국어 심화 A반",
    subject: "국어",
    managementDays: 94,
    specialNote: "문학 작품 감상·서술형에서 표현력 부족",
  },
  {
    id: "3",
    name: "박지호",
    className: "수능 국어 대비 반",
    subject: "국어",
    managementDays: 67,
    specialNote: "최근 한 달 동안 이상 신호 2건 발생",
  },
  {
    id: "4",
    name: "최유나",
    className: "고2 국어 기본반",
    subject: "국어",
    managementDays: 152,
    specialNote: "어휘·한자어 영역 반복 오답, 보충 필요",
  },
  {
    id: "5",
    name: "정하율",
    className: "내신 국어 심화 A반",
    subject: "국어",
    managementDays: 41,
    specialNote: "문법·화법 영역은 양호, 독서만 집중 보완",
  },
];
