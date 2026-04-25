export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <p className="text-xs leading-relaxed text-slate-500">
          이 사이트의 테스트는 재미와 자기점검을 위한 콘텐츠이며, 의학적·심리학적 진단이 아닙니다.
        </p>
        <p className="mt-2 text-xs text-slate-400">
          © {new Date().getFullYear()} 아싸 놀이터 · play.assasup.com
        </p>
      </div>
    </footer>
  );
}
