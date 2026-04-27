import type { BusinessTypeQuestion } from "@/types/business-type";

export const questions: BusinessTypeQuestion[] = [
  {
    id: "q1",
    illustration: "/illustrations/business-type/q1.png",
    text: "1호점 매출이 이제 좀 안정됐다. 딱 1년 뒤 그림, 뭐부터 본다?",
    options: [
      { id: "A", label: "2호점 자리부터 본다. 브랜드는 지금부터 늘리는 거지.", score: { conqueror: 2 } },
      { id: "B", label: "한 군데 더 묶이긴 싫다. 팝업이나 배달, 다른 채널부터 찍어본다.", score: { nomad: 2 } },
      { id: "C", label: "지금 메뉴 완성도가 아직 덜 찼다. 대표 메뉴부터 더 갈아 넣는다.", score: { craftsman: 2, farmer: 1 } },
      { id: "D", label: "확장보다 단골이 먼저다. 동네에서 오래 가는 가게로 박아둔다.", score: { farmer: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q2",
    illustration: "/illustrations/business-type/q2.png",
    text: "재료값이 또 올랐다. 메뉴판 다시 봐야 할 타이밍이다. 당신은?",
    options: [
      { id: "A", label: "원가표부터 다시 본다. 얼마 올려야 안 망하는지 숫자로 깐다.", score: { strategist: 1, craftsman: 1 } },
      { id: "B", label: "양 줄이느니 차라리 품질 지킨다. 메뉴 구성을 다시 손본다.", score: { craftsman: 2 } },
      { id: "C", label: "그냥 올리면 욕먹는다. 아예 프리미엄 한정 메뉴로 판을 바꾼다.", score: { adventurer: 2 } },
      { id: "D", label: "버리는 재료부터 잡는다. 맛 안 망가지는 선에서 제조 공정 다이어트.", score: { craftsman: 2, strategist: 1 } },
    ],
  },
  {
    id: "q3",
    illustration: "/illustrations/business-type/q3.png",
    text: "토요일 점심 앞두고 알바가 갑자기 못 나온다. 머리 하얘지는 그 순간, 당신은?",
    options: [
      { id: "A", label: "일단 지인망 풀가동. 옆가게, 예전 알바, 단기 인력 다 전화한다.", score: { collaborator: 2 } },
      { id: "B", label: "운영시간 줄여도 리듬은 지킨다. 무리하지 말고 오늘은 안전운전.", score: { farmer: 2 } },
      { id: "C", label: "바로 역할 재배치하고 동선 다시 짠다. 사람이 적으면 방식이 바뀌어야지.", score: { strategist: 2 } },
      { id: "D", label: "혼자 버티지 말고 가족이나 고정으로 도와줄 사람 체계부터 만든다.", score: { collaborator: 2, farmer: 1 } },
    ],
  },
  {
    id: "q4",
    illustration: "/illustrations/business-type/q4.png",
    text: "SNS에서 비슷한 메뉴가 터졌다. 손님들도 슬슬 그거 없냐고 묻는다. 당신은?",
    options: [
      { id: "A", label: "일단 이번 주 한정으로 올린다. 반응 오면 그때 생각한다.", score: { adventurer: 2 } },
      { id: "B", label: "매장 고정 메뉴 말고 팝업이나 배달 채널에서 먼저 던져본다.", score: { nomad: 2 } },
      { id: "C", label: "검색량, 저장 수, 주문 전환부터 보고 들어간다.", score: { strategist: 2 } },
      { id: "D", label: "같은 콘셉트로 비슷하게는 안 간다. 우리 식으로 변형해서 빠르게 테스트한다.", score: { adventurer: 2, strategist: 1 } },
    ],
  },
  {
    id: "q5",
    illustration: "/illustrations/business-type/q5.png",
    text: "오후 3시만 되면 매장이 갑자기 조용해진다. 이 죽은 시간, 어떻게 살릴까?",
    options: [
      { id: "A", label: "동네 모임 하나 만든다. 소소한 클래스든 번개든 사람 모이면 매출도 따라온다.", score: { collaborator: 2 } },
      { id: "B", label: "조급하게 안 흔든다. 이 시간은 준비와 단골 응대 시간으로 굳힌다.", score: { farmer: 2 } },
      { id: "C", label: "한가한 시간 전용 사이드나 해피타임 메뉴를 낸다.", score: { adventurer: 2 } },
      { id: "D", label: "혼자 하지 말고 근처 가게랑 묶음 이벤트를 깐다.", score: { collaborator: 2, adventurer: 1 } },
    ],
  },
  {
    id: "q6",
    illustration: "/illustrations/business-type/q6.png",
    text: "단골이 요즘 가격 너무 오른 거 아니냐고 툴툴댄다. 당신의 반응은?",
    options: [
      { id: "A", label: "싼 재료로는 안 간다. 차라리 왜 비싼지 제대로 설명한다.", score: { craftsman: 2 } },
      { id: "B", label: "단품, 세트, 소량 옵션으로 가격대를 쪼개서 선택지를 만든다.", score: { strategist: 2 } },
      { id: "C", label: "동네 장사면 너무 세게 못 간다. 기본 라인은 지킬 수 있게 남긴다.", score: { farmer: 2 } },
      { id: "D", label: "불만 포인트 모아보고 메뉴판 문구랑 구성을 먼저 손본다.", score: { strategist: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q7",
    illustration: "/illustrations/business-type/q7.png",
    text: "바로 옆에 비슷한 가게가 오픈했다. 그것도 간판 빡세게 달고. 당신은?",
    options: [
      { id: "A", label: "한 집 더 낼 생각까지 한다. 먼저 깃발 꽂는 쪽이 이긴다.", score: { conqueror: 2 } },
      { id: "B", label: "우린 단골로 버틴다. 인사, 응대, 기억력으로 뿌리 더 박는다.", score: { farmer: 2 } },
      { id: "C", label: "상대가 뻔하면 난 새 걸 던진다. 메뉴든 이벤트든 먼저 튄다.", score: { adventurer: 2 } },
      { id: "D", label: "정면승부보다 간판, 패키지, 동선 다 바꿔서 체급 차를 만든다.", score: { conqueror: 2, adventurer: 1 } },
    ],
  },
  {
    id: "q8",
    illustration: "/illustrations/business-type/q8.png",
    text: "연휴 장사, 열까 말까 단톡방까지 시끄럽다. 당신은?",
    options: [
      { id: "A", label: "원래 쉬는 날이면 쉰다. 팀도 리듬이 있어야 오래 간다.", score: { farmer: 2 } },
      { id: "B", label: "예약, 유동, 날씨 보고 계산기 두드린 뒤 열지 말지 정한다.", score: { strategist: 2 } },
      { id: "C", label: "풀오픈 말고 시간 줄이거나 야간만 연다. 유연하게 간다.", score: { nomad: 2 } },
      { id: "D", label: "가족, 지인, 근처 가게랑 같이 굴려서 축제처럼 판다.", score: { collaborator: 2, nomad: 1 } },
    ],
  },
  {
    id: "q9",
    illustration: "/illustrations/business-type/q9.png",
    text: "거래처가 우리랑 독점으로 가자며 조건을 던진다. 이 제안, 어떻게 볼까?",
    options: [
      { id: "A", label: "물량이랑 조건 좋으면 묶는다. 스케일 만들 기회면 잡아야지.", score: { conqueror: 2 } },
      { id: "B", label: "한 군데에 목숨 못 건다. 선택지 남겨두는 게 마음 편하다.", score: { nomad: 2 } },
      { id: "C", label: "거래처랑 같이 신메뉴나 공동 프로모션까지 그려본다.", score: { collaborator: 2 } },
      { id: "D", label: "독점은 부담이다. 대신 기간 짧게 테스트 계약부터 끊어본다.", score: { nomad: 2, conqueror: 1 } },
    ],
  },
  {
    id: "q10",
    illustration: "/illustrations/business-type/q10.png",
    text: "가게 분위기가 좀 낡아 보인다. 손님도 사진 잘 안 찍는다. 예산은 한정. 당신은?",
    options: [
      { id: "A", label: "요즘 감성으로 확 바꾼다. 사진 찍히는 맛이 있어야 한다.", score: { adventurer: 2 } },
      { id: "B", label: "유행 말고 완성도다. 오래 가는 디테일만 손본다.", score: { craftsman: 2 } },
      { id: "C", label: "지역 작가나 단골이랑 같이 꾸민다. 공간도 관계의 연장선이다.", score: { collaborator: 2 } },
      { id: "D", label: "전면 리뉴얼 말고 포토존 하나만 세게 꽂아본다.", score: { adventurer: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q11",
    illustration: "/illustrations/business-type/q11.png",
    text: "별점 테러급 후기가 하나 크게 퍼졌다. 그날 밤, 당신은?",
    options: [
      { id: "A", label: "고객이랑 바로 통화한다. 먼저 풀고 그다음 공지한다.", score: { collaborator: 2 } },
      { id: "B", label: "주문 기록, CCTV, 직원 동선까지 확인해서 팩트부터 정리한다.", score: { strategist: 2 } },
      { id: "C", label: "조용히 묻히기보다 새 콘텐츠로 분위기 전환을 건다.", score: { adventurer: 2 } },
      { id: "D", label: "사과문도 혼자 쓰지 않는다. 직원, 파트너랑 같이 후속 대응을 맞춘다.", score: { collaborator: 2, strategist: 1 } },
    ],
  },
  {
    id: "q12",
    illustration: "/illustrations/business-type/q12.png",
    text: "백화점 팝업 제안이 왔다. 잘되면 2호점 얘기도 붙는다. 당신은?",
    options: [
      { id: "A", label: "반응 괜찮으면 바로 2호점 루트 탄다.", score: { conqueror: 2 } },
      { id: "B", label: "고정 입점보다 팝업으로 맛만 본다. 묶이는 건 나중이다.", score: { nomad: 2 } },
      { id: "C", label: "브랜드 톤 망가지면 안 한다. 공간보다 퀄리티가 먼저다.", score: { craftsman: 2 } },
      { id: "D", label: "일단 짧게 들어가 보고 동선, 고객층, 운영감을 다 체험해본다.", score: { nomad: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q13",
    illustration: "/illustrations/business-type/q13.png",
    text: "점심 피크마다 줄이 너무 길다. 손님 표정이 슬슬 굳는다. 당신은?",
    options: [
      { id: "A", label: "주문 방식부터 뜯어고친다. 선결제, 픽업 동선, 작업 분업 바로 손본다.", score: { strategist: 1, conqueror: 1 } },
      { id: "B", label: "옆가게 좌석, 외부 픽업존, 공동 인력까지 주변이랑 같이 풀어본다.", score: { collaborator: 2 } },
      { id: "C", label: "기다리는 줄이 아깝다. 포장 전용 창구나 서브 라인 하나 더 낸다.", score: { conqueror: 2 } },
      { id: "D", label: "가게 안에서 못 풀면 테이블 응대 인원부터 늘려서 현장 밀도를 낮춘다.", score: { collaborator: 2, strategist: 1 } },
    ],
  },
  {
    id: "q14",
    illustration: "/illustrations/business-type/q14.png",
    text: "돈은 벌리는데 솔직히 좀 질린다. 장사가 루틴처럼 느껴질 때, 당신은?",
    options: [
      { id: "A", label: "새 브랜드나 다른 업종 한 번 더 판다. 체급 올릴 때다.", score: { conqueror: 2 } },
      { id: "B", label: "같은 가게 반복은 좀 답답하다. 다른 동네나 시즌 팝업으로 바람 쐰다.", score: { nomad: 2 } },
      { id: "C", label: "돈은 벌어도 내공은 아직이다. 기술이나 레시피를 더 파고든다.", score: { craftsman: 2 } },
      { id: "D", label: "아예 콘셉트를 살짝 틀어서 새 버전의 나를 시험한다.", score: { nomad: 2, conqueror: 1 } },
    ],
  },
  {
    id: "q15",
    illustration: "/illustrations/business-type/q15.png",
    text: "지역 축제나 브랜드 콜라보 제안이 왔다. 보기엔 재밌는데 손도 많이 갈 듯. 당신은?",
    options: [
      { id: "A", label: "재밌어 보이면 간다. 이런 판에서 바이럴도 터진다.", score: { adventurer: 2 } },
      { id: "B", label: "누구랑 하느냐가 중요하다. 사람 궁합 맞으면 절반은 먹고 간다.", score: { collaborator: 2 } },
      { id: "C", label: "노출만 보고 못 간다. 매출, 재방문, 인건비 계산부터 한다.", score: { strategist: 2 } },
      { id: "D", label: "동네 팀들이랑 같이 묶어서 더 큰 판으로 키운다.", score: { collaborator: 2, adventurer: 1 } },
    ],
  },
  {
    id: "q16",
    illustration: "/illustrations/business-type/q16.png",
    text: "비만 오면 매출이 축 처진다. 시즌마다 반복되는 이 장면, 당신은?",
    options: [
      { id: "A", label: "날씨별 매출 패턴 보고 인력, 발주, 광고 시간을 다시 짠다.", score: { strategist: 2 } },
      { id: "B", label: "비 오는 날 전용 메뉴나 문구를 바로 붙인다. 지금 반응 먹는 게 우선이다.", score: { adventurer: 2 } },
      { id: "C", label: "원래 오는 손님 안 놓치는 게 먼저다. 배달 반경이든 응대든 기본부터 챙긴다.", score: { farmer: 2 } },
      { id: "D", label: "그날그날 흔들리기보다 시즌 루틴을 만들어 둔다.", score: { farmer: 2, strategist: 1 } },
    ],
  },
  {
    id: "q17",
    illustration: "/illustrations/business-type/q17.png",
    text: "메뉴가 늘어날 대로 늘어서 주방이 매일 전쟁이다. 이쯤 되면 당신은?",
    options: [
      { id: "A", label: "대표 메뉴만 남긴다. 잘하는 것만 남겨야 주방이 산다.", score: { craftsman: 2 } },
      { id: "B", label: "메뉴판보다 운영표를 먼저 본다. 조리시간, 회전율 낮은 애들부터 자른다.", score: { strategist: 2 } },
      { id: "C", label: "메인 매장에 다 넣지 말고 일부는 팝업이나 온라인으로 뺀다.", score: { nomad: 2 } },
      { id: "D", label: "계절 따라 메뉴판 자체를 가볍게 돌린다. 고정 집착 안 한다.", score: { nomad: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q18",
    illustration: "/illustrations/business-type/q18.png",
    text: "SNS 올려도 조회수는 조용하고 저장수도 없다. 감이 안 올 때, 당신은?",
    options: [
      { id: "A", label: "릴스든 밈이든 지금 뜨는 포맷으로 바로 갈아탄다.", score: { adventurer: 2 } },
      { id: "B", label: "혼자 찍지 말고 손님, 단골, 동네 크리에이터랑 같이 만든다.", score: { collaborator: 2 } },
      { id: "C", label: "과장 말고 만드는 과정, 손맛, 디테일을 보여준다.", score: { craftsman: 2 } },
      { id: "D", label: "반응 없으면 더 짧고 더 세게 간다. 후킹 문구부터 갈아엎는다.", score: { adventurer: 2, craftsman: 1 } },
    ],
  },
  {
    id: "q19",
    illustration: "/illustrations/business-type/q19.png",
    text: "계약 갱신 시즌이다. 건물주는 길게 묶자 하고, 당신 머리는 복잡하다. 당신은?",
    options: [
      { id: "A", label: "오래 갈 자리면 길게 묶는다. 이 동네에서 이름이 쌓이는 게 자산이다.", score: { farmer: 2 } },
      { id: "B", label: "같은 자리라도 더 크게 쓸 방법을 본다. 확장 가능하면 묶을 만하다.", score: { conqueror: 2 } },
      { id: "C", label: "장사 감은 변한다. 계약은 짧게, 이동성은 길게 간다.", score: { nomad: 2 } },
      { id: "D", label: "일단 1년만 더 보고, 매장 이전 카드도 계속 쥐고 있는다.", score: { nomad: 2, farmer: 1 } },
    ],
  },
  {
    id: "q20",
    illustration: "/illustrations/business-type/q20.png",
    text: "지금부터 3년 뒤, 내가 제일 되고 싶은 사장님 그림은?",
    options: [
      { id: "A", label: "내 이름 걸고 여러 지점을 굴리는 사장님.", score: { conqueror: 2 } },
      { id: "B", label: "한곳에 안 묶이고 채널이랑 지역을 넘나드는 사장님.", score: { nomad: 2 } },
      { id: "C", label: "딱 한 가게여도 여기만의 실력이 말해주는 사장님.", score: { craftsman: 2 } },
      { id: "D", label: "동네에서 오래 사랑받고 현금흐름이 안정적인 사장님.", score: { farmer: 2 } },
    ],
  },
];
