import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableParts } from "@/ui/components/Table/parts";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

/**
 * 과제 발행 대상 학생 섹션
 */
export const TargetStudentSection = () => {
  return (
    <section className={cn("flex w-full flex-col gap-3")}>
      <Header />

      <div className={cn("flex w-full flex-col gap-6")}>
        <TableParts.Container>
          <Table className={cn("grid grid-cols-2")}>
            <TableParts.Body hasBorderBottom>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  ID
                </TableParts.HeaderCell>
                <TableParts.Cell>asd</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body hasBorderBottom>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  클래스
                </TableParts.HeaderCell>
                <TableParts.Cell>asd</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  이름
                </TableParts.HeaderCell>
                <TableParts.Cell>asd</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  특이사항
                </TableParts.HeaderCell>
                <TableParts.Cell>asd</TableParts.Cell>
              </TableRow>
            </TableParts.Body>
          </Table>
        </TableParts.Container>

        <Button size="large" color="blue" className={cn("w-full")}>
          과제로 발행
        </Button>
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full items-center justify-start gap-2.5",
      )}
    >
      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-medium font-medium",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        대상 학생
      </span>
    </div>
  );
};
