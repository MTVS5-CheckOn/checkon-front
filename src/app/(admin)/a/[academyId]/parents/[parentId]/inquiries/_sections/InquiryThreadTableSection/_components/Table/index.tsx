import { SignalState } from "@/domain/signal/state";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableBody } from "@/ui/components/Table/parts/TableBody";
import { TableCell } from "@/ui/components/Table/parts/TableCell";
import { TableHeader } from "@/ui/components/Table/parts/TableHeader";
import { TableHeaderCell } from "@/ui/components/Table/parts/TableHeaderCell";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";

import { InquiryThreadDialog } from "../../../../_components/InquiryThreadDialog";

export const ParentInquiries__Table = () => {
  const handleRowClick = () => {
    overlay.open(({ isOpen, close }) => (
      <InquiryThreadDialog isOpen={isOpen} onClose={close} />
    ));
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
        {MOCK_INQUIRY_THREADS.map((inquiry, index) => (
          <TableRow
            key={`${inquiry.id}-${index}`}
            className={cn("cursor-pointer")}
            hasBorderBottom={index < MOCK_INQUIRY_THREADS.length - 1}
            onClick={handleRowClick}
          >
            <TableCell
              className={cn(TABLE_COLUMNS[0].width, TABLE_COLUMNS[0].align)}
            >
              {inquiry.id}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[1].width, TABLE_COLUMNS[1].align)}
            >
              <StatusLabel status={inquiry.answerStatus}>
                {inquiry.answerLabel}
              </StatusLabel>
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[2].width, TABLE_COLUMNS[2].align)}
            >
              <StatusLabel status={inquiry.draftStatus}>
                {inquiry.draftLabel}
              </StatusLabel>
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[3].width, TABLE_COLUMNS[3].align)}
            >
              {inquiry.type}
            </TableCell>
            <TableCell
              className={cn(
                TABLE_COLUMNS[4].width,
                TABLE_COLUMNS[4].align,
                "font-medium",
              )}
            >
              {inquiry.content}
            </TableCell>
            <TableCell
              className={cn(TABLE_COLUMNS[5].width, TABLE_COLUMNS[5].align)}
            >
              {inquiry.occurredAt}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TABLE_COLUMNS = [
  { label: "번호", width: "w-20", align: "items-center text-center" },
  { label: "답변 상태", width: "w-28", align: "items-center text-center" },
  { label: "초안 상태", width: "w-28", align: "items-center text-center" },
  { label: "문의 유형", width: "w-28", align: "items-center text-center" },
  {
    label: "문의 내용",
    width: "w-full flex-1",
    align: "items-start text-start",
    headerAlign: "items-start text-start",
  },
  { label: "발생일시", width: "w-48", align: "items-center text-center" },
] as const;

const MOCK_INQUIRY_THREADS = [
  {
    id: "1",
    answerStatus: SignalState.Warning,
    answerLabel: "미답변 (40분)",
    draftStatus: SignalState.Positive,
    draftLabel: "준비됨",
    type: "성적",
    content:
      "여름방학 특강 시간표가 궁금합니다. 그리고 요즘 민준이 성적이 왜 이런지도 좀…",
    occurredAt: "2026-08-08 11:11:11",
  },
  {
    id: "1",
    answerStatus: SignalState.Danger,
    answerLabel: "미답변 (1일)",
    draftStatus: SignalState.Warning,
    draftLabel: "데이터 부족",
    type: "일정",
    content:
      "여름방학 특강 시간표가 궁금합니다. 그리고 요즘 민준이 성적이 왜 이런지도 좀…",
    occurredAt: "2026-08-08 11:11:11",
  },
  {
    id: "1",
    answerStatus: SignalState.Positive,
    answerLabel: "답변 완료",
    draftStatus: SignalState.Danger,
    draftLabel: "생성 실패",
    type: "상담 요청",
    content:
      "여름방학 특강 시간표가 궁금합니다. 그리고 요즘 민준이 성적이 왜 이런지도 좀…",
    occurredAt: "2026-08-08 11:11:11",
  },
  {
    id: "1",
    answerStatus: SignalState.Positive,
    answerLabel: "답변 완료",
    draftStatus: SignalState.Default,
    draftLabel: "생성 중",
    type: "기타",
    content:
      "여름방학 특강 시간표가 궁금합니다. 그리고 요즘 민준이 성적이 왜 이런지도 좀…",
    occurredAt: "2026-08-08 11:11:11",
  },
] as const;
