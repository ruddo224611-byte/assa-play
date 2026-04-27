import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { results, getBurnoutByLevel } from "@/data/burnout/results";
import {
  parsePercentsFromSearchParams,
  levelBgGradient,
  levelBadgeColor,
  areaKorean,
} from "@/lib/burnout-score";
import { BURNOUT_AREAS } from "@/types/burnout";
import ShareButtons from "@/components/ShareButtons";

type SearchParams = Record<string, string | undefined>;

type Props = {
  params: { level: string };
  searchParams: SearchParams;
};

export function generateStaticParams() {
  return Object.values(results).map((r) => ({ level: r.level }));
}

export function generateMetadata({ params }: Props): Metadata {
  const result = getBurnoutByLevel(params.level);
  if (!result) return {};
  return {
    title: `번아웃 ${result.koreanName} — 사장님 번아웃 테스트 결과`,
    description: result.shortDescription,
    openGraph: {
      title: `번아웃 ${result.koreanName} — 사장님 번아웃 테스트`,
      description: result.shortDescription,
      images: result.illustration
        ? [{ url: result.illustration, width: 800, height: 800 }]
        : undefined,
    },
  };
}

export default function BurnoutResultPage({ params, searchParams }: Props) {
  const result = getBurnoutByLevel(params.level);
  if (!result) notFound();

  const areaPercents = parsePercentsFromSearchParams(searchParams);
  const isPersonal = areaPercents !== null;

  return (
    <div
      className={`-mt-8 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 ${levelBgGradient[result.level]}`}
    >
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
        <div className="text-center">
          <div
            className="mx-auto overflow-hidden rounded-3xl border-4 border-white/80 bg-white/40 shadow-lg backdrop-blur-sm"
            style={{ width: 240, height: 240 }}
          >
            {result.illustration ? (
              <Image
                src={result.illustration}
                alt={result.koreanName}
                width={240}
                height={240}
                priority
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-9xl">
                {result.emoji}
              </div>
            )}
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-slate-500">
            번아웃 위험도
          </p>
          <div className="mt-2 inline-flex">
            <span
              className={`inline-block rounded-full px-8 py-2.5 text-2xl font-bold text-white shadow-md ${levelBadgeColor[result.level]}`}
              style={{ fontFamily: "'Gmarket Sans', Pretendard, sans-serif" }}
            >
              {result.koreanName}
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {result.shortDescription}
          </p>
        </div>

        {isPersonal && areaPercents && (
          <div className="mt-8 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="mb-4 text-sm font-semibold text-slate-700">
              영역별 점수
            </h3>
            <div className="space-y-3">
              {BURNOUT_AREAS.map((area) => (
                <div key={area}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {areaKorean[area]}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {areaPercents[area]}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full transition-all ${levelBadgeColor[result.level]}`}
                      style={{
                        width: `${Math.min(Math.max(areaPercents[area], 0), 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
            {result.longDescription}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h3 className="mb-4 text-base font-bold text-emerald-900">
            💡 지금 할 수 있는 것
          </h3>
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 sm:text-[17px] sm:leading-[1.8]">
            {result.solution}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
          <h3 className="mb-4 text-sm font-bold text-slate-700">
            📤 결과 공유하기
          </h3>
          <ShareButtons
            title={`나의 번아웃 위험도: ${result.koreanName}`}
            description={result.shortDescription}
            imageUrl={result.illustration}
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3">
          <Link
            href="/play/burnout/test"
            className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            다시 테스트하기
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            처음으로
          </Link>
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
          <br />
          심한 무기력, 우울, 불면 같은 증상이 지속되면 전문가와 상담을 권해 드립니다.
        </p>
      </div>
    </div>
  );
}
