import { PageFooterProps } from '.';

export const storyList: { [key: string]: PageFooterProps } = {
  default: {
    title: '良き仲間との出会いは人生最大の財産である',
    icons: [
      { type: 'facebook', width: 20, height: 40 },
      { type: 'twitter', width: 40, height: 32 },
      { type: 'line', width: 40, height: 40 },
      { type: 'hatebu', width: 39, height: 54 },
      { type: 'pinterest', width: 32, height: 40 },
    ],
    share: `＼ SNS でシェア ／`,
    menuNav: [
      { title: 'About', menu: ['悩み', '解決策', '料金'] },
      { title: 'Legal', menu: ['利用規約', 'プライバシーポリシー', '特記法表記', '運営会社'] },
      { title: 'Links', menu: ['メディアキット', 'サイトマップ'] },
    ],
  },
};
