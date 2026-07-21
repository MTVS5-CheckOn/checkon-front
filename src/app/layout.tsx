import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

import { cn } from "@/shadcn/lib/utils";

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
      className={cn(
        pretendard.className,
        "h-full antialiased", //
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
