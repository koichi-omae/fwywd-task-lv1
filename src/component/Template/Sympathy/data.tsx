import { SympathyProps } from '.';

import Check from '~/img/Check.png';
import Sympathy1 from '~/img/Sympathy1.png';
import Sympathy2 from '~/img/Sympathy2.png';

export const storyList: { [key: string]: SympathyProps } = {
  default: {
    title: '夢を叶える仲間が欲しい、あなたへ',
    checklist: [
      {
        icon: { src: Check, alt: 'check', width: 28, height: 25 },
        text: '新しいことを始めたい気持ちは強い',
      },
      {
        icon: { src: Check, alt: 'check', width: 28, height: 25 },
        text: '学びに必要な教材がたくさんあることは知っている',
      },
      {
        icon: { src: Check, alt: 'check', width: 28, height: 25 },
        text: '最後のひと押しの勇気が欲しい',
      },
    ],
    cards: [
      {
        tag: '悩み1',
        title: {
          title1: '仲間',
          title2: 'がいない',
        },
        icon: {
          src: Sympathy1,
          alt: 'sympath1',
          width: 315,
          height: 315,
        },
        text: '会社の同僚や友人と一緒に学ぶのは難しい',
      },
      {
        tag: '悩み2',
        title: {
          title1: '目的',
          title2: 'があいまい',
        },
        icon: {
          src: Sympathy2,
          alt: 'sympath2',
          width: 315,
          height: 315,
        },
        text: 'ゆるい繋がりのコミュニティでは目的が達成できない',
      },
    ],
  },
};
