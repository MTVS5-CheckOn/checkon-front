import Link from "next/link";
import { useParams } from "next/navigation";

import { LogoHorizontal } from "@/ui/components/Logo/LogoHorizontal";
import { cn } from "@/ui/utils/tailwind/cn";

import { LNB__MenuSection } from "./sections/MenuSection";
import { LNB__TopSection } from "./sections/TopSection";

/**
 * Left Navigation Bar
 */
export const LNB = () => {
  const { academyId } = useParams<{ academyId: string }>();

  return (
    <div
      className={cn(
        "flex w-60 shrink-0 flex-col items-start justify-start gap-5 px-3 py-2",
      )}
    >
      <Link href={`/a/${academyId}/dashboard`}>
        <LogoHorizontal />
      </Link>

      <div className={cn("flex h-full w-full flex-col gap-5")}>
        <LNB__TopSection />
        <LNB__MenuSection />
      </div>
    </div>
  );
};
