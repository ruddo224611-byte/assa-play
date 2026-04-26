export type Axis = "인정" | "회피" | "희생" | "선" | "양보";

export type Relation = "직원" | "손님" | "지인가족" | "거래처" | "자기자신";

export type ResultType =
  | "선긋는 배려형"
  | "인정중독형"
  | "평화유지형"
  | "구원자형"
  | "기준유실형"
  | "착한아이 총괄형";

export type ResultSlug =
  | "boundary-keeper"
  | "approval-seeker"
  | "peacekeeper"
  | "rescuer"
  | "drift"
  | "people-pleaser";

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
  contextTags: Relation[];
  options: QuestionOption[];
};

export type ResultDefinition = {
  type: ResultType;
  slug: ResultSlug;
  oneLiner: string;
  description: string;
  hiddenCosts: string[];
  actionLine: string;
  shareCard: string;
  cafeShareText: string;
  supportTone: string;
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
