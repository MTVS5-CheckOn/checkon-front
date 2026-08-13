"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

/**
 * 관리자 로그인 후, 필수 접두사를 유지하며 움직이는 라우터
 */
export const useProtectedNavigation = () => {
  const params = useParams();
  const router = useRouter();
  const academyId = params.academyId as string;

  const push = (path: string) => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    router.push(`/a/${academyId}${cleanPath}`);
  };

  return {
    academyId,
    push,
  };
};

/**
 * 관리자 로그인 후, 필수 접두사를 유지하며 움직이는 Link 래퍼.
 */
export const ProtectedLink = ({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) => {
  const params = useParams();
  const academyId = params.academyId as string;

  let targetHref = href;

  // UrlObject 등 비문자열 href, 또는 이미 `/a/`로 시작하는 절대 경로는 그대로 사용
  if (typeof href === "string" && !href.startsWith("/a/")) {
    let path = href;

    // `dashboard`처럼 슬래시 없이 넘어온 경로는 `/dashboard`로 정규화
    if (!path.startsWith("/")) {
      path = `/${path}`;
    }

    targetHref = `/a/${academyId}${path}`;
  }
  return (
    <Link href={targetHref} {...props}>
      {children}
    </Link>
  );
};
