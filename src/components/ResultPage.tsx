import type { MatchResult } from '../lib/scoring'
import { SEASON_ACCENT, SEASON_LABEL } from '../data/types'
import { ColorPalette } from './ColorPalette'

interface ResultPageProps {
  result: MatchResult
  onRetry: () => void
}

export function ResultPage({ result, onRetry }: ResultPageProps) {
  const { primary, similar, isBorderline } = result
  const accent = SEASON_ACCENT[primary.season]

  return (
    <div className="mx-auto w-full max-w-lg px-5 py-10">
      <div className="animate-scale-in mb-8 text-center">
        <p className="mb-2 text-sm font-semibold tracking-[0.14em] uppercase"
          style={{ color: accent }}
        >
          {SEASON_LABEL[primary.season]} · {primary.nameEn}
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--color-ink)]">
          {primary.nameKo}
        </h1>
        <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-[var(--color-muted)]">
          {primary.description}
        </p>
      </div>

      {isBorderline && (
        <div className="animate-fade-up mb-6 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200">
          언더톤이 웜/쿨 경계에 가깝습니다. 유사 타입도 함께 참고해 보세요.
        </div>
      )}

      <div className="animate-fade-up stagger-1 mb-6 overflow-hidden rounded-3xl bg-white/80 p-5 ring-1 ring-[var(--color-line)] backdrop-blur-sm">
        <div
          className="mb-4 h-2 w-16 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <ColorPalette colors={primary.bestColors} label="추천 컬러" />
        <div className="mt-5">
          <ColorPalette
            colors={primary.avoidColors}
            label="피하면 좋은 컬러"
            size="sm"
          />
        </div>
      </div>

      <div className="animate-fade-up stagger-2 mb-6 rounded-3xl bg-white/80 p-5 ring-1 ring-[var(--color-line)]">
        <h3 className="mb-3 text-base font-semibold text-[var(--color-ink)]">
          이런 특징이 있어요
        </h3>
        <ul className="space-y-2">
          {primary.traits.map((t) => (
            <li
              key={t}
              className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: accent }}
              />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fade-up stagger-3 mb-6 grid gap-3">
        <div className="rounded-3xl bg-white/80 p-5 ring-1 ring-[var(--color-line)]">
          <h3 className="mb-2 text-base font-semibold text-[var(--color-ink)]">
            메이크업 팁
          </h3>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {primary.makeupTips}
          </p>
        </div>
        <div className="rounded-3xl bg-white/80 p-5 ring-1 ring-[var(--color-line)]">
          <h3 className="mb-2 text-base font-semibold text-[var(--color-ink)]">
            패션 팁
          </h3>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {primary.fashionTips}
          </p>
        </div>
      </div>

      {primary.celebrities.length > 0 && (
        <div className="animate-fade-up stagger-3 mb-6 rounded-3xl bg-white/80 p-5 ring-1 ring-[var(--color-line)]">
          <h3 className="mb-2 text-base font-semibold text-[var(--color-ink)]">
            참고 연예인
          </h3>
          <p className="text-sm text-[var(--color-muted)]">
            {primary.celebrities.join(' · ')}
          </p>
        </div>
      )}

      <div className="animate-fade-up stagger-4 mb-8">
        <h3 className="mb-3 text-base font-semibold text-[var(--color-ink)]">
          유사한 타입
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {similar.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-white/70 p-4 ring-1 ring-[var(--color-line)]"
            >
              <p
                className="mb-1 text-xs font-semibold"
                style={{ color: SEASON_ACCENT[t.season] }}
              >
                {SEASON_LABEL[t.season]}
              </p>
              <p className="text-sm font-semibold text-[var(--color-ink)]">
                {t.nameKo}
              </p>
              <div className="mt-3 flex gap-1.5">
                {t.bestColors.slice(0, 4).map((c) => (
                  <div
                    key={c}
                    className="h-5 w-5 rounded-full ring-1 ring-black/8"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onRetry}
        className="mb-4 w-full rounded-2xl bg-[var(--color-accent)] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition hover:bg-[var(--color-accent-dark)]"
      >
        다시 진단하기
      </button>
      <p className="text-center text-xs leading-relaxed text-[var(--color-muted)]">
        본 결과는 참고용 자가 진단입니다.
        <br />
        전문 퍼스널컬러 진단을 대체하지 않습니다.
      </p>
    </div>
  )
}
