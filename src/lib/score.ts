import type {
  Axis,
  Relation,
  AxisScores,
  RelationScores,
  QuizResult,
} from "@/types/quiz";
import { questions } from "@/data/questions";
import { results } from "@/data/results";
import { classifyResult } from "@/data/resultRules";

export type Answers = Record<string, string>;

const ALL_AXES: Axis[] = ["인정", "회피", "희생", "선", "양보"];
const ALL_RELATIONS: Relation[] = [
  "직원",
  "손님",
  "지인가족",
  "거래처",
  "자기자신",
];

function emptyAxisScores(): AxisScores {
  return { 인정: 0, 회피: 0, 희생: 0, 선: 0, 양보: 0 };
}

function emptyRelationScores(): RelationScores {
  return { 직원: 0, 손님: 0, 지인가족: 0, 거래처: 0, 자기자신: 0 };
}

function sumScore(score: Partial<Record<Axis, number>>): number {
  return ALL_AXES.reduce((sum, axis) => sum + (score[axis] ?? 0), 0);
}

// 각 축 원점수 합산
function calculateRawAxisScores(answers: Answers): AxisScores {
  const raw = emptyAxisScores();
  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    for (const axis of ALL_AXES) {
      raw[axis] += option.score[axis] ?? 0;
    }
  }
  return raw;
}

// 각 축의 max 가능 점수 (정규화 분모)
function calculateMaxAxisScores(): AxisScores {
  const max = emptyAxisScores();
  for (const q of questions) {
    for (const axis of ALL_AXES) {
      const optionMax = Math.max(
        ...q.options.map((o) => o.score[axis] ?? 0),
      );
      max[axis] += optionMax;
    }
  }
  return max;
}

// 0~100 정규화
function normalize(raw: AxisScores, max: AxisScores): AxisScores {
  const out = emptyAxisScores();
  for (const axis of ALL_AXES) {
    out[axis] = max[axis] > 0 ? Math.round((raw[axis] / max[axis]) * 100) : 0;
  }
  return out;
}

// overallRisk = 가중 평균 (스펙 10번)
function calculateOverall(axes: AxisScores): number {
  return Math.round(
    axes["인정"] * 0.24 +
      axes["회피"] * 0.22 +
      axes["희생"] * 0.20 +
      axes["선"] * 0.18 +
      axes["양보"] * 0.16,
  );
}

// 관계별 위험 누적
function calculateRelationScores(answers: Answers): RelationScores {
  const scores = emptyRelationScores();
  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    const total = sumScore(option.score);
    if (total === 0) continue;
    for (const tag of q.contextTags) {
      scores[tag] += total;
    }
  }
  return scores;
}

// dominantContext = 가장 점수 높은 관계 (모두 0이면 null)
function getDominantContext(scores: RelationScores): Relation | null {
  let best: Relation | null = null;
  let bestVal = -1;
  for (const rel of ALL_RELATIONS) {
    if (scores[rel] > bestVal) {
      bestVal = scores[rel];
      best = rel;
    }
  }
  return bestVal > 0 ? best : null;
}

// evidence top N (점수 가중 합산)
function getTopEvidence(answers: Answers, n: number): string[] {
  const tagScores: Record<string, number> = {};
  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    const total = sumScore(option.score);
    if (total === 0) continue;
    for (const tag of option.evidenceTags) {
      tagScores[tag] = (tagScores[tag] ?? 0) + total;
    }
  }
  return Object.entries(tagScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([tag]) => tag);
}

// social desirability: 점수 0인 답변(모범답안) 비율이 70% 이상이면 lowConfidence
function isLowConfidence(answers: Answers): boolean {
  let answered = 0;
  let goodAnswers = 0;
  for (const q of questions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    answered++;
    const option = q.options.find((o) => o.id === optionId);
    if (!option) continue;
    if (sumScore(option.score) === 0) goodAnswers++;
  }
  return answered > 0 && goodAnswers / answered >= 0.7;
}

export function calculateResult(answers: Answers): QuizResult {
  const max = calculateMaxAxisScores();
  const raw = calculateRawAxisScores(answers);
  const axes = normalize(raw, max);
  const overall = calculateOverall(axes);
  const maxAxis = Math.max(...ALL_AXES.map((a) => axes[a]));
  const countAxisOver60 = ALL_AXES.filter((a) => axes[a] >= 60).length;

  const type = classifyResult({ overall, axes, maxAxis, countAxisOver60 });
  const slug = results[type].slug;

  const relationScores = calculateRelationScores(answers);
  const dominantContext = getDominantContext(relationScores);
  const evidenceTags = getTopEvidence(answers, 3);
  const lowConfidence = isLowConfidence(answers);

  return {
    type,
    slug,
    axisScores: axes,
    overallRisk: overall,
    dominantContext,
    evidenceTags,
    lowConfidence,
  };
}

// URL query param 인코딩용 헬퍼
const RELATION_TO_SLUG: Record<Relation, string> = {
  직원: "staff",
  손님: "customer",
  지인가족: "family",
  거래처: "supplier",
  자기자신: "self",
};

const SLUG_TO_RELATION: Record<string, Relation> = {
  staff: "직원",
  customer: "손님",
  family: "지인가족",
  supplier: "거래처",
  self: "자기자신",
};

export function resultToSearchParams(result: QuizResult): URLSearchParams {
  const params = new URLSearchParams({
    o: String(result.overallRisk),
    a: String(result.axisScores["인정"]),
    c: String(result.axisScores["회피"]),
    r: String(result.axisScores["희생"]),
    b: String(result.axisScores["선"]),
    p: String(result.axisScores["양보"]),
  });
  if (result.evidenceTags.length > 0) {
    params.set("ev", result.evidenceTags.join(","));
  }
  if (result.dominantContext) {
    params.set("ctx", RELATION_TO_SLUG[result.dominantContext]);
  }
  if (result.lowConfidence) {
    params.set("lc", "1");
  }
  return params;
}

export function relationFromSlug(slug: string | undefined): Relation | null {
  if (!slug) return null;
  return SLUG_TO_RELATION[slug] ?? null;
}
