import type { BurnoutQuestion } from "@/types/burnout";

export const questions: BurnoutQuestion[] = [
  {
    id: "q1",
    text: "최근 1~2주, 마감하고 집에 와서 누웠는데도 머리가 계속 돌아가서 잠이 쉽게 안 오거나 자다 자주 깼다.",
    area: "body",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q2",
    text: "최근 1~2주, 잠을 자도 피곤이 안 풀리고 아침부터 이미 체력이 바닥난 느낌이었다.",
    area: "body",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q3",
    text: "최근 1~2주, 바쁠 때마다 속이 더부룩하거나 소화가 꼬여서 밥 먹는 것도 귀찮게 느껴졌다.",
    area: "body",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q4",
    text: "최근 1~2주, 정산하다가 머리가 지끈거리거나 어깨, 목이 너무 뭉쳐서 몸이 늘 긴장 상태였다.",
    area: "body",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q5",
    text: "최근 1~2주, 가게 문 열기 전부터 벌써 기운이 빠지고 오늘도 버텨야 하나 싶었다.",
    area: "emotion",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q6",
    text: "최근 1~2주, 손님 빠진 시간이나 마감 후에도 매출, 비용, 내일 장사 걱정이 머리에서 안 떠났다.",
    area: "emotion",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q7",
    text: "최근 1~2주, 평소엔 넘길 말에도 예민하게 반응하고 직원이나 손님한테 짜증이 확 올라왔다.",
    area: "emotion",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q8",
    text: "최근 1~2주, 단골이 와도 반갑지가 않고 좋은 일이 있어도 감정이 무덤덤했다.",
    area: "emotion",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q9",
    text: "최근 1~2주, 직원이 말을 걸거나 확인 요청을 하면 괜히 귀찮고 혼자 있는 게 더 편했다.",
    area: "relationship",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q10",
    text: "최근 1~2주, 손님 응대할 때 겉으론 웃어도 속으론 빨리 끝났으면 좋겠다는 마음이 컸다.",
    area: "relationship",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q11",
    text: "최근 1~2주, 집에 가서 가족이나 가까운 사람과 대화하기보다 그냥 혼자 멍 때리거나 말을 피했다.",
    area: "relationship",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q12",
    text: "최근 1~2주, 예전엔 바로 하던 발주, 정리, 콘텐츠 업로드 같은 일이 자꾸 미뤄졌다.",
    area: "work",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q13",
    text: "최근 1~2주, 주문 확인, 정산, 재고 체크 같은 익숙한 일에서도 집중이 안 되고 실수가 늘었다.",
    area: "work",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q14",
    text: "최근 1~2주, 가게를 굴리긴 굴리는데 예전처럼 더 잘해보자 하는 마음이 잘 안 올라왔다.",
    area: "work",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
  {
    id: "q15",
    text: "최근 1~2주, 하루 종일 바빴는데도 정작 중요한 일은 못 끝내서 괜히 허무하고 효율이 떨어진 느낌이었다.",
    area: "work",
    options: [
      { id: "A", label: "거의 없음", score: 0 },
      { id: "B", label: "가끔 그럼", score: 1 },
      { id: "C", label: "자주 그럼", score: 2 },
      { id: "D", label: "매일 그럼", score: 3 },
    ],
  },
];
