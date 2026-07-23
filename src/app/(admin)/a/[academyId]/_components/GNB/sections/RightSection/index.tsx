import { BellIcon } from "lucide-react";
import Image from "next/image";

import { Ods__Avatar } from "@/ui/components/Avatar";
import { Ods__IconButton } from "@/ui/components/IconButton";
import { cn } from "@/ui/utils/tailwind/cn";

export const GNB__RightSection = () => {
  return (
    <div className={cn("flex gap-2 p-2")}>
      <NotificationIconButton />
      <ProfileAvatar />
    </div>
  );
};

const NotificationIconButton = () => {
  const hasNotification = true;

  const handleClick = () => {
    // TODO: 알림 목록 페이지로 이동
    alert("notification page 이동");
  };

  return (
    <Ods__IconButton
      className={cn("h-auto w-12", "text-ods__base-500")}
      onClick={handleClick}
    >
      <BellIcon />

      {hasNotification && (
        <span
          className={cn(
            // 1. Layout
            "absolute top-3 right-3 flex aspect-square w-1.5 items-center justify-center",
            // 3. Color
            "bg-red-600", // TODO: 테마 컬러 정의 후, 적용
            // 4. Shadow & Border
            "rounded-full",
          )}
        ></span>
      )}
    </Ods__IconButton>
  );
};

const ProfileAvatar = () => {
  const profileImageUrl =
    "https://static.cdn.kmong.com/gigs/12gtG1768751356.jpg?w=200";
  const fallbackImageUrl =
    "https://static.cdn.kmong.com/gigs/12gtG1768751356.jpg?w=200";

  const handleClick = () => {
    // TODO: 아바타 클릭시 팝업메뉴[마이페이지, 로그아웃] 노출
    alert("아바타 클릭시 팝업메뉴[마이페이지, 로그아웃] 노출");
  };

  return (
    <Ods__IconButton onClick={handleClick}>
      <Ods__Avatar
        src={profileImageUrl}
        fallback={
          <Image
            src={fallbackImageUrl}
            fill
            className={cn("object-cover")}
            alt="fallback"
          />
        }
      />
    </Ods__IconButton>
  );
};
