import { cn } from "@/ui/utils/tailwind/cn";
import { QuestionCard } from "../../../QuestionCard";
import { Button } from "@/ui/components/Button";

/**
 * 문항 수정 다이얼로그 - 미리보기 섹션
 */
export const PreviewSection = () => {
  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-141.5 flex-col items-start justify-start gap-6",
      )}
    >
      <QuestionCard
        readonly
        statusLabel={{
          status: "Positive",
          children: "검증 통과",
        }}
        title={"Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?"}
        choiceProps={[
          {
            label: "국물 → 궁물",
            isSelected: true,
          },
          {
            label: "국물 → 궁물",
            isSelected: false,
          },
          {
            label: "국물 → 궁물",
            isSelected: false,
          },
          {
            label: "국물 → 궁물",
            isSelected: false,
          },
          {
            label: "국물 → 궁물",
            isSelected: false,
          },
        ]}
        reason={"기준 자료의 비음화 탈락 항목"}
      />

      <Button color="blue" size="large" className={cn("w-full")}>
        수정 완료
      </Button>
    </section>
  );
};
