import { Stepper } from "../Stepper";
import { StepperItemModel } from "../Stepper/StepperItem";

import { usePathname, useRouter } from "next/navigation";

const STEPS: StepperItemModel[] = [
  {
    step: 1,
    title: "대상·약점 확인",
    description: "학생 약점 진단 결과를 확인하고 보완 영역을 선택",
    link: "./step1",
  },
  {
    step: 2,
    title: "출제 조건",
    description: "난이도를 설정하고 문항 생성 요청",
    link: "./step2",
  },
  {
    step: 3,
    title: "초안 검토",
    description: "생성된 문항을 검토",
    link: "./step3",
  },
  {
    step: 4,
    title: "발행",
    description: "검토된 문항을 학생에게 발행",
    link: "./step4",
  },
];

export const QuestionStudio__HeaderSection = () => {
  const router = useRouter();
  const currentStepNumber = useCurrentStepNumber();

  const handleActivateStepNumber = (stepNumber: number) => {
    const link = STEPS.find((item) => item.step === stepNumber)?.link;
    if (!!link) {
      router.replace(link);
    }
  };

  return (
    <div className="flex w-full flex-col">
      {/* TODO: Breadcrumb 컴포넌트 추가하기 */}
      <Stepper
        steps={STEPS}
        activatedStepNumber={currentStepNumber}
        onActivateStepNumber={handleActivateStepNumber}
      />
    </div>
  );
};

const useCurrentStepNumber = () => {
  const pathname = usePathname();

  if (pathname.endsWith("step1")) {
    return 1;
  }
  if (pathname.endsWith("step2")) {
    return 2;
  }
  if (pathname.endsWith("step3")) {
    return 3;
  }
  if (pathname.endsWith("step4")) {
    return 4;
  }

  return 0;
};
