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

export const Temp = () => {
  return (
    <div className="size-lf-stretch inline-flex justify-start items-center gap-6">
    <div className="flex-1 self-stretch rounded-xl outline outline-1 outline-offset-[-1px] outline-Ods-Semantic-Token-Ods-Border inline-flex flex-col justify-between items-start">
        <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-4">
            <div className="self-stretch px-6 pt-5 pb-4 border-b border-Ods-Semantic-Token-Ods-Border inline-flex justify-start items-center gap-2.5">
                <div className="size- inline-flex flex-col justify-start items-start">
                    <div className="justify-start text-Ods-Base-Ods-Base-600 text-xl font-semibold font-['Pretendard'] leading-7">학부모 문의 쓰레드</div>
                    <div className="justify-start text-Ods-Base-Ods-Base-400 text-sm font-normal font-['Pretendard'] leading-5 tracking-tight">메세지 오발송을 방지하기 위해 보내기 전에 확인 Alert가 발생해요.</div>
                </div>
            </div>
            <div className="self-stretch flex-1 px-6 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                    <div data-ismine="False" className="w-[530px] inline-flex flex-col justify-start items-start gap-2">
                        <div className="justify-start text-Ods-Base-Ods-Base-700 text-base font-medium font-['Pretendard'] leading-6 tracking-tight">김영희</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch px-4 py-3 bg-Ods-Base-Ods-Base-50 rounded-lg inline-flex justify-center items-center overflow-hidden">
                                    <div className="flex-1 justify-start text-Ods-Base-Ods-Base-700 text-base font-normal font-['Pretendard'] leading-6 tracking-tight">What is Lorem Ipsum?<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset&apos;s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</div>
                                </div>
                                <div className="self-stretch inline-flex justify-end items-start overflow-hidden">
                                    <div data-status="Default" className="size- px-2 py-0.5 bg-Ods-Base-Ods-Base-100 rounded-lg inline-flex flex-col justify-center items-center">
                                        <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-medium font-['Pretendard'] leading-4 tracking-tight">AI로 답변하기</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch pb-7 flex justify-end items-end gap-2.5">
                                <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-normal font-['Pretendard'] leading-4 tracking-tight">22:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-end items-start gap-2.5">
                    <div data-ismine="True" className="w-[530px] inline-flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch inline-flex justify-start items-start gap-2">
                            <div className="self-stretch flex justify-end items-end gap-2.5">
                                <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-normal font-['Pretendard'] leading-4 tracking-tight">22:00</div>
                            </div>
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch px-4 py-3 bg-Ods-Blue-Ods-Blue-50 rounded-lg inline-flex justify-center items-center overflow-hidden">
                                    <div className="flex-1 justify-start text-Ods-Base-Ods-Base-700 text-base font-normal font-['Pretendard'] leading-6 tracking-tight">What is Lorem Ipsum?<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset&apos;s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch px-6 pt-2 pb-6 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-end items-end gap-2">
                <div data-placeholder="False" data-size="Medium" data-state="Default" className="flex-1 p-3 bg-Ods-White rounded-lg outline outline-1 outline-offset-[-1px] outline-Ods-Semantic-Token-Ods-Border inline-flex flex-col justify-center items-start overflow-hidden">
                    <div className="self-stretch justify-start text-Ods-Base-Ods-Base-600 text-sm font-normal font-['Pretendard'] leading-5 tracking-tight line-clamp-4">안녕하세요 어머님, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset&apos;s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop </div>
                </div>
                <div data-color="Blue" data-size="Medium" data-state="Default" className="h-10 px-4 bg-Ods-Blue-Ods-Blue-300 rounded-lg inline-flex flex-col justify-center items-center overflow-hidden">
                    <div className="justify-start text-Ods-Blue-Ods-Blue-50 text-sm font-semibold font-['Pretendard'] leading-5 tracking-tight">보내기</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[684px] self-stretch rounded-xl outline outline-1 outline-offset-[-1px] outline-Ods-Semantic-Token-Ods-Border inline-flex flex-col justify-between items-start">
        <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-4">
            <div className="self-stretch px-6 pt-5 pb-4 border-b border-Ods-Semantic-Token-Ods-Border inline-flex justify-start items-center gap-2.5">
                <div className="size- inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="justify-start text-Ods-Base-Ods-Base-600 text-xl font-semibold font-['Pretendard'] leading-7">AI로 답변 초안 생성하기</div>
                    <div className="justify-start text-Ods-Base-Ods-Base-400 text-sm font-normal font-['Pretendard'] leading-5 tracking-tight">AI에게 답변 초안을 작성을 요청하고 복사할 수 있어요.</div>
                </div>
            </div>
            <div className="self-stretch flex-1 px-6 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="self-stretch inline-flex justify-end items-start gap-2.5">
                    <div className="w-[500px] px-4 py-3 bg-Ods-Blue-Ods-Blue-50 rounded-lg flex justify-center items-center overflow-hidden">
                        <div className="flex-1 justify-start text-Ods-Base-Ods-Base-700 text-base font-normal font-['Pretendard'] leading-6 tracking-tight">What is Lorem Ipsum?<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset&apos;s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</div>
                    </div>
                </div>
                <div className="self-stretch h-60 relative">
                    <div className="w-[634px] left-0 top-0 absolute justify-start text-Ods-Base-Ods-Base-700 text-base font-normal font-['Pretendard'] leading-6 tracking-tight">Where does it come from?<br/><br/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</div>
                </div>
            </div>
        </div>
        <div className="self-stretch px-6 pt-2 pb-6 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="size- inline-flex justify-start items-start gap-2">
                    <div data-status="Default" className="size- px-2 py-0.5 bg-Ods-Base-Ods-Base-100 rounded-lg inline-flex flex-col justify-center items-center">
                        <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-medium font-['Pretendard'] leading-4 tracking-tight">결론 먼저</div>
                    </div>
                    <div data-status="Default" className="size- px-2 py-0.5 bg-Ods-Base-Ods-Base-100 rounded-lg inline-flex flex-col justify-center items-center">
                        <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-medium font-['Pretendard'] leading-4 tracking-tight">정답률 강조</div>
                    </div>
                    <div data-status="Default" className="size- px-2 py-0.5 bg-Ods-Base-Ods-Base-100 rounded-lg inline-flex flex-col justify-center items-center">
                        <div className="justify-start text-Ods-Base-Ods-Base-500 text-xs font-medium font-['Pretendard'] leading-4 tracking-tight">상담 일정 제안</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div data-placeholder="False" data-size="Medium" data-state="Default" className="flex-1 h-10 px-3 bg-Ods-White rounded-lg outline outline-1 outline-offset-[-1px] outline-Ods-Semantic-Token-Ods-Border inline-flex flex-col justify-center items-start overflow-hidden">
                        <div className="justify-start text-Ods-Base-Ods-Base-600 text-sm font-normal font-['Pretendard'] leading-5 tracking-tight">답안 수정해줘</div>
                    </div>
                    <div data-color="Blue" data-size="Medium" data-state="Default" className="h-10 px-4 bg-Ods-Blue-Ods-Blue-300 rounded-lg inline-flex flex-col justify-center items-center overflow-hidden">
                        <div className="justify-start text-Ods-Blue-Ods-Blue-50 text-sm font-semibold font-['Pretendard'] leading-5 tracking-tight">보내기</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};
