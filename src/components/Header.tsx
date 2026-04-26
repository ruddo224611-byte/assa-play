import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="아싸 놀이터 로고"
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span
            className="text-base font-bold text-slate-900 sm:text-lg"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            아싸 <span className="text-brand-600">놀이터</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
