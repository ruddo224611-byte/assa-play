"use client";

import { useState } from "react";

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: object) => void;
      };
    };
  }
}

const NAVER_CAFE_URL = "https://cafe.naver.com/jihosoccer123";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
};

export default function ShareButtons({ title, description, imageUrl }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(
        "링크를 복사해주세요 (Ctrl+C / Cmd+C)",
        window.location.href,
      );
    }
  }

  function openNaverCafe() {
    window.open(NAVER_CAFE_URL, "_blank", "noopener,noreferrer");
  }

  function shareKakao() {
    const Kakao = window.Kakao;
    if (!Kakao) {
      alert("카카오 공유를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }
    if (!Kakao.isInitialized()) {
      const key = process.env.NEXT_PUBLIC_KAKAO_KEY;
      if (!key) {
        alert("카카오 공유 설정이 아직 준비되지 않았습니다.");
        return;
      }
      Kakao.init(key);
    }

    const origin = window.location.origin;
    const fullImageUrl = imageUrl ? new URL(imageUrl, origin).href : undefined;

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description,
        imageUrl: fullImageUrl,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "테스트 해보기",
          link: {
            mobileWebUrl: new URL("/", origin).href,
            webUrl: new URL("/", origin).href,
          },
        },
      ],
    });
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      <button
        type="button"
        onClick={copyLink}
        className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-2 py-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <span className="text-2xl">{copied ? "✅" : "🔗"}</span>
        <span>{copied ? "복사됨!" : "링크 복사"}</span>
      </button>

      <button
        type="button"
        onClick={openNaverCafe}
        className="flex flex-col items-center justify-center gap-1 rounded-xl border-0 px-2 py-4 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
        style={{ backgroundColor: "#03C75A" }}
      >
        <span className="text-2xl font-black">N</span>
        <span>카페 공유</span>
      </button>

      <button
        type="button"
        onClick={shareKakao}
        className="flex flex-col items-center justify-center gap-1 rounded-xl border-0 px-2 py-4 text-xs font-semibold shadow-sm transition hover:opacity-90"
        style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}
      >
        <span className="text-2xl">💬</span>
        <span>카카오톡</span>
      </button>
    </div>
  );
}
