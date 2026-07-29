import type { AxisScores } from './types'

export type QuestionCategory =
  | 'undertone'
  | 'value'
  | 'contrast'
  | 'chroma'
  | 'palette'

export interface Choice {
  id: string
  label: string
  scores: Partial<AxisScores>
}

export interface Question {
  id: string
  category: QuestionCategory
  text: string
  hint?: string
  choices: Choice[]
}

export const QUESTIONS: Question[] = [
  // ── 언더톤 (5) ──
  {
    id: 'u1',
    category: 'undertone',
    text: '손목 안쪽의 혈관 색은 어느 쪽에 더 가깝나요?',
    hint: '자연광 아래에서 보면 더 정확합니다.',
    choices: [
      {
        id: 'u1a',
        label: '초록·올리브 계열에 가깝다',
        scores: { undertone: 1 },
      },
      {
        id: 'u1b',
        label: '파란·보라 계열에 가깝다',
        scores: { undertone: -1 },
      },
      {
        id: 'u1c',
        label: '둘 다 비슷하거나 잘 모르겠다',
        scores: { undertone: 0 },
      },
    ],
  },
  {
    id: 'u2',
    category: 'undertone',
    text: '액세서리 중 어떤 금속이 피부에 더 잘 어울리나요?',
    choices: [
      {
        id: 'u2a',
        label: '골드·브론즈가 더 자연스럽다',
        scores: { undertone: 1 },
      },
      {
        id: 'u2b',
        label: '실버·화이트골드가 더 자연스럽다',
        scores: { undertone: -1 },
      },
      {
        id: 'u2c',
        label: '둘 다 비슷하게 잘 어울린다',
        scores: { undertone: 0 },
      },
    ],
  },
  {
    id: 'u3',
    category: 'undertone',
    text: '햇볕에 오래 있으면 피부가 어떻게 변하나요?',
    choices: [
      {
        id: 'u3a',
        label: '노랗게·갈색으로 잘 탄다',
        scores: { undertone: 1 },
      },
      {
        id: 'u3b',
        label: '쉽게 붉어지거나 잘 타지 않는다',
        scores: { undertone: -1 },
      },
      {
        id: 'u3c',
        label: '상황에 따라 다르다',
        scores: { undertone: 0 },
      },
    ],
  },
  {
    id: 'u4',
    category: 'undertone',
    text: '흰 셔츠와 아이보리 셔츠 중, 얼굴이 더 환해 보이는 쪽은?',
    choices: [
      {
        id: 'u4a',
        label: '아이보리·크림이 더 잘 어울린다',
        scores: { undertone: 1 },
      },
      {
        id: 'u4b',
        label: '퓨어 화이트가 더 잘 어울린다',
        scores: { undertone: -1 },
      },
      {
        id: 'u4c',
        label: '큰 차이가 없다',
        scores: { undertone: 0 },
      },
    ],
  },
  {
    id: 'u5',
    category: 'undertone',
    text: '자연 상태의 입술·볼 색은 어느 쪽에 가깝나요?',
    choices: [
      {
        id: 'u5a',
        label: '복숭아·코랄·살몬 계열',
        scores: { undertone: 1 },
      },
      {
        id: 'u5b',
        label: '로즈·핑크·베리 계열',
        scores: { undertone: -1 },
      },
      {
        id: 'u5c',
        label: '중간이거나 잘 모르겠다',
        scores: { undertone: 0 },
      },
    ],
  },

  // ── 명도 (4) ──
  {
    id: 'v1',
    category: 'value',
    text: '본인의 피부톤 밝기는 어느 쪽에 가깝나요?',
    choices: [
      {
        id: 'v1a',
        label: '밝은 편이다',
        scores: { value: 1 },
      },
      {
        id: 'v1b',
        label: '중간 정도다',
        scores: { value: 0 },
      },
      {
        id: 'v1c',
        label: '어두운 편이다',
        scores: { value: -1 },
      },
    ],
  },
  {
    id: 'v2',
    category: 'value',
    text: '염색하지 않은 자연 머리색은?',
    choices: [
      {
        id: 'v2a',
        label: '밝은 브라운·블론드 계열',
        scores: { value: 1 },
      },
      {
        id: 'v2b',
        label: '중간 브라운',
        scores: { value: 0 },
      },
      {
        id: 'v2c',
        label: '진한 브라운·거의 블랙',
        scores: { value: -1 },
      },
    ],
  },
  {
    id: 'v3',
    category: 'value',
    text: '눈동자 색은 어느 쪽에 가깝나요?',
    choices: [
      {
        id: 'v3a',
        label: '밝은 브라운·호박색 계열',
        scores: { value: 1 },
      },
      {
        id: 'v3b',
        label: '중간 브라운',
        scores: { value: 0 },
      },
      {
        id: 'v3c',
        label: '짙은 브라운·거의 블랙',
        scores: { value: -1 },
      },
    ],
  },
  {
    id: 'v4',
    category: 'value',
    text: '전체적인 인상은 어떤가요?',
    choices: [
      {
        id: 'v4a',
        label: '맑고 가벼운 인상',
        scores: { value: 1 },
      },
      {
        id: 'v4b',
        label: '중간적인 인상',
        scores: { value: 0 },
      },
      {
        id: 'v4c',
        label: '무겁고 깊은 인상',
        scores: { value: -1 },
      },
    ],
  },

  // ── 대비 (3) ──
  {
    id: 'c1',
    category: 'contrast',
    text: '피부·눈·머리의 톤 차이는 어떤가요?',
    choices: [
      {
        id: 'c1a',
        label: '비슷한 톤이라 부드러운 인상',
        scores: { contrast: -1 },
      },
      {
        id: 'c1b',
        label: '어느 정도 차이가 있다',
        scores: { contrast: 0 },
      },
      {
        id: 'c1c',
        label: '대비가 뚜렷해 선명한 인상',
        scores: { contrast: 1 },
      },
    ],
  },
  {
    id: 'c2',
    category: 'contrast',
    text: '메이크업은 어떤 스타일이 더 잘 받나요?',
    choices: [
      {
        id: 'c2a',
        label: '연하고 자연스러운 메이크업',
        scores: { contrast: -1 },
      },
      {
        id: 'c2b',
        label: '중간 정도의 메이크업',
        scores: { contrast: 0 },
      },
      {
        id: 'c2c',
        label: '또렷한 아이라인·립이 잘 맞는다',
        scores: { contrast: 1 },
      },
    ],
  },
  {
    id: 'c3',
    category: 'contrast',
    text: '흑백 사진으로 찍었을 때 인상은?',
    choices: [
      {
        id: 'c3a',
        label: '부드럽고 은은하다',
        scores: { contrast: -1 },
      },
      {
        id: 'c3b',
        label: '보통이다',
        scores: { contrast: 0 },
      },
      {
        id: 'c3c',
        label: '선명하고 또렷하다',
        scores: { contrast: 1 },
      },
    ],
  },

  // ── 채도 (3) ──
  {
    id: 'ch1',
    category: 'chroma',
    text: '옷 색상 중 어떤 쪽이 얼굴을 더 살려주나요?',
    choices: [
      {
        id: 'ch1a',
        label: '선명한 원색·비비드 컬러',
        scores: { chroma: 1 },
      },
      {
        id: 'ch1b',
        label: '중간 정도의 색',
        scores: { chroma: 0 },
      },
      {
        id: 'ch1c',
        label: '탁하고 부드러운 파스텔·어스톤',
        scores: { chroma: -1 },
      },
    ],
  },
  {
    id: 'ch2',
    category: 'chroma',
    text: '네온·비비드한 색을 입으면?',
    choices: [
      {
        id: 'ch2a',
        label: '얼굴에 생기가 돌고 잘 어울린다',
        scores: { chroma: 1 },
      },
      {
        id: 'ch2b',
        label: '때에 따라 다르다',
        scores: { chroma: 0 },
      },
      {
        id: 'ch2c',
        label: '얼굴이 칙칙해지거나 부담스럽다',
        scores: { chroma: -1 },
      },
    ],
  },
  {
    id: 'ch3',
    category: 'chroma',
    text: '패턴·프린트는 어떤 스타일이 더 잘 맞나요?',
    choices: [
      {
        id: 'ch3a',
        label: '선명한 대비가 있는 패턴',
        scores: { chroma: 1, contrast: 0.5 },
      },
      {
        id: 'ch3b',
        label: '중간 정도',
        scores: { chroma: 0 },
      },
      {
        id: 'ch3c',
        label: '은은한 톤온톤·뮤트한 패턴',
        scores: { chroma: -1, contrast: -0.5 },
      },
    ],
  },

  // ── 팔레트 확인 (2) ──
  {
    id: 'p1',
    category: 'palette',
    text: '아래 두 팔레트 중, 얼굴이 더 환해 보일 것 같은 쪽은?',
    hint: '실제로 옷이나 천을 얼굴 옆에 대본다고 상상해 보세요.',
    choices: [
      {
        id: 'p1a',
        label: '코랄 · 피치 · 밝은 골드 · 민트',
        scores: { undertone: 1, chroma: 0.5, value: 0.5 },
      },
      {
        id: 'p1b',
        label: '로즈 · 라벤더 · 스카이블루 · 실버',
        scores: { undertone: -1, chroma: -0.3, value: 0.5 },
      },
    ],
  },
  {
    id: 'p2',
    category: 'palette',
    text: '아래 두 팔레트 중, 더 자연스럽고 세련되어 보일 것 같은 쪽은?',
    choices: [
      {
        id: 'p2a',
        label: '카멜 · 올리브 · 테라코타 · 머스타드',
        scores: { undertone: 1, chroma: -0.7, value: -0.3 },
      },
      {
        id: 'p2b',
        label: '와인 · 네이비 · 플럼 · 에메랄드',
        scores: { undertone: -1, chroma: 0.5, value: -0.5 },
      },
    ],
  },
]

export const CATEGORY_LABEL: Record<QuestionCategory, string> = {
  undertone: '언더톤',
  value: '명도',
  contrast: '대비',
  chroma: '채도',
  palette: '팔레트',
}
