export type BusinessType =
  | "conqueror"
  | "nomad"
  | "craftsman"
  | "farmer"
  | "collaborator"
  | "adventurer"
  | "strategist";

// 동점 시 우선순위 (앞에 있는 유형이 우선)
export const BUSINESS_TYPES: BusinessType[] = [
  "conqueror",
  "nomad",
  "craftsman",
  "farmer",
  "collaborator",
  "adventurer",
  "strategist",
];

export type BusinessTypeScore = Partial<Record<BusinessType, number>>;

export type BusinessTypeOptionId = "A" | "B" | "C" | "D";

export type BusinessTypeQuestionOption = {
  id: BusinessTypeOptionId;
  label: string;
  score: BusinessTypeScore;
};

export type BusinessTypeQuestion = {
  id: string;
  text: string;
  options: BusinessTypeQuestionOption[];
};

export type BusinessTypeDefinition = {
  type: BusinessType;
  koreanName: string;
  emoji: string;
  oneLiner: string;
  longDescription: string;
  solution: string;
  illustration?: string;
};

export type BusinessTypeQuizResult = {
  type: BusinessType;
  scores: Record<BusinessType, number>;
};
