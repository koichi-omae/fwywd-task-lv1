import { BenefitProps } from '.';

import Arrow from '~/img/Arrow.png';
import Benefit1 from '~/img/Benefit1.png';
import Benefit2 from '~/img/Benefit2.png';

export const storyList: { [key: string]: BenefitProps } = {
  default: {
    title: 'あなたが本気で変わるために必要な２つの条件',
    result: '成果 = モチベーション × 能力',
    cards: [
      {
        text: '仲間',
        icon: {
          src: Arrow,
          alt: 'arrow',
          width: 30,
          height: 30,
        },
        result: 'モチベーション',
        image: {
          src: Benefit1,
          alt: 'benefit1',
          width: 315,
          height: 315,
        },
        message: {
          msg1: '熱量の高い',
          msg2: '最高の仲間と切磋琢磨',
        },
      },
      {
        text: '目的',
        icon: {
          src: Arrow,
          alt: 'arrow',
          width: 30,
          height: 30,
        },
        result: '能力',
        image: {
          src: Benefit2,
          alt: 'benefit2',
          width: 315,
          height: 315,
        },
        message: {
          msg1: 'プロレベルで必要な',
          msg2: '技術ロードマップを網羅',
        },
      },
    ],
    message: {
      msg1: '良き仲間と目的を持った学びができる環境を提供します。',
      msg2: '成果に繋がる学びがここにあります。',
    },
  },
};
