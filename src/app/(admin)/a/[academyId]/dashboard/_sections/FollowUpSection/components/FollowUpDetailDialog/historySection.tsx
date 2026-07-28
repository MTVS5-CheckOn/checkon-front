import { Alert } from "@/ui/components/Alert";
import { CardMoreBottomButton } from "@/ui/components/CardMoreBottomButton";
import { cn } from "@/ui/utils/tailwind/cn";

export const FollowUpDetailDialog__FollowUpHistorySection = () => {
  const data: {
    variant: "warning" | "default" | "danger" | "success";
    title: string;
    description: string;
    caption: string;
  }[] = [
    {
      variant: "warning",
      title: "숨은 신호",
      description:
        "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
      caption: "2026년 7월 25일 10:30 생성",
    },
    {
      variant: "default",
      title: "상담 연장",
      description:
        "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
      caption: "2026년 7월 24일 10:30 생성",
    },
    {
      variant: "danger",
      title: "위험 신호",
      description:
        "최근 2주 제출 지연 3회, '비문학(과학·기술 지문)' 정답률 베이스라인 대비 -18% 감소.\n학습 일정 재조정, 과학·기술 영역 1:1 오답 분석 클리닉을 제안합니다.",
      caption: "2026년 6월 26일 10:30 생성",
    },
  ];

  return (
    <section
      className={cn(
        // 1. Layout
        "flex w-full flex-col items-start justify-start gap-2.5",
      )}
    >
      <div
        className={cn(
          // 2. Typography
          "ods__typo__title-small font-semibold",
          // 3. Color
          "text-ods__base-500",
        )}
      >
        팔로업 히스토리
      </div>

      <div
        className={cn(
          // 1. Layout
          "flex w-full flex-col items-start justify-start gap-2.5",
        )}
      >
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col gap-2.5",
          )}
        >
          {data.map((item) => (
            <Alert
              key={item.title}
              variant={item.variant}
              title={item.title}
              description={item.description}
              caption={item.caption}
            />
          ))}
        </div>

        <div
          className={cn(
            // 1. Layout
            "flex w-full items-center justify-center",
            // 4. Shadow & Border
            "border-ods__border rounded-lg border",
          )}
          onClick={() => {
            // TODO: 해당 학생 상세 페이지로 이동.
            alert("해당 학생 상세 페이지로 이동.");
          }}
        >
          <CardMoreBottomButton />
        </div>
      </div>
    </section>
  );
};
