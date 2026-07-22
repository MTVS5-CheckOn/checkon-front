import { LogoHorizontal } from "@/ui/components/Logo/LogoHorizontal";
import { LNB__TopSection } from "./sections/TopSection";
import { LNB__MenuSection } from "./sections/MenuSection";
import Link from "next/link";

/**
 * Left Navigation Bar
 */
export const LNB = () => {
  return (
    <div className="flex w-65 shrink-0 flex-col items-start justify-start gap-5 px-3 py-2">
      <Link href="/">
        <LogoHorizontal />
      </Link>

      <div className="flex h-full w-full flex-col gap-5">
        <LNB__TopSection />
        <LNB__MenuSection />
      </div>
    </div>
  );
};
