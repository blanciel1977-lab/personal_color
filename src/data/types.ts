export type Season = 'spring' | 'summer' | 'autumn' | 'winter'

export type ColorTypeId =
  | 'light-spring'
  | 'true-spring'
  | 'bright-spring'
  | 'light-summer'
  | 'true-summer'
  | 'soft-summer'
  | 'soft-autumn'
  | 'true-autumn'
  | 'deep-autumn'
  | 'bright-winter'
  | 'true-winter'
  | 'deep-winter'

export interface AxisScores {
  undertone: number
  value: number
  contrast: number
  chroma: number
}

export interface ColorType {
  id: ColorTypeId
  nameKo: string
  nameEn: string
  season: Season
  ideal: AxisScores
  description: string
  traits: string[]
  bestColors: string[]
  avoidColors: string[]
  makeupTips: string
  fashionTips: string
  celebrities: string[]
}

export const COLOR_TYPES: ColorType[] = [
  {
    id: 'light-spring',
    nameKo: '라이트 스프링',
    nameEn: 'Light Spring',
    season: 'spring',
    ideal: { undertone: 1, value: 1, contrast: 0.3, chroma: 0.7 },
    description:
      '밝고 따뜻한 톤이 잘 어울리는 타입입니다. 맑고 가벼운 색이 얼굴을 화사하게 살려줍니다.',
    traits: [
      '피부·눈·머리가 전반적으로 밝은 편',
      '골드·피치·코랄이 잘 맞음',
      '연하고 맑은 색이 잘 받음',
      '강한 대비보다 부드러운 인상이 자연스러움',
    ],
    bestColors: [
      '#FFE4C4',
      '#FFDAB9',
      '#FFB6C1',
      '#FFA07A',
      '#98D8C8',
      '#F7DC6F',
      '#AED6F1',
      '#F5B7B1',
      '#D5F5E3',
      '#FAD7A0',
    ],
    avoidColors: ['#1A1A2E', '#4A0E4E', '#2C3E50', '#800020', '#1B4F72'],
    makeupTips:
      '피치·코랄·살몬 립과 연한 골드·샴페인 아이섀도를 추천합니다. 진한 스모키는 피하세요.',
    fashionTips:
      '아이보리, 피치, 연한 민트, 라이트 카멜이 잘 어울립니다. 블랙보다는 네이비·브라운이 자연스럽습니다.',
    celebrities: ['아이유', '수지', '블랙핑크 제니'],
  },
  {
    id: 'true-spring',
    nameKo: '트루 스프링',
    nameEn: 'True Spring',
    season: 'spring',
    ideal: { undertone: 1, value: 0.3, contrast: 0.5, chroma: 1 },
    description:
      '따뜻하고 선명한 색이 가장 잘 어울리는 전형적인 봄 타입입니다.',
    traits: [
      '웜톤의 특징이 뚜렷함',
      '선명하고 생기 있는 색이 잘 맞음',
      '골드 액세서리가 자연스러움',
      '복숭아빛 피부가 잘 드러남',
    ],
    bestColors: [
      '#FF6B35',
      '#F7C948',
      '#2ECC71',
      '#FF8C42',
      '#E74C3C',
      '#3498DB',
      '#F39C12',
      '#1ABC9C',
      '#E67E22',
      '#FFCC00',
    ],
    avoidColors: ['#C0C0C0', '#4A5568', '#718096', '#2D3748', '#553C9A'],
    makeupTips:
      '코랄·오렌지·따뜻한 레드 립이 잘 맞습니다. 골드·브론즈 섀도로 생기를 더하세요.',
    fashionTips:
      '토마토 레드, 코랄, 밝은 노랑, 청록이 잘 어울립니다. 회색·보라 계열은 피하세요.',
    celebrities: ['아이린', '송혜교', '블랙핑크 로제'],
  },
  {
    id: 'bright-spring',
    nameKo: '브라이트 스프링',
    nameEn: 'Bright Spring',
    season: 'spring',
    ideal: { undertone: 1, value: 0.5, contrast: 1, chroma: 1 },
    description:
      '따뜻하면서도 대비가 뚜렷해, 선명하고 밝은 비비드 컬러가 잘 어울립니다.',
    traits: [
      '이목구비 대비가 뚜렷함',
      '비비드하고 클리어한 색이 잘 맞음',
      '웜톤 + 높은 채도',
      '또렷한 메이크업이 잘 받음',
    ],
    bestColors: [
      '#FF1744',
      '#FF9100',
      '#FFEA00',
      '#00E676',
      '#00B0FF',
      '#FF4081',
      '#76FF03',
      '#FF6D00',
      '#2979FF',
      '#FFD600',
    ],
    avoidColors: ['#A1887F', '#8D6E63', '#BDBDBD', '#78909C', '#6D4C41'],
    makeupTips:
      '선명한 코랄·레드 립과 또렷한 아이라인이 잘 맞습니다. 탁한 브라운 섀도는 피하세요.',
    fashionTips:
      '비비드한 원색, 밝은 화이트, 선명한 그린·블루가 잘 어울립니다. 뮤트한 색은 얼굴을 어둡게 만듭니다.',
    celebrities: ['블랙핑크 지수', '한소희', '트와이스 사나'],
  },
  {
    id: 'light-summer',
    nameKo: '라이트 썸머',
    nameEn: 'Light Summer',
    season: 'summer',
    ideal: { undertone: -1, value: 1, contrast: 0.3, chroma: -0.3 },
    description:
      '밝고 시원한 톤이 잘 어울리는 타입입니다. 연한 파스텔·로즈 계열이 얼굴을 맑게 보여줍니다.',
    traits: [
      '피부가 밝은 쿨톤',
      '연한 핑크·라벤더가 잘 맞음',
      '실버 액세서리가 자연스러움',
      '부드러운 대비가 잘 어울림',
    ],
    bestColors: [
      '#E8DAEF',
      '#D5F5E3',
      '#AED6F1',
      '#F5B7B1',
      '#D7BDE2',
      '#A9CCE3',
      '#F9E79F',
      '#FADBD8',
      '#D4E6F1',
      '#EBDEF0',
    ],
    avoidColors: ['#FF6B00', '#8B4513', '#FF4500', '#DAA520', '#CD853F'],
    makeupTips:
      '로즈·라벤더·연분홍 립을 추천합니다. 오렌지·골드 계열은 피하세요.',
    fashionTips:
      '라벤더, 스카이 블루, 소프트 핑크, 연한 그레이가 잘 어울립니다. 오렌지·머스타드는 피하세요.',
    celebrities: ['태연', '트와이스 나연', '블랙핑크 리사'],
  },
  {
    id: 'true-summer',
    nameKo: '트루 썸머',
    nameEn: 'True Summer',
    season: 'summer',
    ideal: { undertone: -1, value: 0.3, contrast: 0.5, chroma: -0.5 },
    description:
      '시원하고 부드러운 중간 채도의 색이 가장 잘 어울리는 전형적인 여름 타입입니다.',
    traits: [
      '쿨톤의 특징이 뚜렷함',
      '뮤트하면서도 세련된 색이 잘 맞음',
      '로즈·블루·라벤더 계열 선호',
      '너무 선명하거나 너무 탁한 색은 부담스러움',
    ],
    bestColors: [
      '#7FB3D5',
      '#C39BD3',
      '#F1948A',
      '#76D7C4',
      '#85929E',
      '#5DADE2',
      '#AF7AC5',
      '#EC7063',
      '#48C9B0',
      '#AAB7B8',
    ],
    avoidColors: ['#FF8C00', '#D2691E', '#FFD700', '#228B22', '#B8860B'],
    makeupTips:
      '로즈·베리·모브 립이 잘 맞습니다. 쿨톤 핑크·라일락 섀도를 활용하세요.',
    fashionTips:
      '더스티 로즈, 슬레이트 블루, 라벤더, 쿨 그레이가 잘 어울립니다. 웜한 어스톤은 피하세요.',
    celebrities: ['김고은', '뉴진스 민지', '트와이스 지효'],
  },
  {
    id: 'soft-summer',
    nameKo: '소프트 썸머',
    nameEn: 'Soft Summer',
    season: 'summer',
    ideal: { undertone: -1, value: 0.3, contrast: -0.5, chroma: -1 },
    description:
      '시원하면서도 탁하고 부드러운 색이 잘 어울립니다. 은은한 톤온톤이 자연스럽습니다.',
    traits: [
      '대비가 낮고 부드러운 인상',
      '뮤트·그레이시 색이 잘 맞음',
      '쿨톤 + 낮은 채도',
      '진한 메이크업보다 자연스러운 메이크업이 잘 받음',
    ],
    bestColors: [
      '#A9A9A9',
      '#B0C4DE',
      '#C8A2C8',
      '#9CADB7',
      '#D8BFD8',
      '#8FBC8F',
      '#BC8F8F',
      '#778899',
      '#DDA0DD',
      '#A2B5A2',
    ],
    avoidColors: ['#FF0000', '#00FF00', '#0000FF', '#FFD700', '#FF1493'],
    makeupTips:
      '뮤트한 로즈·모브 립과 소프트한 그레이·라일락 섀도가 잘 맞습니다.',
    fashionTips:
      '더스티 블루, 세이지, 라벤더 그레이, 소프트 버건디가 잘 어울립니다. 비비드한 원색은 피하세요.',
    celebrities: ['전지현', '소녀시대 윤아', '에스파 카리나'],
  },
  {
    id: 'soft-autumn',
    nameKo: '소프트 오텀',
    nameEn: 'Soft Autumn',
    season: 'autumn',
    ideal: { undertone: 1, value: 0.3, contrast: -0.5, chroma: -1 },
    description:
      '따뜻하면서도 부드럽고 탁한 색이 잘 어울립니다. 어스톤·카키 계열이 얼굴을 편안하게 보여줍니다.',
    traits: [
      '웜톤 + 낮은 채도',
      '대비가 낮은 부드러운 인상',
      '베이지·카키·테라코타가 잘 맞음',
      '선명한 색보다 뮤트한 색이 자연스러움',
    ],
    bestColors: [
      '#C4A484',
      '#B2AC88',
      '#CD853F',
      '#A0522D',
      '#8FBC8F',
      '#D2B48C',
      '#BC8F8F',
      '#DEB887',
      '#9C8A6E',
      '#C19A6B',
    ],
    avoidColors: ['#FF1493', '#00CED1', '#7B68EE', '#FF69B4', '#00BFFF'],
    makeupTips:
      '테라코타·브릭·뮤트 코랄 립을 추천합니다. 브라운·골드 섀도가 잘 맞습니다.',
    fashionTips:
      '올리브, 카멜, 머스타드, 소프트 테라코타가 잘 어울립니다. 네온·비비드 쿨톤 색은 피하세요.',
    celebrities: ['김세정', '트와이스 모모', '에스파 윈터'],
  },
  {
    id: 'true-autumn',
    nameKo: '트루 오텀',
    nameEn: 'True Autumn',
    season: 'autumn',
    ideal: { undertone: 1, value: 0.3, contrast: 0.5, chroma: -0.5 },
    description:
      '따뜻하고 풍부한 어스톤이 가장 잘 어울리는 전형적인 가을 타입입니다.',
    traits: [
      '웜톤의 특징이 뚜렷함',
      '골드·브라운·올리브가 잘 맞음',
      '중간 채도의 따뜻한 색이 자연스러움',
      '골드 액세서리가 잘 어울림',
    ],
    bestColors: [
      '#D2691E',
      '#8B4513',
      '#B8860B',
      '#556B2F',
      '#A0522D',
      '#CD5C5C',
      '#DAA520',
      '#6B8E23',
      '#BC6C25',
      '#8B7355',
    ],
    avoidColors: ['#FF69B4', '#00FFFF', '#C0C0C0', '#E6E6FA', '#87CEEB'],
    makeupTips:
      '브릭·테라코타·웜 브라운 립이 잘 맞습니다. 구리·골드 섀도로 깊이감을 더하세요.',
    fashionTips:
      '머스타드, 올리브, 버건디, 카멜, 러스트가 잘 어울립니다. 핑크·실버·차가운 회색은 피하세요.',
    celebrities: ['공효진', '소녀시대 티파니', '뉴진스 해린'],
  },
  {
    id: 'deep-autumn',
    nameKo: '딥 오텀',
    nameEn: 'Deep Autumn',
    season: 'autumn',
    ideal: { undertone: 1, value: -1, contrast: 0.5, chroma: -0.7 },
    description:
      '깊고 따뜻한 색이 잘 어울립니다. 다크한 브라운·버건디·포레스트 그린이 얼굴을 세련되게 보여줍니다.',
    traits: [
      '피부·눈·머리가 전반적으로 어두운 편',
      '딥하고 따뜻한 색이 잘 맞음',
      '웜톤 + 낮은 명도',
      '밝은 파스텔보다 진한 색이 잘 받음',
    ],
    bestColors: [
      '#4A3728',
      '#6B2D5C',
      '#3D5A3D',
      '#8B0000',
      '#5D4037',
      '#704214',
      '#2F4F2F',
      '#800020',
      '#4B3621',
      '#654321',
    ],
    avoidColors: ['#FFB6C1', '#E0FFFF', '#FFFACD', '#F0E68C', '#ADD8E6'],
    makeupTips:
      '딥 버건디·브릭·다크 브라운 립을 추천합니다. 진한 브라운 스모키가 잘 맞습니다.',
    fashionTips:
      '초콜릿, 버건디, 포레스트, 딥 골드가 잘 어울립니다. 연한 파스텔·아이스 컬러는 피하세요.',
    celebrities: ['전도연', '에스파 지젤', '트와이스 채영'],
  },
  {
    id: 'bright-winter',
    nameKo: '브라이트 윈터',
    nameEn: 'Bright Winter',
    season: 'winter',
    ideal: { undertone: -1, value: 0.5, contrast: 1, chroma: 1 },
    description:
      '시원하면서도 선명한 고대비 색이 잘 어울립니다. 퓨어 화이트와 비비드 컬러가 얼굴을 또렷하게 살려줍니다.',
    traits: [
      '이목구비 대비가 매우 뚜렷함',
      '쿨톤 + 높은 채도',
      '블랙·화이트·비비드가 잘 맞음',
      '또렷한 메이크업이 잘 받음',
    ],
    bestColors: [
      '#FFFFFF',
      '#000000',
      '#FF0080',
      '#00FFFF',
      '#FF0000',
      '#0000FF',
      '#FF00FF',
      '#00FF00',
      '#1E90FF',
      '#DC143C',
    ],
    avoidColors: ['#D2B48C', '#BC8F8F', '#CD853F', '#A0522D', '#DEB887'],
    makeupTips:
      '선명한 레드·퓨시아·베리 립이 잘 맞습니다. 블랙 아이라인으로 또렷함을 강조하세요.',
    fashionTips:
      '퓨어 화이트, 블랙, 로열 블루, 핫핑크, 에메랄드가 잘 어울립니다. 베이지·브라운은 피하세요.',
    celebrities: ['김연아', '에스파 닝닝', '트와이스 다현'],
  },
  {
    id: 'true-winter',
    nameKo: '트루 윈터',
    nameEn: 'True Winter',
    season: 'winter',
    ideal: { undertone: -1, value: 0.3, contrast: 1, chroma: 0.5 },
    description:
      '시원하고 선명한 중간~높은 채도의 색이 가장 잘 어울리는 전형적인 겨울 타입입니다.',
    traits: [
      '쿨톤의 특징이 뚜렷함',
      '선명하고 차가운 색이 잘 맞음',
      '블랙·화이트·와인 계열 선호',
      '골드보다 실버가 자연스러움',
    ],
    bestColors: [
      '#FFFFFF',
      '#000000',
      '#8B0000',
      '#4B0082',
      '#00008B',
      '#C71585',
      '#008080',
      '#DC143C',
      '#191970',
      '#800080',
    ],
    avoidColors: ['#FFA500', '#DAA520', '#CD853F', '#F4A460', '#D2691E'],
    makeupTips:
      '체리·와인·베리 립이 잘 맞습니다. 쿨톤 핑크·퍼플 섀도를 활용하세요.',
    fashionTips:
      '블랙, 화이트, 네이비, 버건디, 로열 퍼플이 잘 어울립니다. 오렌지·카멜·머스타드는 피하세요.',
    celebrities: ['김태리', '소녀시대 써니', '뉴진스 하니'],
  },
  {
    id: 'deep-winter',
    nameKo: '딥 윈터',
    nameEn: 'Deep Winter',
    season: 'winter',
    ideal: { undertone: -1, value: -1, contrast: 1, chroma: 0.7 },
    description:
      '깊고 시원한 색이 잘 어울립니다. 다크하고 선명한 컬러가 얼굴을 강렬하고 세련되게 보여줍니다.',
    traits: [
      '피부·눈·머리가 전반적으로 어두운 편',
      '딥하고 쿨한 색이 잘 맞음',
      '쿨톤 + 낮은 명도 + 높은 대비',
      '밝은 색보다 진한 색이 잘 받음',
    ],
    bestColors: [
      '#0D0D0D',
      '#1A0033',
      '#4A0000',
      '#003366',
      '#2E0854',
      '#800020',
      '#0A1628',
      '#4B0082',
      '#1C1C1C',
      '#560319',
    ],
    avoidColors: ['#FFE4B5', '#FFDAB9', '#F5DEB3', '#FFE4C4', '#FAEBD7'],
    makeupTips:
      '딥 와인·플럼·다크 베리 립을 추천합니다. 진한 스모키·퍼플 섀도가 잘 맞습니다.',
    fashionTips:
      '블랙, 딥 네이비, 플럼, 에메랄드, 다크 버건디가 잘 어울립니다. 연한 베이지·피치는 피하세요.',
    celebrities: ['이영애', '소녀시대 효연', '트와이스 미나'],
  },
]

export const COLOR_TYPE_MAP = Object.fromEntries(
  COLOR_TYPES.map((t) => [t.id, t]),
) as Record<ColorTypeId, ColorType>

export const SEASON_LABEL: Record<Season, string> = {
  spring: '봄',
  summer: '여름',
  autumn: '가을',
  winter: '겨울',
}

export const SEASON_ACCENT: Record<Season, string> = {
  spring: '#E87A3D',
  summer: '#6B8FBF',
  autumn: '#A0673B',
  winter: '#2C3E6B',
}
