"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { questions } from "@/data/questions";
import { calculateResult, resultToSearchParams, type Answers } from "@/lib/score";

export default function TestPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const isLast = currentIndex === questions.length - 1;

  // 다음 2문항 일러 prefetch (체감 로딩 시간 단축)
  useEffect(() => {
    for (let offset = 1; offset <= 2; offset++) {
      const nextQ = questions[currentIndex + offset];
      if (nextQ?.illustration) {
        const img = new window.Image();
        img.src = nextQ.illustration;
      }
    }
  }, [currentIndex]);

  function handleAnswer(optionId: string) {
    if (submitting) return;
    const newAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(newAnswers);

    if (!isLast) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 180);
      return;
    }

    setSubmitting(true);
    const result = calculateResult(newAnswers);
    const params = resultToSearchParams(result);
    router.push(`/play/good-owner/result/${result.slug}?${params.toString()}`);
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-12">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            {currentIndex + 1} / {questions.length}
          </span>
          <button
            type="button"
            onClick={handleBack}
            disabled={currentIndex === 0 || submitting}
            className="text-slate-500 disabled:text-slate-300 disabled:cursor-not-allowed hover:text-slate-700"
          >
            ← 이전
          </button>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-brand-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {currentQuestion.illustration && (
        <div className="mx-auto mb-6 overflow-hidden rounded-2xl shadow-md" style={{ maxWidth: 320 }}>
          <Image
            src={currentQuestion.illustration}
            alt=""
            width={320}
            height={320}
            priority={currentIndex === 0}
            className="h-auto w-full"
          />
        </div>
      )}

      <h2 className="text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl">
        {currentQuestion.text}
      </h2>
      {currentQuestion.subtitle && (
        <p className="mt-2 text-sm text-slate-500">{currentQuestion.subtitle}</p>
      )}

      <div className="mt-8 space-y-3">
        {currentQuestion.options.map((option) => {
          const isSelected = answers[currentQuestion.id] === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleAnswer(option.id)}
              disabled={submitting}
              className={[
                "w-full rounded-xl border p-4 text-left transition disabled:cursor-not-allowed",
                isSelected
                  ? "border-brand-600 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-brand-300 hover:bg-brand-50/50",
              ].join(" ")}
            >
              <span className="mr-2 inline-block w-6 font-semibold text-brand-600">
                {option.id}.
              </span>
              <span className="text-slate-800">{option.label}</span>
            </button>
          );
        })}
      </div>

      {submitting && (
        <p className="mt-8 text-center text-sm text-slate-500">결과 계산 중...</p>
      )}

      <p className="mt-12 text-center text-xs text-slate-400">
        ※ 이 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
      </p>
    </div>
  );
}
