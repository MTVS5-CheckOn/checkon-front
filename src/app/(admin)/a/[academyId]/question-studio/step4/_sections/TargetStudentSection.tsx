import { Button } from "@/ui/components/Button";
import { Table } from "@/ui/components/Table/parts/Table";
import { TableParts } from "@/ui/components/Table/parts";
import { TableRow } from "@/ui/components/Table/parts/TableRow";
import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { HomeWorkConfirm } from "../_components/HomeWorkConfirm";
import { QuestionStudioPageModel } from "../../layout";
import { useFormContext } from "react-hook-form";

/**
 * 과제 발행 대상 학생 섹션
 */
export const TargetStudentSection = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const targetStudentId = watch("targetStudentId");
  const targetStudentName = "김민준";
  const targetStudentClass = "수능 국어 대비 반";
  const targetStudentSpecialNote = "최근 한 달 동안 이상 신호 2건 발생";

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
                <TableParts.Cell>{targetStudentId}</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body hasBorderBottom>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  클래스
                </TableParts.HeaderCell>
                <TableParts.Cell>{targetStudentClass}</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  이름
                </TableParts.HeaderCell>
                <TableParts.Cell>{targetStudentName}</TableParts.Cell>
              </TableRow>
            </TableParts.Body>

            <TableParts.Body>
              <TableRow hoverable={false}>
                <TableParts.HeaderCell className={cn("w-43")}>
                  특이사항
                </TableParts.HeaderCell>
                <TableParts.Cell>{targetStudentSpecialNote}</TableParts.Cell>
              </TableRow>
            </TableParts.Body>
          </Table>
        </TableParts.Container>

        <ButtonSection />
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

const ButtonSection = () => {
  const { watch } = useFormContext<QuestionStudioPageModel>();
  const questionCount = watch("generatedQuestionModels").length;
  const targetStudentName = "김민준";

  const handlePublishHomework = () => {
    overlay.open(({ isOpen, close }) => (
      <HomeWorkConfirm
        isOpen={isOpen}
        onClose={close}
        studentName={targetStudentName}
        questionCount={questionCount}
        onConfirm={() => {
          // TODO: 과제 발행 로직
        }}
      />
    ));
  };

  return (
    <div className={cn("flex w-full items-center gap-3")}>
      <Button
        size="large"
        color="blue"
        className={cn("w-full")}
        onClick={handlePublishHomework}
      >
        과제로 발행
      </Button>
    </div>
  );
};
