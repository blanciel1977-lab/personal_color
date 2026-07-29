interface HomePageProps {
  onStart: () => void
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-12">
      <div className="animate-fade-up">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
          Personal Color
        </p>
        <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          나의 퍼스널
          <br />
          컬러는?
        </h1>
        <p className="mb-8 max-w-sm text-base leading-relaxed text-[var(--color-muted)]">
          17가지 질문으로 12가지 시즌 타입 중 나에게 맞는 색을 찾아보세요.
          언더톤·명도·대비·채도를 종합해 진단합니다.
        </p>
      </div>

      <div className="animate-fade-up stagger-1 mb-10 grid grid-cols-2 gap-3">
        {[
          { label: '언더톤', desc: '웜 / 쿨' },
          { label: '명도', desc: '라이트 / 딥' },
          { label: '대비', desc: '로우 / 하이' },
          { label: '채도', desc: '클리어 / 뮤트' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-[var(--color-line)] backdrop-blur-sm"
          >
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              {item.label}
            </p>
            <p className="text-xs text-[var(--color-muted)]">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-2">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-2xl bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition hover:bg-[var(--color-accent-dark)] active:scale-[0.98]"
        >
          진단 시작하기
        </button>
        <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
          약 3분 · 참고용 자가 진단입니다
        </p>
      </div>
    </div>
  )
}
