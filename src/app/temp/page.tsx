"use client";

import { cn } from "@/ui/utils/tailwind/cn";
import { overlay } from "overlay-kit";
import { ReportViewerDialog } from "../(admin)/a/[academyId]/report-studio/_components/ReportViewerDialog";

export default function Page() {
  const handleClick = () => {
    overlay.open(({ isOpen, close }) => (
      <ReportViewerDialog isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <div
      className={cn(
        // 1. Layout
        "flex w-full flex-col gap-12 overflow-hidden px-6 py-6",
      )}
    >
      <button onClick={handleClick}>a</button>
      {/* <div className="h-screen w-full overflow-auto">
        <PdfRender />
      </div> */}
    </div>
  );
}

const Temp = () => {
  return (
    <div className="size-lf-stretch outline-Ods-Semantic-Token-Ods-Border inline-flex flex-col items-center justify-start gap-3 overflow-hidden rounded-tl-2xl bg-white outline outline-1 outline-offset-[-1px]">
      <div className="flex flex-1 flex-col items-start justify-start gap-7 self-stretch">
        <div className="flex flex-col items-start justify-start gap-5 self-stretch pt-6">
          <div className="size- inline-flex items-center justify-center gap-1 overflow-hidden px-6">
            <div className="text-Ods-Base-Ods-Base-400 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
              학부모 목록
            </div>
            <div className="relative size-3.5 overflow-hidden">
              <div className="outline-Ods-Base-Ods-Base-400 absolute top-[3.50px] left-[5.25px] h-1.5 w-1 outline outline-1 outline-offset-[-0.50px]" />
            </div>
            <div className="text-Ods-Base-Ods-Base-400 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
              학부모 상세
            </div>
            <div className="relative size-3.5 overflow-hidden">
              <div className="outline-Ods-Base-Ods-Base-400 absolute top-[3.50px] left-[5.25px] h-1.5 w-1 outline outline-1 outline-offset-[-0.50px]" />
            </div>
            <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
              김영희
            </div>
          </div>
          <div className="flex flex-col items-center justify-center self-stretch">
            <div className="border-Ods-Semantic-Token-Ods-Border flex w-full max-w-[1200px] flex-col items-start justify-start gap-2.5 border-b px-6">
              <div className="inline-flex items-start justify-start gap-1 self-stretch overflow-hidden rounded-tl-lg rounded-tr-lg bg-white">
                <div
                  data-active="True"
                  className="size- bg-Ods-Base-Ods-Base-50 inline-flex min-w-24 flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg px-3 pt-2"
                >
                  <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-semibold tracking-tight">
                    학부모 정보
                  </div>
                  <div className="outline-Ods-Blue-Ods-Blue-400 h-0 self-stretch opacity-60 outline outline-2"></div>
                </div>
                <div
                  data-active="False"
                  className="size- inline-flex min-w-24 flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg px-3 pt-2"
                >
                  <div className="text-Ods-Base-Ods-Base-400 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                    라벨 관리
                  </div>
                  <div className="h-0 self-stretch"></div>
                </div>
                <div
                  data-active="False"
                  className="size- inline-flex min-w-24 flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg px-3 pt-2"
                >
                  <div className="text-Ods-Base-Ods-Base-400 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                    문의 관리
                  </div>
                  <div className="h-0 self-stretch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 self-stretch px-6">
          <div className="flex flex-col items-start justify-start gap-12 self-stretch">
            <div className="flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex items-end justify-between self-stretch">
                <div
                  data-required="false"
                  className="size- flex items-start justify-start gap-0.5"
                >
                  <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-base leading-6 font-normal tracking-tight">
                    기본 정보
                  </div>
                </div>
                <div className="size- flex items-center justify-center gap-2 overflow-hidden rounded-lg">
                  <div
                    data-color="Red"
                    data-size="Small"
                    data-state="Default"
                    className="bg-Ods-Red-Ods-Red-100 inline-flex h-8 flex-col items-center justify-center overflow-hidden rounded-lg px-3"
                  >
                    <div className="text-Ods-Red-Ods-Red-400 justify-start font-['Pretendard'] text-sm leading-5 font-semibold tracking-tight">
                      삭제
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-Ods-Semantic-Token-Ods-Border flex flex-col items-start justify-start self-stretch overflow-hidden rounded-lg outline outline-1 outline-offset-[-1px]">
                <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        ID
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                        019fd78d-deb7-772c-89e1-318d374a6ddc
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        등록일시
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                        2026-08-06 11:11:11
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        이름
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight underline">
                        김영희
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        성별
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                        여자
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        휴대폰 번호
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                        010-1234-5678
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start justify-start self-stretch">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center self-stretch overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                        메모
                      </div>
                    </div>
                    <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                      <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                        성적에 민감함. 일주일에 한 번은 연락해야 문제 안 생김.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 self-stretch">
              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                <div className="inline-flex items-end justify-between self-stretch">
                  <div
                    data-required="false"
                    className="size- flex items-start justify-start gap-0.5"
                  >
                    <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-base leading-6 font-normal tracking-tight">
                      학생 정보
                    </div>
                  </div>
                </div>
                <div className="outline-Ods-Semantic-Token-Ods-Border flex flex-col items-start justify-start self-stretch overflow-hidden rounded-lg outline outline-1 outline-offset-[-1px]">
                  <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          ID
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          019fd78d-deb7-772c-89e1-318d374a6ddc
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          등록일시
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          2026-08-06 11:11:11
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          이름
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          홍길동
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          성별
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          남자
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          생년월일
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          2000-01-01 (26세)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          학교명
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          부천 북 고등학교
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-start self-stretch">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          연락처
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          010-1234-5678
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          집 주소
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          경기도 성남시 분당구 판교역로
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                <div className="inline-flex items-end justify-between self-stretch">
                  <div
                    data-required="false"
                    className="size- flex items-start justify-start gap-0.5"
                  >
                    <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                      학생 관리 정보
                    </div>
                  </div>
                  <div
                    data-color="Default"
                    data-size="Small"
                    data-state="Default"
                    className="bg-Ods-Base-Ods-Base-50 inline-flex h-8 flex-col items-center justify-center overflow-hidden rounded-lg px-3"
                  >
                    <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-semibold tracking-tight">
                      관리 정보 수정
                    </div>
                  </div>
                </div>
                <div className="outline-Ods-Semantic-Token-Ods-Border flex flex-col items-start justify-start self-stretch overflow-hidden rounded-lg outline outline-1 outline-offset-[-1px]">
                  <div className="border-Ods-Semantic-Token-Ods-Border inline-flex items-start justify-start self-stretch border-b">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          클래스
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight underline">
                          수능 국어 대비 반
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          특이사항
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Red-Ods-Red-500 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          최근 한 달 동안 이상 신호 2건 발생
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-start self-stretch">
                    <div className="flex flex-1 items-start justify-start">
                      <div className="bg-Ods-Base-Ods-Base-50 inline-flex w-44 flex-col items-start justify-center self-stretch overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-500 justify-start font-['Pretendard'] text-sm leading-5 font-normal tracking-tight">
                          메모
                        </div>
                      </div>
                      <div className="inline-flex flex-1 flex-col items-start justify-center overflow-hidden p-4">
                        <div className="text-Ods-Base-Ods-Base-600 justify-start font-['Pretendard'] text-sm leading-5 font-medium tracking-tight">
                          학부모님이 성적에 민감하며 감정적임, 자주 오프라인
                          방문을 원함.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
