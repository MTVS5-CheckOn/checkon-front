import { SignalState } from "@/domain/signal/state";
import { Checkbox } from "@/ui/components/Checkbox";
import { PaginationParts } from "@/ui/components/Pagination/parts";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableContainer } from "@/ui/components/Table/parts/TableContainer";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { ReportViewerDialog } from "../../_components/ReportViewerDialog";

type ReportStatusLabel = {
  label: string;
  status: SignalState;
};

type ReportRow = {
  id: string;
  number: number;
  studentName: string;
  parentName: string;
  achievementEvaluation: ReportStatusLabel;
  publishType: string;
  reportStatus: ReportStatusLabel;
  learningPeriod: string;
  isSelected: boolean;
};

const TABLE_COLUMNS = [
  { label: "선택", width: "w-20", align: "items-center" },
  { label: "번호", width: "w-20", align: "items-center" },
  { label: "학생명", width: "w-28", align: "items-center" },
  { label: "학부모명", width: "w-28", align: "items-center" },
  {
    label: "학생 성취도 평가",
    width: "w-36",
    align: "items-center",
  },
  { label: "발행 방식", width: "w-28", align: "items-center" },
  { label: "리포트 상태", width: "w-28", align: "items-center" },
  {
    label: "학습내역 반영 기간",
    width: "flex-1",
    align: "items-center",
  },
] as const;

const MOCK_REPORTS: ReportRow[] = [
  {
    id: "1",
    number: 1,
    studentName: "홍길동",
    parentName: "김영희",
    achievementEvaluation: { label: "긍정적", status: SignalState.Positive },
    publishType: "월간",
    reportStatus: { label: "생성 완료", status: SignalState.Default },
    learningPeriod: "2026-08-01 ~ 2026-08-31",
    isSelected: true,
  },
  {
    id: "2",
    number: 1,
    studentName: "홍길동",
    parentName: "김영희",
    achievementEvaluation: { label: "부정적", status: SignalState.Danger },
    publishType: "월간",
    reportStatus: { label: "생성 실패", status: SignalState.Danger },
    learningPeriod: "2026-08-01 ~ 2026-08-31",
    isSelected: false,
  },
  {
    id: "3",
    number: 1,
    studentName: "홍길동",
    parentName: "김영희",
    achievementEvaluation: { label: "긍정적", status: SignalState.Positive },
    publishType: "월간",
    reportStatus: { label: "발송 완료", status: SignalState.Positive },
    learningPeriod: "2026-08-01 ~ 2026-08-31",
    isSelected: false,
  },
  {
    id: "4",
    number: 1,
    studentName: "홍길동",
    parentName: "김영희",
    achievementEvaluation: { label: "-", status: SignalState.Default },
    publishType: "월간",
    reportStatus: { label: "데이터 부족", status: SignalState.Warning },
    learningPeriod: "2026-08-01 ~ 2026-08-31",
    isSelected: false,
  },
  {
    id: "5",
    number: 1,
    studentName: "홍길동",
    parentName: "김영희",
    achievementEvaluation: { label: "긍정적", status: SignalState.Positive },
    publishType: "월간",
    reportStatus: { label: "생성 완료", status: SignalState.Default },
    learningPeriod: "2026-08-01 ~ 2026-08-31",
    isSelected: false,
  },
];

const PAGINATION_PAGES = [1, 2, 3, 4, 5] as const;

export const TableSection = () => {
  const handleReportClick = () => {
    overlay.open(({ isOpen, close }) => (
      <ReportViewerDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-3",
      )}
    >
      <Header />

      <TableContainer>
        <Table>
          <TableHeader hasBorderBottom>
            <TableRow hoverable={false}>
              {TABLE_COLUMNS.map((column) => (
                <TableHeaderCell
                  key={column.label}
                  className={cn(column.width, column.align)}
                >
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {MOCK_REPORTS.map((report, index) => (
              <TableRow
                key={report.id}
                className={cn("cursor-pointer")}
                hasBorderBottom={index !== MOCK_REPORTS.length - 1}
              >
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[0].width,
                    TABLE_COLUMNS[0].align,
                    "px-4 py-0",
                  )}
                >
                  <Checkbox defaultChecked={report.isSelected} />
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[1].width,
                    TABLE_COLUMNS[1].align,
                    "font-medium",
                  )}
                >
                  {report.number}
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[2].width,
                    TABLE_COLUMNS[2].align,
                    "font-medium",
                  )}
                  onClick={handleReportClick}
                >
                  {report.studentName}
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[3].width,
                    TABLE_COLUMNS[3].align,
                    "font-medium",
                  )}
                >
                  {report.parentName}
                </TableCell>
                <TableCell
                  className={cn(TABLE_COLUMNS[4].width, TABLE_COLUMNS[4].align)}
                >
                  <StatusLabel status={report.achievementEvaluation.status}>
                    {report.achievementEvaluation.label}
                  </StatusLabel>
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[5].width,
                    TABLE_COLUMNS[5].align,
                    "font-medium",
                  )}
                >
                  {report.publishType}
                </TableCell>
                <TableCell
                  className={cn(TABLE_COLUMNS[6].width, TABLE_COLUMNS[6].align)}
                >
                  <StatusLabel status={report.reportStatus.status}>
                    {report.reportStatus.label}
                  </StatusLabel>
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[7].width,
                    TABLE_COLUMNS[7].align,
                    "font-medium",
                  )}
                >
                  {report.learningPeriod}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col items-end px-4 py-3",
            // 3. Color
            "bg-white",
            // 4. Shadow & Border
            "border-ods__border border-t",
          )}
        >
          <PaginationParts.Root>
            {PAGINATION_PAGES.map((page) => (
              <PaginationParts.Item key={page} isActive={page === 1}>
                {page}
              </PaginationParts.Item>
            ))}

            <PaginationParts.Ellipsis />

            <PaginationParts.Item>50</PaginationParts.Item>
            <PaginationParts.Prev disabled />
            <PaginationParts.Next />
          </PaginationParts.Root>
        </div>
      </TableContainer>
    </section>
  );
};

const Header = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex items-center gap-2 overflow-hidden",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        리포트 목록
      </span>
      <span
        className={cn(
          // 2. Typography
          "ods__typo__label-large",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        6개
      </span>
    </div>
  );
};
