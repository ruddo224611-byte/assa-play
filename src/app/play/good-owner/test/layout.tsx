import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사장님 착한아이 테스트 진행 중",
  robots: { index: false, follow: false },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
