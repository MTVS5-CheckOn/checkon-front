import { TableParts } from "@/ui/components/Table/parts";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";

export const BasicInfoSection = () => {
  return (
    <div className={cn("flex w-full flex-col items-start gap-2")}>
      <span className={cn("ods__typo__title-medium text-ods__base-500")}>
        기본 정보
      </span>

      <TableParts.Container>
        <Table className={cn("grid grid-cols-2")}>
          {BASIC_INFO_FIELDS.map((field, index) => (
            <TableParts.Body
              key={field.label}
              hasBorderBottom={index < BASIC_INFO_FIELDS.length - 2}
            >
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  {field.label}
                </TableParts.HeaderCell>
                <TableParts.Cell>{field.value}</TableParts.Cell>
              </TableRow>
            </TableParts.Body>
          ))}
        </Table>
      </TableParts.Container>
    </div>
  );
};

const BASIC_INFO_FIELDS = [
  { label: "영역", value: "사실적 이해" },
  { label: "난이도", value: "하" },
  { label: "유형 성취도", value: "우수" },
  { label: "정답률", value: "98%" },
  { label: "평균 풀이시간", value: "5분 30초" },
  { label: "분석 기간", value: "2026-08-24 ~ 2026-08-30 (7일)" },
  { label: "총 문항 수", value: "100개" },
  { label: "정답 / 오답", value: "80개 / 20개" },
] as const;
