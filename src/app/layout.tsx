import type { Metadata } from "next";
import "swiper/css";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/ui/utils/tailwind/cn";

const pretendard = localFont({
  src: "./fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "CheckOn",
  description: "CheckOn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(pretendard.className, "min-h-full", "antialiased")}
      suppressHydrationWarning
    >
      <body className="flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
