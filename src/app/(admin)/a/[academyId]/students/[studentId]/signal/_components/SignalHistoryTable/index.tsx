import { SignalState } from "@/domain/signal/state";
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

type SignalHistoryRow = {
  id: string;
  number: number;
  label: {
    status: SignalState;
    text: string;
  };
  description: string;
  occurredAt: string;
};

const TABLE_COLUMNS = [
  { label: "번호", width: "w-20", align: "items-center text-center" },
  { label: "라벨 타입", width: "w-28", align: "items-center text-center" },
  {
    label: "설명",
    width: "w-full flex-1",
    align: "items-start text-start",
    headerAlign: "items-start text-start",
  },
  { label: "발생일시", width: "w-48", align: "items-center text-center" },
] as const;

const MOCK_SIGNAL_HISTORY: SignalHistoryRow[] = [
  {
    id: "signal-1",
    number: 1,
    label: { status: SignalState.Warning, text: "숨은 신호" },
    description:
      "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 −18% 감소.",
    occurredAt: "2026-08-08 11:11:11",
  },
  {
    id: "signal-2",
    number: 2,
    label: { status: SignalState.Danger, text: "정답률 하락" },
    description: "문학 현대시 영역 정답률이 개인 평균 대비 -15% 감소했습니다.",
    occurredAt: "2026-07-22 09:30:00",
  },
  {
    id: "signal-3",
    number: 3,
    label: { status: SignalState.Danger, text: "학습 공백" },
    description: "최근 7일간 학습 기록이 없습니다.",
    occurredAt: "2026-07-15 14:20:00",
  },
  {
    id: "signal-4",
    number: 4,
    label: { status: SignalState.Warning, text: "유형별 취약" },
    description:
      "비문학 추론 유형 진입 후 지문당 풀이시간이 3주 연속 증가했습니다.",
    occurredAt: "2026-06-28 16:45:00",
  },
  {
    id: "signal-5",
    number: 5,
    label: { status: SignalState.Danger, text: "출석 이상" },
    description: "최근 5일 중 3일 지각이 발생했습니다.",
    occurredAt: "2026-06-10 08:05:00",
  },
];

const PAGINATION_PAGES = [1, 2, 3, 4, 5] as const;

export const SignalHistoryTable = () => {
  return (
    <div className={cn("flex w-full flex-col gap-3")}>
      <div className={cn("flex items-center gap-2 overflow-hidden")}>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__label-large",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          이상 신호 내역
        </span>
        <span
          className={cn(
            // 2. Typography
            "ods__typo__body-small",
            // 3. Color
            "text-ods__base-500",
          )}
        >
          {MOCK_SIGNAL_HISTORY.length}개
        </span>
      </div>

      <TableContainer>
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
            {MOCK_SIGNAL_HISTORY.map((row) => (
              <TableRow key={row.id} hasBorderBottom hoverable={false}>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[0].width,
                    TABLE_COLUMNS[0].align,
                    "font-medium",
                  )}
                >
                  {row.number}
                </TableCell>
                <TableCell
                  className={cn(TABLE_COLUMNS[1].width, TABLE_COLUMNS[1].align)}
                >
                  <StatusLabel status={row.label.status}>
                    {row.label.text}
                  </StatusLabel>
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[2].width,
                    TABLE_COLUMNS[2].align,
                    "font-medium",
                  )}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[3].width,
                    TABLE_COLUMNS[3].align,
                    "font-medium",
                  )}
                >
                  {row.occurredAt}
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
    </div>
  );
};
