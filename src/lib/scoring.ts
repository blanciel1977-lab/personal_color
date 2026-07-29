import { COLOR_TYPES, type AxisScores, type ColorType } from '../data/types'
import { QUESTIONS, type Choice } from '../data/questions'

const EMPTY_SCORES: AxisScores = {
  undertone: 0,
  value: 0,
  contrast: 0,
  chroma: 0,
}

const AXES: (keyof AxisScores)[] = [
  'undertone',
  'value',
  'contrast',
  'chroma',
]

export interface MatchResult {
  primary: ColorType
  similar: ColorType[]
  scores: AxisScores
  distances: { type: ColorType; distance: number }[]
  isBorderline: boolean
}

/** 선택지 ID 배열 → 4축 평균 점수 */
export function aggregateScores(
  answers: Record<string, string>,
): AxisScores {
  const sums = { ...EMPTY_SCORES }
  const counts = { ...EMPTY_SCORES }

  for (const question of QUESTIONS) {
    const choiceId = answers[question.id]
    if (!choiceId) continue

    const choice: Choice | undefined = question.choices.find(
      (c) => c.id === choiceId,
    )
    if (!choice) continue

    for (const axis of AXES) {
      const v = choice.scores[axis]
      if (v !== undefined) {
        sums[axis] += v
        counts[axis] += 1
      }
    }
  }

  const result = { ...EMPTY_SCORES }
  for (const axis of AXES) {
    result[axis] = counts[axis] > 0 ? sums[axis] / counts[axis] : 0
  }
  return result
}

function euclidean(a: AxisScores, b: AxisScores): number {
  let sum = 0
  for (const axis of AXES) {
    const d = a[axis] - b[axis]
    sum += d * d
  }
  return Math.sqrt(sum)
}

/** 4축 점수 → 가장 가까운 12타입 + 유사 타입 */
export function matchType(scores: AxisScores): MatchResult {
  const distances = COLOR_TYPES.map((type) => ({
    type,
    distance: euclidean(scores, type.ideal),
  })).sort((a, b) => a.distance - b.distance)

  const primary = distances[0].type
  const similar = distances.slice(1, 3).map((d) => d.type)
  const isBorderline = Math.abs(scores.undertone) < 0.2

  return { primary, similar, scores, distances, isBorderline }
}

export function scoreQuiz(
  answers: Record<string, string>,
): MatchResult {
  return matchType(aggregateScores(answers))
}
