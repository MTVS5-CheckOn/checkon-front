import Link from "next/link";
import { cn } from "@/ui/utils/tailwind/cn";

import { GNB__RightSection } from "./sections/RightSection";
import { MenuIcon } from "lucide-react";
import { Ods__IconButton } from "@/ui/components/IconButton";
import { LogoHorizontal } from "@/ui/components/Logo/LogoHorizontal";
import { useParams } from "next/navigation";

/**
 * Global Navigation Bar
 */
export const GNB = () => {
  return (
    <div className={cn("flex h-17 w-full items-center justify-between")}>
      <div className={cn("flex w-full")}>
        <LeftSectionByResponsive />
      </div>

      <GNB__RightSection />
    </div>
  );
};

/**
 * 반응형시 노출될 좌측 섹션
 */
const LeftSectionByResponsive = () => {
  const { academyId } = useParams<{ academyId: string }>();

  return (
    <div className={cn("flex w-full pl-3 xl:hidden")}>
      <Ods__IconButton
        className={cn(
          // 1. Layout
          "w-12",
          // 3. Color
          "text-ods__base-600",
        )}
      >
        <MenuIcon />
      </Ods__IconButton>

      <div className={cn("flex w-31")}>
        <Link href={`/a/${academyId}/dashboard`}>
          <LogoHorizontal />
        </Link>
      </div>
    </div>
  );
};
