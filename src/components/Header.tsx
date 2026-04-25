import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <Link href="/" className="inline-flex items-baseline gap-1">
          <span
            className="text-2xl font-bold text-slate-900"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            아싸 <span className="text-brand-600">놀이터</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
