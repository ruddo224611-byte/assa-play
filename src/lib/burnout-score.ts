import { questions } from "@/data/burnout/questions";
import {
  BURNOUT_AREAS,
  type BurnoutLevel,
  type BurnoutArea,
  type BurnoutOptionId,
  type BurnoutAreaScores,
  type BurnoutQuizResult,
} from "@/types/burnout";

export type Answers = Record<string, BurnoutOptionId>;

function emptyAreaScores(): BurnoutAreaScores {
  return { body: 0, emotion: 0, relationship: 0, work: 0 };
}

export function calculateBurnoutResult(answers: Answers): BurnoutQuizResult {
  const areaScores = emptyAreaScores();
  const areaMax = emptyAreaScores();
  let totalScore = 0;
  let totalMax = 0;

  for (const q of questions) {
    const maxOption = Math.max(...q.options.map((o) => o.score));
    areaMax[q.area] += maxOption;
    totalMax += maxOption;

    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    areaScores[q.area] += option.score;
    totalScore += option.score;
  }

  const areaPercents = emptyAreaScores();
  for (const area of BURNOUT_AREAS) {
    areaPercents[area] =
      areaMax[area] > 0
        ? Math.round((areaScores[area] / areaMax[area]) * 100)
        : 0;
  }

  const level = classifyLevel(totalScore, totalMax);

  return { level, totalScore, totalMax, areaScores, areaPercents };
}

// 5단계 분류 (총점 비율 기준, 100/5 = 20%씩)
function classifyLevel(score: number, max: number): BurnoutLevel {
  const percent = max > 0 ? (score / max) * 100 : 0;
  if (percent < 21) return "none";
  if (percent < 41) return "low";
  if (percent < 61) return "caution";
  if (percent < 81) return "severe";
  return "critical";
}

const KEY_BY_AREA: Record<BurnoutArea, string> = {
  body: "b",
  emotion: "e",
  relationship: "r",
  work: "w",
};

export function resultToSearchParams(
  result: BurnoutQuizResult,
): URLSearchParams {
  const params = new URLSearchParams();
  params.set("t", String(result.totalScore));
  params.set("tm", String(result.totalMax));
  for (const area of BURNOUT_AREAS) {
    params.set(KEY_BY_AREA[area], String(result.areaPercents[area]));
  }
  return params;
}

export function parsePercentsFromSearchParams(
  sp: Record<string, string | undefined>,
): BurnoutAreaScores | null {
  const percents = emptyAreaScores();
  let hasAny = false;
  for (const area of BURNOUT_AREAS) {
    const v = sp[KEY_BY_AREA[area]];
    if (v !== undefined) {
      percents[area] = Number(v) || 0;
      hasAny = true;
    }
  }
  return hasAny ? percents : null;
}

export const levelBgGradient: Record<BurnoutLevel, string> = {
  none: "bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50",
  low: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",
  caution: "bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200",
  severe: "bg-gradient-to-br from-purple-100 via-rose-100 to-purple-200",
  critical: "bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400",
};

export const levelBadgeColor: Record<BurnoutLevel, string> = {
  none: "bg-blue-500",
  low: "bg-emerald-500",
  caution: "bg-yellow-500",
  severe: "bg-orange-500",
  critical: "bg-red-700",
};

export const areaKorean: Record<BurnoutArea, string> = {
  body: "신체",
  emotion: "정서",
  relationship: "관계",
  work: "일",
};
