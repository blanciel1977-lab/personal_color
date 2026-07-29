import { QUESTIONS, CATEGORY_LABEL } from '../data/questions'
import { ProgressBar } from './ProgressBar'

interface QuizPageProps {
  step: number
  answers: Record<string, string>
  onAnswer: (questionId: string, choiceId: string) => void
  onPrev: () => void
  onNext: () => void
}

export function QuizPage({
  step,
  answers,
  onAnswer,
  onPrev,
  onNext,
}: QuizPageProps) {
  const question = QUESTIONS[step]
  const selected = answers[question.id]
  const isLast = step === QUESTIONS.length - 1

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-5 py-8">
      <ProgressBar current={step + 1} total={QUESTIONS.length} />

      <div key={question.id} className="animate-fade-up mt-8 flex flex-1 flex-col">
        <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-blush)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
          {CATEGORY_LABEL[question.category]}
        </span>

        <h2 className="mb-2 text-2xl leading-snug font-bold tracking-tight text-[var(--color-ink)]">
          {question.text}
        </h2>
        {question.hint && (
          <p className="mb-6 text-sm text-[var(--color-muted)]">
            {question.hint}
          </p>
        )}
        {!question.hint && <div className="mb-6" />}

        <div className="flex flex-col gap-3">
          {question.choices.map((choice) => {
            const isActive = selected === choice.id
            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => onAnswer(question.id, choice.id)}
                className={`rounded-2xl px-5 py-4 text-left text-[15px] leading-snug font-medium transition ring-1 ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white ring-[var(--color-accent)] shadow-md shadow-[var(--color-accent)]/20'
                    : 'bg-white/80 text-[var(--color-ink)] ring-[var(--color-line)] hover:ring-[var(--color-accent)]/40 hover:bg-white'
                }`}
              >
                {choice.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={step === 0}
          className="rounded-2xl px-5 py-3.5 text-sm font-semibold text-[var(--color-muted)] ring-1 ring-[var(--color-line)] transition enabled:hover:bg-white disabled:opacity-40"
        >
          이전
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="flex-1 rounded-2xl bg-[var(--color-accent)] px-5 py-3.5 text-sm font-semibold text-white transition enabled:hover:bg-[var(--color-accent-dark)] disabled:opacity-40"
        >
          {isLast ? '결과 보기' : '다음'}
        </button>
      </div>
    </div>
  )
}
