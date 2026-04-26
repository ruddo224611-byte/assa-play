import type { ResultDefinition, ResultType } from "@/types/quiz";

export const results: Record<ResultType, ResultDefinition> = {
  "선긋기 마스터": {
    type: "선긋기 마스터",
    slug: "boundary-keeper",
    emoji: "🛡️",
    illustration: "/illustrations/boundary-keeper.png",
    oneLiner: "배려는 하는데 기준은 안 무너지는 타입",
    description: `너 = 친절한데 호락호락 안 함.
싫은 손님 싫다고 말함.
직원한테 할 말 함.
가격 올려야 하면 올림.
그래서 가게가 오래 가는 거임.

가끔 차갑다는 소리 듣지만 통장은 따뜻함.`,
    shareCard: "나는 선긋기 마스터 사장 / 기준 안 무너짐 / 통장 안전",
    cafeShareText:
      "나 선긋기 마스터 사장 나옴. 배려는 하는데 기준은 안 무너지는 편이라는데 ㅋㅋ 너도 해봐",
    longDescription: "",
    solution: "",
  },
  "굿보이 사장형": {
    type: "굿보이 사장형",
    slug: "approval-seeker",
    emoji: "🐶",
    illustration: "/illustrations/approval-seeker.png",
    oneLiner: "손님한테 좋게 보이려다 본인만 갈리는 타입",
    description: `너 = 카운터 뒤에서 항상 웃고 있음.

가격 인상? "손님이 싫어할까봐..."
직원 피드백? "분위기 망칠까봐..."
메뉴에 없는 부탁? "단골이라서..."

결과:
손님 → "사장님 좋다"
사장님 통장 → "?????"`,
    shareCard: "나는 굿보이 사장 / 좋은 사람 콤플렉스 / 통장 안 좋음",
    cafeShareText:
      "나 굿보이 사장 나옴 ㅋㅋ 손님한테 좋게 보이려다 본인만 갈리는 타입이라는데… 인정하기 싫지만 맞음 ㅠㅠ",
    longDescription: "",
    solution: "",
  },
  "입꾹닫 사장형": {
    type: "입꾹닫 사장형",
    slug: "peacekeeper",
    emoji: "🤐",
    illustration: "/illustrations/peacekeeper.png",
    oneLiner: "작은 갈등 피하다가 큰 거 한 방에 터지는 타입",
    description: `너 = 분위기 망치는 거 죽기보다 싫음.

말해야 할 때 못 함.
거래처 한 마디 → 못 함.
직원 한 마디 → 못 함.
손님 한 마디 → 못 함.

그러다 한 달 뒤에 폭발하거나 혼자 속앓이.
직원·거래처·손님 다 합쳐 매일 작은 인내 적금 중.`,
    shareCard: "나는 입꾹닫 사장 / 분위기 망칠까봐 할 말 못 함",
    cafeShareText:
      "입꾹닫 사장 나옴. 분위기 망칠까봐 할 말 미루는 타입이라는데 너무 정확해서 기분 나쁨ㅋㅋ",
    longDescription: "",
    solution: "",
  },
  "슈퍼맨 사장형": {
    type: "슈퍼맨 사장형",
    slug: "rescuer",
    emoji: "🦸",
    illustration: "/illustrations/rescuer.png",
    oneLiner: "문제 생기면 시스템보다 본인이 먼저 뛰어드는 타입",
    description: `너 = 빈틈 보이면 몸이 먼저 움직임.

책임감 만렙.
단기적으론 가게 굴러감.
장기적으론 사장 없으면 멈춤.

본인이 1인 인질.
"내가 안 하면 누가 해" 가 입버릇.`,
    shareCard: "나는 슈퍼맨 사장 / 책임감 만렙 / 본인 갈려나가는 중",
    cafeShareText:
      "슈퍼맨 사장 나옴 ㅋㅋ 문제 생기면 시스템보다 내가 먼저 메우는 타입이래. 휴가 못 가는 이유 찾음",
    longDescription: "",
    solution: "",
  },
  "기준없음 사장형": {
    type: "기준없음 사장형",
    slug: "drift",
    emoji: "🌪️",
    illustration: "/illustrations/drift.png",
    oneLiner: "정 많고 눈치 빠른데 기준이 자꾸 없어지는 타입",
    description: `너 = 마음이 너무 좋음.

그래서 운영시간·할인·서비스·지인 응대 전부 예외 투성이.
본인도 어디서 어디까지 봐줘야 할지 모름.

손님 A: "오늘만요"
손님 B: "이번만요"
지인 C: "친구잖아"

…가게 정체성도 흐려지는 중.`,
    shareCard: "나는 기준없음 사장 / 정 많아서 기준 사라지는 중",
    cafeShareText:
      "기준없음 사장 나옴. 정은 많은데 기준이 자꾸 흐려지는 타입이라네 ㅋㅋ 진짜 그럼",
    longDescription: "",
    solution: "",
  },
  "천사 사장형": {
    type: "천사 사장형",
    slug: "people-pleaser",
    emoji: "😇",
    illustration: "/illustrations/people-pleaser.png",
    oneLiner: "좋은 사람이어야 한다는 압박이 가게 전체를 흔드는 타입",
    description: `너 = 직원·손님·지인·거래처·심지어 본인한테까지 선을 못 그음.

배려 만렙 + 책임감 만렙 = 본인이 가장 먼저 갈림.

남들이 보면 "사장님 진짜 좋은 분"
사장님 본인은 "나 왜 이렇게 힘들지"

이대로면 1년 안에 번아웃 직행.`,
    shareCard: "나는 천사 사장 / 좋은 사람 압박 만렙 / 번아웃 직전",
    cafeShareText:
      "천사 사장 나왔다… 좋은 사람이어야 한다는 압박이 가게 전체를 흔드는 타입이래 ㅠㅠ 너무 아프네",
    longDescription: "",
    solution: "",
  },
};

export const resultTypes: ResultType[] = [
  "선긋기 마스터",
  "굿보이 사장형",
  "입꾹닫 사장형",
  "슈퍼맨 사장형",
  "기준없음 사장형",
  "천사 사장형",
];

export function getResultBySlug(slug: string): ResultDefinition | undefined {
  return Object.values(results).find((r) => r.slug === slug);
}
