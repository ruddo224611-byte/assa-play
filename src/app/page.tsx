import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="-mx-4 -mt-8 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 px-4 pt-12 pb-32 sm:px-8 sm:pt-20 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-700 sm:text-sm">
              사장님 자기점검 No.1
            </p>
            <h1
              className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
              style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
            >
              사장님들의
              <br />
              재밌는 놀이터
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              자영업 사장님들을 위한
              <br />
              재미있는 자기점검 콘텐츠를 만듭니다.
            </p>
          </div>
          <div className="shrink-0">
            <Image
              src="/illustrations/people-pleaser.png"
              alt="아싸 놀이터 캐릭터"
              width={220}
              height={220}
              priority
              className="h-44 w-44 rounded-3xl shadow-lg sm:h-52 sm:w-52"
            />
          </div>
        </div>

        {/* Wave */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,90 720,40 C960,-10 1200,-10 1440,40 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </section>

      {/* Test cards */}
      <section className="bg-white px-4 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-center text-2xl font-bold text-slate-900 sm:text-3xl"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            전체 테스트
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            지금 바로 풀어볼 수 있는 사장님 자기점검 테스트
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/play/good-owner/test"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src="/cards/good-owner.png"
                  alt="사장님 착한아이 테스트"
                  width={1200}
                  height={648}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-slate-900">
                  사장님 착한아이 테스트
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  16문항 · 약 3분 · 무료
                </p>
              </div>
            </Link>

            <div className="overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
              <div className="flex aspect-[16/9] items-center justify-center text-sm font-medium text-slate-400">
                곧 공개
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-slate-400">
                  사업 유형 테스트
                </p>
                <p className="mt-1 text-xs text-slate-400">준비 중</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
              <div className="flex aspect-[16/9] items-center justify-center text-sm font-medium text-slate-400">
                곧 공개
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-slate-400">
                  다음 테스트
                </p>
                <p className="mt-1 text-xs text-slate-400">준비 중</p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-slate-400">
            ※ 이 사이트의 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
          </p>
        </div>
      </section>
    </div>
  );
}
