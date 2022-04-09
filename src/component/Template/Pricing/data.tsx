import { PricingProps } from '.';

import Check from '~/img/Check.png';
import NotCheck from '~/img/NotCheck.png';

export const storyList: { [key: string]: PricingProps } = {
  default: {
    title: '料金',
    text: `＼学びのスタイルに合わせた３つのプランを用意／`,
    recommendation: '＼おすすめ／',
    cards: [
      {
        title: '起業挑戦',
        plan: {
          plan1: 'これから起業する人を',
          plan2: '全力で支援するプラン',
        },
        price: {
          price: '月額  3,000 円',
          notax: '（税抜）',
        },
        membership: {
          member: '会費',
          price: '月額 0 円',
        },
        membertax: '税込 0 円',
        useprice: {
          use: 'ツール利用料',
          price: '月額 3,000 円',
        },
        usetax: '税込 3,300 円',
        courses: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '仲間との学び',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'コース課題と解答集',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'イベント参加',
          },
          {
            icon: {
              src: NotCheck,
              alt: 'notcheck',
              width: 28,
              height: 25,
            },
            text: '運営側の質問対応',
          },
        ],
        onlines: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '入学試験',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'Web 面接',
          },
        ],
      },
      {
        title: 'スタンダード',
        plan: {
          plan1: '仕事と学びを両立したい人に',
          plan2: 'おすすめのプラン',
        },
        price: {
          price: '月額  13,000 円',
          notax: '（税抜）',
        },
        membership: {
          member: '会費',
          price: '月額 10,000 円',
        },
        membertax: '税込 11,000 円',
        useprice: {
          use: 'ツール利用料',
          price: '月額 3,000 円',
        },
        usetax: '税込 3,300 円',
        courses: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '仲間との学び',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'コース課題と解答集',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'イベント参加',
          },
          {
            icon: {
              src: NotCheck,
              alt: 'notcheck',
              width: 28,
              height: 25,
            },
            text: '運営側の質問対応',
          },
        ],
        onlines: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '入学試験',
          },
          {
            icon: {
              src: NotCheck,
              alt: 'notcheck',
              width: 28,
              height: 25,
            },
            text: 'Web 面接',
          },
        ],
      },
      {
        title: 'フルサポート',
        plan: {
          plan1: '標準プランに加えて運営側からの',
          plan2: 'フォロー希望の方向け',
        },
        price: {
          price: '月額  63,000 円',
          notax: '（税抜）',
        },
        membership: {
          member: '会費',
          price: '月額 60,000 円',
        },
        membertax: '税込 66,000 円',
        useprice: {
          use: 'ツール利用料',
          price: '月額 3,000 円',
        },
        usetax: '税込 3,300 円',
        courses: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '仲間との学び',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'コース課題と解答集',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: 'イベント参加',
          },
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '運営側の質問対応',
          },
        ],
        onlines: [
          {
            icon: {
              src: Check,
              alt: 'check',
              width: 28,
              height: 25,
            },
            text: '入学試験',
          },
          {
            icon: {
              src: NotCheck,
              alt: 'notcheck',
              width: 28,
              height: 25,
            },
            text: 'Web 面接',
          },
        ],
      },
    ],
    checklist: [
      {
        icon: {
          src: Check,
          alt: 'check',
          width: 28,
          height: 25,
        },
        text: '基本的には同じプランの方とチームになりますが、集まっている人数によって変動します。',
      },
      {
        icon: {
          src: Check,
          alt: 'check',
          width: 28,
          height: 25,
        },
        text: '起業挑戦プランは Web 面接にてビジネスプランのプレゼンテーションで審査いたします。',
      },
      {
        icon: {
          src: Check,
          alt: 'check',
          width: 28,
          height: 25,
        },
        text: '起業挑戦プランの方が初年度以降を継続希望の場合は月額 10,000 円の標準プランへと自動的に移行します。',
      },
    ],
  },
};
