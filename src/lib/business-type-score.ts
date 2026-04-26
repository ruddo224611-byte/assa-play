import { questions } from "@/data/business-type/questions";
import {
  BUSINESS_TYPES,
  type BusinessType,
  type BusinessTypeOptionId,
  type BusinessTypeQuizResult,
} from "@/types/business-type";

export type Answers = Record<string, BusinessTypeOptionId>;

function emptyScores(): Record<BusinessType, number> {
  return {
    conqueror: 0,
    nomad: 0,
    craftsman: 0,
    farmer: 0,
    collaborator: 0,
    adventurer: 0,
    strategist: 0,
  };
}

export function calculateBusinessTypeResult(
  answers: Answers,
): BusinessTypeQuizResult {
  const scores = emptyScores();

  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    for (const type of BUSINESS_TYPES) {
      scores[type] += option.score[type] ?? 0;
    }
  }

  // 동점 시 BUSINESS_TYPES 배열 순서대로 첫 번째가 우선
  let best: BusinessType = BUSINESS_TYPES[0];
  let bestScore = scores[best];
  for (const type of BUSINESS_TYPES) {
    if (scores[type] > bestScore) {
      bestScore = scores[type];
      best = type;
    }
  }

  return { type: best, scores };
}

// URL 인코딩 — 7유형 단축 키
const KEY_BY_TYPE: Record<BusinessType, string> = {
  conqueror: "c",
  nomad: "n",
  craftsman: "k",
  farmer: "f",
  collaborator: "l",
  adventurer: "a",
  strategist: "s",
};

export function resultToSearchParams(
  result: BusinessTypeQuizResult,
): URLSearchParams {
  const params = new URLSearchParams();
  for (const type of BUSINESS_TYPES) {
    params.set(KEY_BY_TYPE[type], String(result.scores[type]));
  }
  return params;
}

export function parseScoresFromSearchParams(
  sp: Record<string, string | undefined>,
): Record<BusinessType, number> | null {
  const scores = emptyScores();
  let hasAny = false;
  for (const type of BUSINESS_TYPES) {
    const v = sp[KEY_BY_TYPE[type]];
    if (v !== undefined) {
      scores[type] = Number(v) || 0;
      hasAny = true;
    }
  }
  return hasAny ? scores : null;
}
