"use client";

import { ReactNode } from "react";

import { Button } from "@/ui/components/Button";
import { TableParts } from "@/ui/components/Table/parts";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

export default function Page() {
  return (
    <div className={cn("flex w-full flex-col items-start gap-6 px-6")}>
      <div className={cn("flex w-full flex-col items-start gap-12")}>
        <div className={cn("flex w-full flex-col items-start gap-6")}>
          <div className={cn("flex w-full flex-col items-start gap-2")}>
            <div className={cn("flex w-full items-end justify-between")}>
              <SectionHeading size="large">기본 정보</SectionHeading>

              <Button color="red" size="small">
                삭제
              </Button>
            </div>

            <TableParts.Container>
              <Table className={cn("grid grid-cols-2")}>
                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      ID
                    </TableParts.HeaderCell>
                    <TableParts.Cell>
                      019fd78d-deb7-772c-89e1-318d374a6ddc
                    </TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      등록일시
                    </TableParts.HeaderCell>
                    <TableParts.Cell>2026-08-06 11:11:11</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      이름
                    </TableParts.HeaderCell>
                    <TableParts.Cell>홍길동</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      성별
                    </TableParts.HeaderCell>
                    <TableParts.Cell>남자</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      생년월일
                    </TableParts.HeaderCell>
                    <TableParts.Cell>2000-01-01 (26세)</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      학교명
                    </TableParts.HeaderCell>
                    <TableParts.Cell>부천 북 고등학교</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      연락처
                    </TableParts.HeaderCell>
                    <TableParts.Cell>010-1234-5678</TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      집 주소
                    </TableParts.HeaderCell>
                    <TableParts.Cell>
                      경기도 성남시 분당구 판교역로
                    </TableParts.Cell>
                  </TableRow>
                </TableParts.Body>
              </Table>
            </TableParts.Container>
          </div>

          <div className={cn("flex w-full flex-col items-start gap-2")}>
            <div className={cn("flex w-full items-end justify-between")}>
              <SectionHeading size="small">관리 정보</SectionHeading>

              <Button color="default" size="small">
                관리 정보 수정
              </Button>
            </div>

            <TableParts.Container>
              <Table className={cn("grid grid-cols-2")}>
                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      클래스
                    </TableParts.HeaderCell>
                    <TableParts.Cell className={cn("underline")}>
                      수능 국어 대비 반
                    </TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body hasBorderBottom>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      특이사항
                    </TableParts.HeaderCell>
                    <TableParts.Cell className={cn("text-ods__red-500")}>
                      최근 한 달 동안 이상 신호 2건 발생
                    </TableParts.Cell>
                  </TableRow>
                </TableParts.Body>

                <TableParts.Body className={cn("col-span-2")}>
                  <TableRow hoverable={false}>
                    <TableParts.HeaderCell className={cn("w-43")}>
                      메모
                    </TableParts.HeaderCell>
                    <TableParts.Cell>
                      학부모님이 성적에 민감하며 감정적임, 자주 오프라인 방문을
                      원함.
                    </TableParts.Cell>
                  </TableRow>
                </TableParts.Body>
              </Table>
            </TableParts.Container>
          </div>
        </div>

        <div className={cn("flex w-full flex-col items-start gap-2")}>
          <SectionHeading size="large">학부모 정보</SectionHeading>

          <TableParts.Container>
            <Table className={cn("grid grid-cols-2")}>
              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    ID
                  </TableParts.HeaderCell>
                  <TableParts.Cell>
                    019fd78d-deb7-772c-89e1-318d374a6ddc
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    등록일시
                  </TableParts.HeaderCell>
                  <TableParts.Cell>2026-08-06 11:11:11</TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    이름
                  </TableParts.HeaderCell>
                  <TableParts.Cell className={cn("underline")}>
                    김영희
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    성별
                  </TableParts.HeaderCell>
                  <TableParts.Cell>여자</TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body hasBorderBottom>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    휴대폰 번호
                  </TableParts.HeaderCell>
                  <TableParts.Cell>010-1234-5678</TableParts.Cell>
                </TableRow>
              </TableParts.Body>

              <TableParts.Body className={cn("col-span-2")}>
                <TableRow hoverable={false}>
                  <TableParts.HeaderCell className={cn("w-43")}>
                    메모
                  </TableParts.HeaderCell>
                  <TableParts.Cell>
                    성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.
                  </TableParts.Cell>
                </TableRow>
              </TableParts.Body>
            </Table>
          </TableParts.Container>
        </div>
      </div>
    </div>
  );
}

const SectionHeading = ({
  children,
  size,
}: {
  children: ReactNode;
  size: "large" | "small";
}) => {
  return (
    <div className={cn("flex items-start gap-0.5")}>
      <span
        className={cn(
          // 2. Typography
          size === "large" ? "ods__typo__label-large" : "ods__typo__body-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        {children}
      </span>
    </div>
  );
};
