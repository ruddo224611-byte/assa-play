export type Axis = "인정" | "회피" | "희생" | "선" | "양보";

export type Relation = "직원" | "손님" | "지인가족" | "거래처" | "자기자신";

export type ResultType =
  | "선긋기 마스터"
  | "굿보이 사장형"
  | "입꾹닫 사장형"
  | "슈퍼맨 사장형"
  | "기준없음 사장형"
  | "천사 사장형";

export type ResultSlug =
  | "boundary-keeper"
  | "approval-seeker"
  | "peacekeeper"
  | "rescuer"
  | "drift"
  | "people-pleaser";

export type RiskLevel =
  | "매우낮음"
  | "낮음"
  | "보통"
  | "주의"
  | "심각"
  | "매우심각";

export type QuestionType = "scenario" | "forced";

export type OptionId = "A" | "B" | "C" | "D";

export type Score = Partial<Record<Axis, number>>;

export type QuestionOption = {
  id: OptionId;
  label: string;
  score: Score;
  evidenceTags: string[];
};

export type Question = {
  id: string;
  type: QuestionType;
  text: string;
  subtitle?: string;
  illustration?: string;
  contextTags: Relation[];
  options: QuestionOption[];
};

export type ResultDefinition = {
  type: ResultType;
  slug: ResultSlug;
  emoji: string;
  illustration: string;
  oneLiner: string;
  description: string;
  shareCard: string;
  cafeShareText: string;
  longDescription?: string;
  solution?: string;
};

export type AxisScores = Record<Axis, number>;

export type RelationScores = Record<Relation, number>;

export type QuizResult = {
  type: ResultType;
  slug: ResultSlug;
  axisScores: AxisScores;
  overallRisk: number;
  dominantContext: Relation | null;
  evidenceTags: string[];
  lowConfidence: boolean;
};
