export interface TarotCard {
  id: string;
  name: string;
  nameEn: string;
  arcana: 'Major' | 'Minor';
  meaningUpright: string;
  meaningReversed: string;
  description: string;
  image: string;
}

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: '0',
    name: '愚者',
    nameEn: 'The Fool',
    arcana: 'Major',
    meaningUpright: '新的开始、自由、纯真、冒险。',
    meaningReversed: '鲁莽、疏忽、天真、愚蠢。',
    description: '愚者代表着一个新旅程的开始，充满了无限的可能性和对未知的信任。',
    image: 'https://picsum.photos/seed/tarot-0/400/600'
  },
  {
    id: '1',
    name: '魔术师',
    nameEn: 'The Magician',
    arcana: 'Major',
    meaningUpright: '创造力、行动、自信、意志力。',
    meaningReversed: '操纵、计划不周、未开发的潜力。',
    description: '魔术师象征着将想法转化为现实的能力，拥有掌控元素的力量。',
    image: 'https://picsum.photos/seed/tarot-1/400/600'
  },
  {
    id: '2',
    name: '女祭司',
    nameEn: 'The High Priestess',
    arcana: 'Major',
    meaningUpright: '直觉、潜意识、神秘、智慧。',
    meaningReversed: '秘密、脱离直觉、肤浅。',
    description: '女祭司代表着内在的智慧和对神秘事物的理解。',
    image: 'https://picsum.photos/seed/tarot-2/400/600'
  },
  {
    id: '3',
    name: '皇后',
    nameEn: 'The Empress',
    arcana: 'Major',
    meaningUpright: '丰饶、母性、自然、感官享受。',
    meaningReversed: '依赖、创意受阻、过度保护。',
    description: '皇后象征着大地的母亲，代表着生命力和创造的丰饶。',
    image: 'https://picsum.photos/seed/tarot-3/400/600'
  },
  {
    id: '4',
    name: '皇帝',
    nameEn: 'The Emperor',
    arcana: 'Major',
    meaningUpright: '权威、结构、领导力、稳定。',
    meaningReversed: '专制、缺乏纪律、僵化。',
    description: '皇帝代表着秩序和法律，是保护者和规则的制定者。',
    image: 'https://picsum.photos/seed/tarot-4/400/600'
  },
  {
    id: '5',
    name: '教皇',
    nameEn: 'The Hierophant',
    arcana: 'Major',
    meaningUpright: '传统、信仰、教育、精神指引。',
    meaningReversed: '叛逆、打破常规、个人信仰。',
    description: '教皇象征着传统价值观和精神上的教导。',
    image: 'https://picsum.photos/seed/tarot-5/400/600'
  },
  {
    id: '6',
    name: '恋人',
    nameEn: 'The Lovers',
    arcana: 'Major',
    meaningUpright: '爱、和谐、关系、选择。',
    meaningReversed: '失衡、不和、逃避责任。',
    description: '恋人代表着深刻的联系和生活中重要的抉择。',
    image: 'https://picsum.photos/seed/tarot-6/400/600'
  },
  {
    id: '7',
    name: '战车',
    nameEn: 'The Chariot',
    arcana: 'Major',
    meaningUpright: '胜利、意志、控制、成功。',
    meaningReversed: '失控、缺乏方向、侵略性。',
    description: '战车象征着通过意志力克服困难并取得胜利。',
    image: 'https://picsum.photos/seed/tarot-7/400/600'
  },
  {
    id: '8',
    name: '力量',
    nameEn: 'Strength',
    arcana: 'Major',
    meaningUpright: '勇气、耐力、同情心、内在力量。',
    meaningReversed: '软弱、自我怀疑、缺乏自信。',
    description: '力量代表着温柔的坚持和对本能的掌控。',
    image: 'https://picsum.photos/seed/tarot-8/400/600'
  },
  {
    id: '9',
    name: '隐士',
    nameEn: 'The Hermit',
    arcana: 'Major',
    meaningUpright: '反思、孤独、寻求真理、内在指引。',
    meaningReversed: '孤立、偏执、与世隔绝。',
    description: '隐士象征着向内探索，寻找真理的旅程。',
    image: 'https://picsum.photos/seed/tarot-9/400/600'
  },
  {
    id: '10',
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    arcana: 'Major',
    meaningUpright: '运气、转折点、周期、不可控的变化。',
    meaningReversed: '厄运、阻碍、拒绝改变。',
    description: '命运之轮代表着生命中不断的循环和变化。',
    image: 'https://picsum.photos/seed/tarot-10/400/600'
  },
  {
    id: '11',
    name: '正义',
    nameEn: 'Justice',
    arcana: 'Major',
    meaningUpright: '公平、真相、因果、法律。',
    meaningReversed: '不公、逃避责任、偏见。',
    description: '正义象征着平衡和对行为后果的承担。',
    image: 'https://picsum.photos/seed/tarot-11/400/600'
  },
  {
    id: '12',
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    arcana: 'Major',
    meaningUpright: '牺牲、暂停、新视角、放手。',
    meaningReversed: '拖延、无谓的牺牲、停滞不前。',
    description: '倒吊人代表着通过换个角度看世界来获得启示。',
    image: 'https://picsum.photos/seed/tarot-12/400/600'
  },
  {
    id: '13',
    name: '死神',
    nameEn: 'Death',
    arcana: 'Major',
    meaningUpright: '结束、转变、过渡、新生。',
    meaningReversed: '恐惧改变、停滞、拒绝放手。',
    description: '死神象征着旧事物的终结和新阶段的开始。',
    image: 'https://picsum.photos/seed/tarot-13/400/600'
  },
  {
    id: '14',
    name: '节制',
    nameEn: 'Temperance',
    arcana: 'Major',
    meaningUpright: '平衡、节制、耐心、融合。',
    meaningReversed: '失衡、过度、缺乏目标。',
    description: '节制代表着和谐与适度的艺术。',
    image: 'https://picsum.photos/seed/tarot-14/400/600'
  },
  {
    id: '15',
    name: '恶魔',
    nameEn: 'The Devil',
    arcana: 'Major',
    meaningUpright: '束缚、成瘾、物质主义、阴影。',
    meaningReversed: '解脱、觉醒、打破束缚。',
    description: '恶魔象征着被欲望或恐惧所困的状态。',
    image: 'https://picsum.photos/seed/tarot-15/400/600'
  },
  {
    id: '16',
    name: '高塔',
    nameEn: 'The Tower',
    arcana: 'Major',
    meaningUpright: '突变、灾难、启示、觉醒。',
    meaningReversed: '推迟灾难、恐惧改变、避免冲突。',
    description: '高塔代表着虚假结构的崩塌，虽然痛苦但带来真相。',
    image: 'https://picsum.photos/seed/tarot-16/400/600'
  },
  {
    id: '17',
    name: '星星',
    nameEn: 'The Star',
    arcana: 'Major',
    meaningUpright: '希望、灵感、宁静、更新。',
    meaningReversed: '失望、缺乏信心、失去希望。',
    description: '星星象征着黑暗之后的希望和精神上的指引。',
    image: 'https://picsum.photos/seed/tarot-17/400/600'
  },
  {
    id: '18',
    name: '月亮',
    nameEn: 'The Moon',
    arcana: 'Major',
    meaningUpright: '幻觉、恐惧、焦虑、直觉。',
    meaningReversed: '释放恐惧、揭开真相、混乱。',
    description: '月亮代表着潜意识中的不安和直觉的指引。',
    image: 'https://picsum.photos/seed/tarot-18/400/600'
  },
  {
    id: '19',
    name: '太阳',
    nameEn: 'The Sun',
    arcana: 'Major',
    meaningUpright: '快乐、成功、活力、自信。',
    meaningReversed: '暂时的阴郁、过度乐观、缺乏活力。',
    description: '太阳象征着光明、温暖和生命力的绽放。',
    image: 'https://picsum.photos/seed/tarot-19/400/600'
  },
  {
    id: '20',
    name: '审判',
    nameEn: 'Judgement',
    arcana: 'Major',
    meaningUpright: '重生、呼唤、赦免、评价。',
    meaningReversed: '自我怀疑、拒绝呼唤、迟疑。',
    description: '审判代表着对过去的反思和对未来的觉醒。',
    image: 'https://picsum.photos/seed/tarot-20/400/600'
  },
  {
    id: '21',
    name: '世界',
    nameEn: 'The World',
    arcana: 'Major',
    meaningUpright: '完成、成就、旅行、圆满。',
    meaningReversed: '未完成、缺乏成就感、停滞。',
    description: '世界象征着旅程的终点，代表着大圆满和成功。',
    image: 'https://picsum.photos/seed/tarot-21/400/600'
  }
];
