import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          사장님 자기점검
        </p>
        <h1
          className="mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
          style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
        >
          사장님 착한아이 테스트
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          좋은 사람이어야 한다는 압박 때문에<br />
          <span className="font-semibold text-slate-900">기준·수익·체력이 새고 있는지</span><br />
          3분 안에 점검합니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          16문항 · 약 3분 · 무료 · 가입 없음
        </p>
        <div className="mt-10">
          <Link
            href="/play/good-owner/test"
            className="inline-block rounded-2xl bg-brand-600 px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
          >
            테스트 시작하기 →
          </Link>
        </div>
        <p className="mt-3 text-xs text-slate-400">결과는 6가지 사장님 유형 중 하나</p>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {[
            { e: "🛡️", n: "선긋기" },
            { e: "🐶", n: "굿보이" },
            { e: "🤐", n: "입꾹닫" },
            { e: "🦸", n: "슈퍼맨" },
            { e: "🌪️", n: "기준없음" },
            { e: "😇", n: "천사" },
          ].map((t) => (
            <div key={t.n} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
              <div className="text-3xl">{t.e}</div>
              <div className="mt-1 text-xs text-slate-500">{t.n}</div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-slate-400">
          ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
        </p>
      </div>
    </div>
  );
}
