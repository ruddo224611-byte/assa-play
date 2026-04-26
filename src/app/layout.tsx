import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://play.assasup.com"),
  title: "아싸 놀이터 — 사장님 자기점검 콘텐츠",
  description:
    "사장님 착한아이 테스트 등 자영업자 자기점검 콘텐츠. 재미와 자기점검을 위한 콘텐츠이며 의학·심리 진단이 아닙니다.",
  other: { "color-scheme": "light" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {children}
        </main>
        <Footer />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
