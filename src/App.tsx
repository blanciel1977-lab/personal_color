import { useState } from 'react'
import { QUESTIONS } from './data/questions'
import { scoreQuiz, type MatchResult } from './lib/scoring'
import { HomePage } from './components/HomePage'
import { QuizPage } from './components/QuizPage'
import { ResultPage } from './components/ResultPage'

type Screen = 'home' | 'quiz' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<MatchResult | null>(null)

  function start() {
    setStep(0)
    setAnswers({})
    setResult(null)
    setScreen('quiz')
  }

  function handleAnswer(questionId: string, choiceId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceId }))
  }

  function handleNext() {
    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1)
      return
    }
    setResult(scoreQuiz(answers))
    setScreen('result')
  }

  function handlePrev() {
    if (step > 0) setStep((s) => s - 1)
  }

  return (
    <main className="flex min-h-svh flex-1 flex-col">
      {screen === 'home' && <HomePage onStart={start} />}
      {screen === 'quiz' && (
        <QuizPage
          step={step}
          answers={answers}
          onAnswer={handleAnswer}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
      {screen === 'result' && result && (
        <ResultPage result={result} onRetry={start} />
      )}
    </main>
  )
}
