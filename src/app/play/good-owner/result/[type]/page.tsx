import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getResultBySlug, results } from "@/data/results";
import { evidenceCopy } from "@/data/evidenceCopy";
import { relationCopy } from "@/data/relationCopy";
import { relationFromSlug } from "@/lib/score";
import type { AxisScores } from "@/types/quiz";
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
    <div className="mx-auto max-w-2xl py-8 sm:py-12">
      <div className="text-center">
        <p className="text-sm font-medium text-brand-600">사장님 착한아이 테스트 결과</p>
        <h1
          className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
        >
          {result.type}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {result.oneLiner}
        </p>

        {isPersonal && (
          <div className="mt-8">
            <p className="text-xs font-medium text-slate-500">착한아이 지수</p>
            <p
              className="mt-1 text-6xl font-bold tabular-nums"
              style={{ color: "#BF360C" }}
            >
              {overall}
            </p>
            <p className="mt-1 text-xs text-slate-400">/ 100</p>
          </div>
        )}
      </div>

      {isPersonal && axes && (
        <div className="card mt-8 p-6">
          <h3 className="mb-4 text-sm font-semibold text-slate-700">5축 점수</h3>
          <AxisBars scores={axes} />
        </div>
      )}

      <div className="card mt-6 p-6">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">설명</h3>
        <p className="text-base leading-relaxed text-slate-700">
          {result.description}
        </p>
        {dominantRelation && relationCopy[dominantRelation] && (
          <p className="mt-3 text-sm italic text-slate-600">
            ※ {relationCopy[dominantRelation]}
          </p>
        )}
      </div>

      {isPersonal && evidenceTags.length > 0 && (
        <div className="card mt-6 p-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">답변 근거</h3>
          <ul className="space-y-2">
            {evidenceTags
              .filter((tag) => evidenceCopy[tag])
              .slice(0, 3)
              .map((tag) => (
                <li key={tag} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-brand-600">•</span>
                  <span>{evidenceCopy[tag]}</span>
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="card mt-6 p-6">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">숨은 비용</h3>
        <ul className="space-y-2">
          {result.hiddenCosts.map((cost, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-700">
              <span className="text-brand-600">•</span>
              <span>{cost}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-6">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">
          오늘 바로 쓸 문장
        </h3>
        <p className="text-base font-semibold leading-relaxed text-slate-900">
          “{result.actionLine}”
        </p>
      </div>

      {searchParams.lc === "1" && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
          ⚠ 모범답안 위주로 선택하셔서 결과의 정확도가 낮을 수 있어요. 솔직하게
          다시 한 번 시도해보면 다른 결과가 나올 수도 있습니다.
        </div>
      )}

      <div className="mt-12 flex flex-col items-center gap-3">
        <Link
          href="/play/good-owner/test"
          className="text-sm font-medium text-brand-600 hover:underline"
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

      <p className="mt-12 text-center text-xs text-slate-400">
        ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
      </p>
    </div>
  );
}
