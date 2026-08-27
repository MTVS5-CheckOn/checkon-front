"use client";

import { SignalState } from "@/domain/signal/state";
import { Button } from "@/ui/components/Button";
import { Ods__IconButton } from "@/ui/components/IconButton";
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
import { EllipsisIcon } from "lucide-react";

type CareRecordRow = {
  id: string;
  number: number;
  category: string;
  followUpStatus: {
    status: SignalState;
    text: string;
  };
  content: string;
  caredAt: string;
};

const TABLE_COLUMNS = [
  { label: "번호", width: "w-20", align: "items-center text-center" },
  { label: "카테고리", width: "w-28", align: "items-center text-center" },
  { label: "팔로업 상태", width: "w-28", align: "items-center text-center" },
  {
    label: "내용",
    width: "w-full flex-1",
    align: "items-center text-start",
    headerAlign: "items-start text-start",
  },
  { label: "케어일시", width: "w-44", align: "items-center text-center" },
  { label: "옵션", width: "w-24", align: "items-center text-center" },
] as const;

const MOCK_CARE_RECORDS: CareRecordRow[] = [
  {
    id: "care-1",
    number: 1,
    category: "상담(대면)",
    followUpStatus: { status: SignalState.Positive, text: "완료" },
    content: "쉬는 시간에 대화 진행, 진로에 대해 고민이 많음.",
    caredAt: "2026-08-09 11:11:11",
  },
  {
    id: "care-2",
    number: 2,
    category: "학부모 연락",
    followUpStatus: { status: SignalState.Default, text: "진행중" },
    content:
      "최근 수업 중에 자주 졸고 집중하지 못하는 모습이 보임, 학부모에게서 민준이가 요즘 롤에 빠져있다는 내용 확인.",
    caredAt: "2026-08-09 11:11:11",
  },
  {
    id: "care-3",
    number: 3,
    category: "숙제 조정",
    followUpStatus: { status: SignalState.Danger, text: "만료" },
    content:
      "일반적인 고1 학생들에 비해 독해 영역 문제에 약한 모습을 확인, 숙제에 독해 비중을 더 높임.",
    caredAt: "2026-08-09 11:11:11",
  },
];

const PAGINATION_PAGES = [1, 2, 3, 4, 5] as const;

export const CareRecordTable = () => {
  const handleRegisterClick = () => {
    alert("케어 등록");
  };

  const handleOptionClick = () => {
    alert("케어 기록 옵션");
  };

  return (
    <div className={cn("flex w-full flex-col gap-3")}>
      <div className={cn("flex w-full items-end justify-between")}>
        <div className={cn("flex items-start gap-2")}>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__label-large",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            케어 기록
          </span>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__body-small",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            {MOCK_CARE_RECORDS.length}개
          </span>
        </div>

        <Button color="blue" size="small" onClick={handleRegisterClick}>
          케어 등록
        </Button>
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
            {MOCK_CARE_RECORDS.map((row) => (
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
                  className={cn(
                    TABLE_COLUMNS[1].width,
                    TABLE_COLUMNS[1].align,
                    "font-medium",
                  )}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  className={cn(TABLE_COLUMNS[2].width, TABLE_COLUMNS[2].align)}
                >
                  <StatusLabel status={row.followUpStatus.status}>
                    {row.followUpStatus.text}
                  </StatusLabel>
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[3].width,
                    TABLE_COLUMNS[3].align,
                    "line-clamp-1 font-medium",
                  )}
                >
                  {row.content}
                </TableCell>
                <TableCell
                  className={cn(
                    TABLE_COLUMNS[4].width,
                    TABLE_COLUMNS[4].align,
                    "font-medium",
                  )}
                >
                  {row.caredAt}
                </TableCell>
                <TableCell
                  className={cn(TABLE_COLUMNS[5].width, TABLE_COLUMNS[5].align)}
                >
                  <Ods__IconButton
                    className={cn(
                      // 1. Layout
                      "size-8",
                      // 4. Shadow & Border
                      "border-ods__border rounded-sm border",
                    )}
                    onClick={handleOptionClick}
                  >
                    <EllipsisIcon className={cn("text-ods__base-600 size-4")} />
                  </Ods__IconButton>
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
