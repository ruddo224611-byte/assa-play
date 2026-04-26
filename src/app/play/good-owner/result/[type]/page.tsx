import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getResultBySlug, results } from "@/data/results";
import { evidenceCopy } from "@/data/evidenceCopy";
import { relationCopy } from "@/data/relationCopy";
import { relationFromSlug } from "@/lib/score";
import type { AxisScores, ResultSlug } from "@/types/quiz";
import AxisBars from "@/components/AxisBars";

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

function parseScores(sp: SearchParams): AxisScores | null {
  if (
    sp.a === undefined ||
    sp.c === undefined ||
    sp.r === undefined ||
    sp.b === undefined ||
    sp.p === undefined
  ) {
    return null;
  }
  return {
    인정: Number(sp.a) || 0,
    회피: Number(sp.c) || 0,
    희생: Number(sp.r) || 0,
    선: Number(sp.b) || 0,
    양보: Number(sp.p) || 0,
  };
}

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
  const axes = parseScores(searchParams);
  const isPersonal = overall !== null && axes !== null;
  const evidenceTags = (searchParams.ev ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const dominantRelation = relationFromSlug(searchParams.ctx);

  return (
    <div
      className={`-mt-8 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 ${bgGradientBySlug[result.slug]}`}
    >
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <div className="mx-auto overflow-hidden rounded-3xl border-4 border-white/80 bg-white/40 shadow-lg backdrop-blur-sm" style={{ width: 240, height: 240 }}>
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

          {isPersonal && (
            <div className="mt-8 inline-flex flex-col items-center rounded-2xl bg-white/80 px-8 py-5 backdrop-blur-sm shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                착한아이 지수
              </p>
              <p
                className="mt-1 text-6xl font-bold leading-none tabular-nums sm:text-7xl"
                style={{ color: "#BF360C" }}
              >
                {overall}
              </p>
              <p className="mt-1 text-xs text-slate-400">/ 100</p>
            </div>
          )}
        </div>

        {isPersonal && axes && (
          <div className="mt-8 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="mb-4 text-sm font-semibold text-slate-700">5축 점수</h3>
            <AxisBars scores={axes} />
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800">
            {result.description}
          </p>
          {dominantRelation && relationCopy[dominantRelation] && (
            <p className="mt-4 text-sm font-medium text-slate-600">
              👉 {relationCopy[dominantRelation]}
            </p>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/90 p-6 shadow-sm backdrop-blur-sm">
          <h3 className="mb-3 text-sm font-bold text-rose-900">
            🚨 너 진짜 망하는 길
          </h3>
          <ul className="space-y-2">
            {result.hiddenCosts.map((cost, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-800">
                <span className="text-rose-500">•</span>
                <span>{cost}</span>
              </li>
            ))}
          </ul>
        </div>

        {isPersonal && evidenceTags.length > 0 && (
          <div className="mt-6 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="mb-3 text-sm font-bold text-slate-700">
              🔍 너의 답변에서 보임
            </h3>
            <ul className="space-y-2">
              {evidenceTags
                .filter((tag) => evidenceCopy[tag])
                .slice(0, 3)
                .map((tag) => (
                  <li key={tag} className="flex gap-2 text-sm text-slate-800">
                    <span className="text-brand-600">•</span>
                    <span>{evidenceCopy[tag]}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/95 p-6 shadow-sm backdrop-blur-sm">
          <h3 className="mb-2 text-sm font-bold text-amber-900">
            💡 내일부터 외울 한마디
          </h3>
          <p
            className="text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl"
            style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
          >
            “{result.actionLine}”
          </p>
        </div>

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
