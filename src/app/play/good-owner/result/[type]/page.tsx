import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getResultBySlug, results } from "@/data/results";
import { relationCopy } from "@/data/relationCopy";
import { relationFromSlug, getRiskLevel, riskLevelColor } from "@/lib/score";
import type { ResultSlug } from "@/types/quiz";

type SearchParams = {
  o?: string;
  a?: string;
  c?: string;
  r?: string;
  b?: string;
  p?: string;
  ctx?: string;
  ev?: string;
  lc?: string;
};

type Props = {
  params: { type: string };
  searchParams: SearchParams;
};

const bgGradientBySlug: Record<ResultSlug, string> = {
  "boundary-keeper": "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100",
  "approval-seeker": "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",
  "peacekeeper": "bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200",
  "rescuer": "bg-gradient-to-br from-red-50 via-rose-50 to-blue-50",
  "drift": "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100",
  "people-pleaser": "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",
};

export function generateStaticParams() {
  return Object.values(results).map((r) => ({ type: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const result = getResultBySlug(params.type);
  if (!result) return {};
  return {
    title: `${result.type} — 사장님 착한아이 테스트 결과`,
    description: result.oneLiner,
    openGraph: {
      title: `${result.type} — 사장님 착한아이 테스트`,
      description: result.oneLiner,
      images: [{ url: result.illustration, width: 800, height: 800 }],
    },
  };
}

export default function ResultPage({ params, searchParams }: Props) {
  const result = getResultBySlug(params.type);
  if (!result) notFound();

  const overall = searchParams.o ? Number(searchParams.o) : null;
  const isPersonal = overall !== null;
  const dominantRelation = relationFromSlug(searchParams.ctx);
  const riskLevel = isPersonal ? getRiskLevel(overall!) : null;
  const longBody = result.longDescription || result.description;

  return (
    <div
      className={`-mt-8 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 ${bgGradientBySlug[result.slug]}`}
    >
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <div
            className="mx-auto overflow-hidden rounded-3xl border-4 border-white/80 bg-white/40 shadow-lg backdrop-blur-sm"
            style={{ width: 240, height: 240 }}
          >
            <Image
              src={result.illustration}
              alt={result.type}
              width={240}
              height={240}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <h1
            className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            {result.type}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            {result.oneLiner}
          </p>

          {isPersonal && riskLevel && (
            <div className="mt-8 inline-flex flex-col items-center rounded-2xl bg-white/85 px-8 py-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                착한아이 정도
              </p>
              <span
                className={`mt-3 inline-block rounded-full px-8 py-2.5 text-xl font-bold text-white shadow-sm ${riskLevelColor[riskLevel]}`}
                style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
              >
                {riskLevel}
              </span>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
            {longBody}
          </p>
          {dominantRelation && relationCopy[dominantRelation] && (
            <p className="mt-6 text-sm font-medium text-slate-600">
              👉 {relationCopy[dominantRelation]}
            </p>
          )}
        </div>

        {result.solution && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h3 className="mb-4 text-base font-bold text-emerald-900">
              💡 해결 방법
            </h3>
            <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
              {result.solution}
            </p>
          </div>
        )}

        {searchParams.lc === "1" && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-800 backdrop-blur-sm">
            ⚠ 모범답안 위주로 선택하셔서 결과 정확도가 낮을 수 있어요. 솔직하게 한 번 더 해보면 다른 결과가 나올 수도 있습니다.
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-3">
          <Link
            href="/play/good-owner/test"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            다시 테스트하기
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-slate-700"
          >
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
