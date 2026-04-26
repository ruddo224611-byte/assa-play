import type { AxisScores, ResultType } from "@/types/quiz";

type RuleParams = {
  overall: number;
  axes: AxisScores;
  maxAxis: number;
  countAxisOver60: number;
};

type ResultRule = {
  type: ResultType;
  match: (p: RuleParams) => boolean;
};

// 스펙 11번 — 위에서부터 순서대로 평가, 가장 먼저 매치되는 타입 반환
const rules: ResultRule[] = [
  {
    type: "선긋는 배려형",
    match: ({ overall, maxAxis }) => overall < 28 && maxAxis < 55,
  },
  {
    type: "착한아이 총괄형",
    match: ({ overall, countAxisOver60 }) =>
      overall >= 75 && countAxisOver60 >= 4,
  },
  {
    type: "기준유실형",
    match: ({ axes }) => axes["선"] >= 62 && axes["양보"] >= 62,
  },
  {
    type: "구원자형",
    match: ({ axes }) => axes["희생"] >= 68,
  },
  {
    type: "인정중독형",
    match: ({ axes }) => axes["인정"] >= 68,
  },
  {
    type: "평화유지형",
    match: ({ axes }) => axes["회피"] >= 62,
  },
];

// 매치되는 룰이 없으면 기본값
const defaultResultType: ResultType = "평화유지형";

export function classifyResult(p: RuleParams): ResultType {
  for (const rule of rules) {
    if (rule.match(p)) return rule.type;
  }
  return defaultResultType;
}
