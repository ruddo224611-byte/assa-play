import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="아싸 놀이터 로고"
          width={56}
          height={56}
          priority
          className="h-14 w-14 object-contain"
        />
        <span
          className="pr-4 text-xl font-bold text-slate-900 sm:text-2xl"
          style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
        >
          아싸 <span className="text-brand-600">놀이터</span>
        </span>
      </Link>
    </header>
  );
}
