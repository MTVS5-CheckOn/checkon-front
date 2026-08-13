import { cn } from "@/ui/utils/tailwind/cn";
import { Button } from "@/ui/components/Button";
import { SelectableQuestionCard } from "../_components/SelectableQuestionCard";

/**
 * 문항 선택 섹션
 */
export const QuestionSelectSection = () => {
  return (
    <section className={cn("flex w-full flex-col gap-3")}>
      <Header />

      <div className={cn("flex w-full flex-col gap-8")}>
        <CardList />
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
        문항 목록
      </span>

      <span
        className={cn(
          // 2. Typography
          "ods__typo__title-small",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        10개
      </span>
    </div>
  );
};

const CardList = () => {
  return (
    <div className={cn("flex w-full flex-col gap-6")}>
      <SelectableQuestionCard
        title={"Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?"}
        choiceProps={[
          { label: "국물 → 궁물", isSelected: true },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
        ]}
        reason={"기준 자료의 비음화 탈락 항목"}
      />

      <SelectableQuestionCard
        title={"Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?"}
        choiceProps={[
          { label: "국물 → 궁물", isSelected: true },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
        ]}
        reason={"기준 자료의 비음화 탈락 항목"}
      />

      <SelectableQuestionCard
        title={"Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?"}
        choiceProps={[
          { label: "국물 → 궁물", isSelected: true },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
          { label: "국물 → 궁물", isSelected: false },
        ]}
        reason={"기준 자료의 비음화 탈락 항목"}
      />
    </div>
  );
};

const ButtonSection = () => {
  return (
    <div className={cn("flex w-full items-center gap-3")}>
      <Button size="large" className={cn("w-full")}>
        PDF 다운로드
      </Button>

      <Button size="large" color="blue" className={cn("w-full")}>
        문항 저장하기
      </Button>
    </div>
  );
};
