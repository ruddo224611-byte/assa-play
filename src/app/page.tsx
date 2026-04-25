import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1
          className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
          style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
        >
          사장님 착한아이 테스트
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          좋은 사람이어야 한다는 압박 때문에<br />
          운영 기준·수익·경계가 무너지고 있는지<br />
          3분 안에 점검해보세요.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          16문항 · 약 3분 · 무료 · 가입 없음
        </p>
        <div className="mt-10">
          <Link
            href="/play/good-owner/test"
            className="inline-block rounded-xl bg-brand-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            테스트 시작하기
          </Link>
        </div>
        <p className="mt-8 text-xs text-slate-400">
          ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
        </p>
      </div>
    </div>
  );
}
