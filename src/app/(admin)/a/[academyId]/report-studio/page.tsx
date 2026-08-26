"use client";

import { Breadcrumb } from "@/ui/components/Breadcrumb";
import { cn } from "@/ui/utils/tailwind/cn";
import { PageRootContainer } from "../_components/PageRootContainer";
import { StatisticsSection } from "./_sections/Statistics";
import { TableSection } from "./_sections/Table";
import { Button } from "@/ui/components/Button";
import { overlay } from "overlay-kit";
import { ReportSendConfirm } from "./_components/ReportSendConfirm";

export default function Page() {
  const handleSendReport = () => {
    overlay.open(({ isOpen, close }) => (
      <ReportSendConfirm
        isOpen={isOpen}
        onClose={close}
        onConfirm={() => {}}
        reportCount={1}
      />
    ));
  };

  return (
    <PageRootContainer>
      <div
        className={cn(
          "sticky top-0 z-10 flex w-full flex-col items-start gap-5 pt-6 pb-5",
          // 3. Color
          "bg-ods__white",
          // 4. Shadow & Border
          "border-ods__border border-b",
        )}
      >
        <Breadcrumb
          items={[{ label: "리포트 스튜디오", link: "./report-studio" }]}
        />
      </div>

      <div className={cn("flex w-full flex-col gap-12 px-6 py-7")}>
        <StatisticsSection />
        <div
          className={cn(
            // 1. Layout
            "flex w-full flex-col gap-8",
          )}
        >
          <TableSection />

          <Button
            color="blue"
            size="large"
            className="w-full"
            onClick={handleSendReport}
          >
            1건 일괄 발송
          </Button>
        </div>
      </div>
    </PageRootContainer>
  );
}
