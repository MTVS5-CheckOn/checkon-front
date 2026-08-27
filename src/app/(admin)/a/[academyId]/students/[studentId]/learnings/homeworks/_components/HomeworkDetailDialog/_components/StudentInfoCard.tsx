"use client";
import { TableParts } from "@/ui/components/Table/parts";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

export const StudentInfoCard = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start",
        // 3. Color
        "bg-ods__white",
        // 4. Shadow & Border
        "border-ods__border rounded-xl border",
      )}
    >
      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start gap-2",
        )}
      >
        <div className={cn("flex w-full flex-col items-start gap-4")}>
          <div
            className={cn("flex w-full items-end justify-between px-5 pt-4")}
          >
            <div className={cn("flex flex-col items-start")}>
              <span
                className={cn(
                  // 2. Typography
                  "ods__typo__title-large font-semibold",
                  // 3. Color
                  "text-ods__base-600",
                )}
              >
                학생 정보
              </span>
              <span
                className={cn(
                  // 2. Typography
                  "ods__typo__body-small",
                  // 3. Color
                  "text-ods__base-400",
                )}
              >
                문제 출제 시점의 학생 정보 스냅샷입니다.
              </span>
            </div>
          </div>

          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col",
              // 4. Shadow & Border
              "border-ods__border border-t",
            )}
          >
            <Table>
              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-44")}>
                    ID
                  </TableParts.HeaderCell>
                  <TableParts.Cell className={cn("flex-1 font-medium")}>
                    019fd78d-deb7-772c-89e1-318d374a6ddc
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-44")}>
                    이름
                  </TableParts.HeaderCell>
                  <TableParts.Cell className={cn("flex-1 font-medium")}>
                    김민준
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-44")}>
                    클래스
                  </TableParts.HeaderCell>
                  <TableParts.Cell className={cn("flex-1 font-medium")}>
                    수능 국어 대비 반
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-44")}>
                    특이사항
                  </TableParts.HeaderCell>
                  <TableParts.Cell
                    className={cn(
                      // 1. Layout
                      "flex-1",
                      // 2. Typography
                      "font-medium",
                      // 3. Color
                      "text-ods__red-500",
                    )}
                  >
                    최근 한 달 동안 이상 신호 2건 발생
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
