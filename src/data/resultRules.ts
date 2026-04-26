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
    type: "선긋기 마스터",
    match: ({ overall, maxAxis }) => overall < 28 && maxAxis < 55,
  },
  {
    type: "천사 사장형",
    match: ({ overall, countAxisOver60 }) =>
      overall >= 75 && countAxisOver60 >= 4,
  },
  {
    type: "기준없음 사장형",
    match: ({ axes }) => axes["선"] >= 62 && axes["양보"] >= 62,
  },
  {
    type: "슈퍼맨 사장형",
    match: ({ axes }) => axes["희생"] >= 68,
  },
  {
    type: "굿보이 사장형",
    match: ({ axes }) => axes["인정"] >= 68,
  },
  {
    type: "입꾹닫 사장형",
    match: ({ axes }) => axes["회피"] >= 62,
  },
];

const defaultResultType: ResultType = "입꾹닫 사장형";

export function classifyResult(p: RuleParams): ResultType {
  for (const rule of rules) {
    if (rule.match(p)) return rule.type;
  }
  return defaultResultType;
}
