import type { ResultDefinition, ResultType } from "@/types/quiz";

export const results: Record<ResultType, ResultDefinition> = {
  "선긋는 배려형": {
    type: "선긋는 배려형",
    slug: "boundary-keeper",
    oneLiner: "배려는 하지만, 운영 기준까지 무너뜨리진 않는 타입",
    description:
      "사람을 불편하게 만들고 싶진 않지만, 그렇다고 원칙을 쉽게 무너뜨리진 않는 편. 좋은 사람보다 예측 가능한 사장에 가깝고, 그래서 오래 버틸 가능성이 높음.",
    hiddenCosts: [
      "기준을 지키느라 피곤한 순간이 있음",
      "혼자 버티는 시간이 길어질 수 있음",
      "냉정한 사람처럼 오해받을 때가 있음",
    ],
    actionLine: "좋게 끝내고 싶지만, 기준은 그대로 갈게요.",
    shareCard: "나는 선긋는 배려형 사장 / 착한아이 지수 낮음 / 기준 유지형",
    cafeShareText:
      "나는 선긋는 배려형 사장이라네. 배려는 하는데 기준은 지키는 편이라는데 맞는듯 ㅋㅋ 너도 해봐",
    supportTone: "자동화·디지털 전환·경영개선 컨설팅·성장형 지원",
  },
  "인정중독형": {
    type: "인정중독형",
    slug: "approval-seeker",
    oneLiner: "좋은 사장으로 보이고 싶은 마음이 기준보다 먼저 오는 타입",
    description:
      "‘좋은 사람’, ‘좋은 사장’, ‘센스 있는 사장’으로 기억되고 싶은 욕구가 강함. 그 마음이 커질수록 가격, 정책, 피드백, 거리두기 같은 기준의 힘이 약해짐.",
    hiddenCosts: [
      "할인/서비스/예외 운영이 늘어남",
      "기준보다 관계를 먼저 관리하게 됨",
      "속으로는 억울함이 누적됨",
    ],
    actionLine: "좋은 사람이 아니라, 예측 가능한 사장이 되겠습니다.",
    shareCard: "나는 인정중독형 사장 / 좋은 사람 콤플렉스 강한 편",
    cafeShareText:
      "나는 인정중독형 사장 나옴… 좋은 사람으로 보이고 싶은 마음이 기준보다 앞선다는데 찔림",
    supportTone: "무료 노무 상담·법률 구조·병가/회복형 지원",
  },
  "평화유지형": {
    type: "평화유지형",
    slug: "peacekeeper",
    oneLiner: "작은 갈등을 피하다가 큰 문제를 키우는 타입",
    description:
      "분위기 틀어지는 걸 힘들어함. 말해야 할 순간을 놓치고, 나중에 더 큰 피로와 서운함을 떠안기 쉬움.",
    hiddenCosts: [
      "작은 문제가 반복됨",
      "말 안 한 피로가 뒤늦게 커짐",
      "타이밍을 놓친 피드백이 쌓임",
    ],
    actionLine: "어색하더라도, 이건 오늘 말하고 넘어갈게요.",
    shareCard: "나는 평화유지형 사장 / 싸움은 싫은데 속은 자꾸 쌓이는 편",
    cafeShareText:
      "평화유지형 사장 나옴. 분위기 망칠까봐 할 말 미루는 타입이라는데 소름",
    supportTone: "노무 컨설팅·교육·코칭·갈등/노사 대응",
  },
  "구원자형": {
    type: "구원자형",
    slug: "rescuer",
    oneLiner: "문제가 생기면 시스템보다 내가 먼저 뛰어드는 타입",
    description:
      "책임감이 강하고 빈틈이 보이면 몸이 먼저 움직임. 단기적으론 매장이 굴러가지만 장기적으론 사장 1인 의존 매장이 되기 쉬움.",
    hiddenCosts: [
      "사장 부재 불안",
      "팀 자율성 저하",
      "휴식과 체력 고갈",
    ],
    actionLine: "내가 할까보다, 누가 어떻게 하게 할까를 먼저 보겠습니다.",
    shareCard: "나는 구원자형 사장 / 책임감은 강한데 내 몸이 먼저 갈리는 편",
    cafeShareText:
      "나는 구원자형 사장… 문제 생기면 시스템보다 내가 먼저 메우는 스타일이래 ㅋㅋ",
    supportTone: "인력 운영·디지털 전환/스마트상점·업무 효율화",
  },
  "기준유실형": {
    type: "기준유실형",
    slug: "drift",
    oneLiner: "선도 흐리고, 돈도 새고, 예외가 습관이 되는 타입",
    description:
      "정이 많고 눈치도 빠르지만 그만큼 경계가 흐려지기 쉬움. 운영시간·서비스 범위·할인 기준·지인 응대·늦은 문의 등이 하나둘 예외가 되면서 가게의 기준이 사라짐.",
    hiddenCosts: [
      "수익 누수",
      "운영 시간·정책 혼선",
      "손님/지인별 예외 습관",
    ],
    actionLine: "죄송하지만 기준은 모두에게 동일하게 적용됩니다.",
    shareCard: "나는 기준유실형 사장 / 정이 문제인지 기준이 문제인지 헷갈리는 편",
    cafeShareText:
      "기준유실형 사장 나옴. 정은 많은데 기준이 자꾸 흐려지는 타입이라네",
    supportTone: "정책자금·비용 절감형·운영 매뉴얼/컨설팅",
  },
  "착한아이 총괄형": {
    type: "착한아이 총괄형",
    slug: "people-pleaser",
    oneLiner: "좋은 사람이어야 한다는 압박이 운영 전반을 흔드는 타입",
    description:
      "직원·손님·지인·거래처·심지어 자기 자신에게도 선을 잘 못 긋는 편. 배려와 책임감이 강한 장점이 있지만, 지금 상태가 심해지면 사장 본인부터 먼저 닳아 없어지는 구조가 됨.",
    hiddenCosts: [
      "만성 피로",
      "기준 붕괴",
      "감정 수습에 에너지 과소모",
    ],
    actionLine: "좋은 사람보다, 오래 버티는 사장이 되겠습니다.",
    shareCard: "나는 착한아이 총괄형 사장 / 좋은 사람이어야 한다는 압박이 큰 편",
    cafeShareText:
      "착한아이 총괄형 나왔다… 좋은 사람이어야 한다는 압박이 크다는데 너무 아프네",
    supportTone: "회복형·무료 상담/법률/노무·휴식/병가/재도전",
  },
};

export const resultTypes: ResultType[] = [
  "선긋는 배려형",
  "인정중독형",
  "평화유지형",
  "구원자형",
  "기준유실형",
  "착한아이 총괄형",
];

export function getResultBySlug(slug: string): ResultDefinition | undefined {
  return Object.values(results).find((r) => r.slug === slug);
}
