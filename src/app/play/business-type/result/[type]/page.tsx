import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { results, getBusinessTypeByKey } from "@/data/business-type/results";
import type { BusinessType } from "@/types/business-type";

type SearchParams = Record<string, string | undefined>;

type Props = {
  params: { type: string };
  searchParams: SearchParams;
};

const bgGradientByType: Record<BusinessType, string> = {
  conqueror: "bg-gradient-to-br from-purple-50 via-amber-50 to-yellow-100",
  nomad: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",
  craftsman: "bg-gradient-to-br from-amber-50 via-orange-100 to-rose-100",
  farmer: "bg-gradient-to-br from-green-50 via-yellow-50 to-lime-100",
  collaborator: "bg-gradient-to-br from-pink-50 via-rose-50 to-blue-50",
  adventurer: "bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100",
  strategist: "bg-gradient-to-br from-teal-50 via-cyan-50 to-slate-100",
};

export function generateStaticParams() {
  return Object.values(results).map((r) => ({ type: r.type }));
}

export function generateMetadata({ params }: Props): Metadata {
  const result = getBusinessTypeByKey(params.type);
  if (!result) return {};
  return {
    title: `${result.koreanName} — 사장님 사업유형 테스트 결과`,
    description: result.oneLiner,
    openGraph: {
      title: `${result.koreanName} — 사장님 사업유형 테스트`,
      description: result.oneLiner,
    },
  };
}

export default function BusinessTypeResultPage({ params }: Props) {
  const result = getBusinessTypeByKey(params.type);
  if (!result) notFound();

  return (
    <div
      className={`-mt-8 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 ${bgGradientByType[result.type]}`}
    >
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center justify-center rounded-3xl border-4 border-white/80 bg-white/40 shadow-lg backdrop-blur-sm" style={{ width: 200, height: 200 }}>
            <div className="text-9xl">{result.emoji}</div>
          </div>
          <h1
            className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            {result.koreanName}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            {result.oneLiner}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
            {result.longDescription}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h3 className="mb-4 text-base font-bold text-emerald-900">
            💡 강점을 더 살리는 방법
          </h3>
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
            {result.solution}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Link
            href="/play/business-type/test"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            다시 테스트하기
          </Link>
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-700">
            처음으로
          </Link>
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
        </p>
      </div>
    </div>
  );
}
