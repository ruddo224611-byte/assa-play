import type { ResultType } from "@/types/quiz";

export type SupportTone = {
  type: ResultType;
  tone: string;
  keywords: string[];
};

export const supportToneByType: Record<ResultType, SupportTone> = {
  "선긋는 배려형": {
    type: "선긋는 배려형",
    tone: "자동화·디지털 전환·경영개선 컨설팅·성장형 지원",
    keywords: ["자동화", "디지털전환", "성장", "컨설팅", "경영개선"],
  },
  "인정중독형": {
    type: "인정중독형",
    tone: "무료 노무 상담·법률 구조·병가/회복형 지원",
    keywords: ["노무", "법률", "병가", "회복", "상담"],
  },
  "평화유지형": {
    type: "평화유지형",
    tone: "노무 컨설팅·교육·코칭·갈등/노사 대응",
    keywords: ["노무", "교육", "코칭", "갈등", "노사"],
  },
  "구원자형": {
    type: "구원자형",
    tone: "인력 운영·디지털 전환/스마트상점·업무 효율화",
    keywords: ["인력", "스마트상점", "효율", "디지털전환"],
  },
  "기준유실형": {
    type: "기준유실형",
    tone: "정책자금·비용 절감형·운영 매뉴얼/컨설팅",
    keywords: ["정책자금", "비용절감", "매뉴얼", "운영"],
  },
  "착한아이 총괄형": {
    type: "착한아이 총괄형",
    tone: "회복형·무료 상담/법률/노무·휴식/병가/재도전",
    keywords: ["회복", "상담", "법률", "노무", "휴식", "재도전"],
  },
};

// evidenceTag → 매칭 keywords (스펙 15번 휴리스틱, 향후 subsidies.json 와 결합)
export const evidenceToSupportKeywords: Record<string, string[]> = {
  always_on_reply: ["휴식", "병가", "회복"],
  delay_price_raise: ["가격책정", "경영안정자금", "컨설팅"],
  cover_shift: ["인건비", "사회보험", "인력"],
  financial_rescue: ["인건비", "사회보험", "인력"],
  overcompensate_review: ["법률", "분쟁상담"],
  over_apology_review: ["법률", "분쟁상담"],
  cannot_rest: ["휴식", "병가", "회복"],
  delay_supplier_boundary: ["법률", "계약"],
  discount_under_pressure: ["가격책정", "경영안정자금"],
};
