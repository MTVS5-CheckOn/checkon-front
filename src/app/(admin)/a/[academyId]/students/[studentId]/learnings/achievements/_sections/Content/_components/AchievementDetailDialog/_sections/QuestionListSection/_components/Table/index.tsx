import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

export const QuestionListTable = () => {
  return (
    <Table>
      <TableHeader hasBorderBottom>
        <TableRow hoverable={false}>
          {QUESTION_TABLE_COLUMNS.map((column) => (
            <TableHeaderCell
              key={column.label}
              className={cn(
                "shrink-0",
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
        {MOCK_QUESTIONS.map((question, index) => (
          <TableRow
            key={`${question.number}-${index}`}
            hasBorderBottom={index < MOCK_QUESTIONS.length - 1}
          >
            {QUESTION_TABLE_COLUMNS.map((column) => (
              <TableCell
                key={column.label}
                className={cn(column.width, column.align)}
              >
                <span className={cn("line-clamp-1 overflow-hidden")}>
                  {question[column.key]}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const QUESTION_TABLE_COLUMNS = [
  {
    label: "번호",
    key: "number",
    width: "w-20",
    align: "items-center text-center",
  },
  {
    label: "과제명",
    key: "homeworkName",
    width: "w-48",
    align: "items-center text-center",
  },
  {
    label: "지문",
    key: "passage",
    width: "w-full flex-1",
    align: "items-start text-start",
    headerAlign: "items-start text-start",
  },
  {
    label: "풀이시간",
    key: "solveTime",
    width: "w-25",
    align: "items-center text-center",
  },
  {
    label: "정답 여부",
    key: "isCorrect",
    width: "w-25",
    align: "items-center text-center",
  },
  {
    label: "답안 제출일시",
    key: "submittedAt",
    width: "w-48",
    align: "items-center text-center",
  },
] as const;

const MOCK_QUESTION_PASSAGE =
  "Q1. 다음 시를 읽고 물음에 답하시오. 해 질 무렵 빈 운동장을 지나 느티나무 그림자가 길어지고 나는 오래된 벤치에 앉았다. 바람은 운동장 끝에서 불어와 아무도 부르지 않은 이름을 흔들었다. 윗글의 내용과 일치하지 않는 것은?";

export const MOCK_QUESTIONS = Array.from({ length: 5 }, () => ({
  number: "1",
  homeworkName: "독서x사실적 이해 외 2영역",
  passage: MOCK_QUESTION_PASSAGE,
  solveTime: "5분 30초",
  isCorrect: "정답",
  submittedAt: "2026-08-24 00:00:00",
}));
