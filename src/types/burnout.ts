export type BurnoutLevel =
  | "none"
  | "low"
  | "caution"
  | "severe"
  | "critical";

export type BurnoutArea = "body" | "emotion" | "relationship" | "work";

export const BURNOUT_LEVELS: BurnoutLevel[] = [
  "none",
  "low",
  "caution",
  "severe",
  "critical",
];

export const BURNOUT_AREAS: BurnoutArea[] = [
  "body",
  "emotion",
  "relationship",
  "work",
];

export type BurnoutOptionId = "A" | "B" | "C" | "D";

export type BurnoutQuestionOption = {
  id: BurnoutOptionId;
  label: string;
  score: number;
};

export type BurnoutQuestion = {
  id: string;
  text: string;
  area: BurnoutArea;
  options: BurnoutQuestionOption[];
};

export type BurnoutDefinition = {
  level: BurnoutLevel;
  koreanName: string;
  emoji: string;
  illustration?: string;
  shortDescription: string;
  longDescription: string;
  solution: string;
};

export type BurnoutAreaScores = Record<BurnoutArea, number>;

export type BurnoutQuizResult = {
  level: BurnoutLevel;
  totalScore: number;
  totalMax: number;
  areaScores: BurnoutAreaScores;
  areaPercents: BurnoutAreaScores;
};
