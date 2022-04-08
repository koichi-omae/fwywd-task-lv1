import { PageFooterProps } from '.';

import Facebook from '~/img/Facebook.png';
import Hatebu from '~/img/Hatebu.png';
import Line from '~/img/Line.png';
import Logo from '~/img/Logo.png';
import Pinterest from '~/img/Pinterest.png';
import Twitter from '~/img/Twitter.png';

export const storyList: { [key: string]: PageFooterProps } = {
  default: {
    logo: {
      src: Logo,
      alt: 'logo',
      width: 156,
      height: 60,
    },
    title: '良き仲間との出会いは人生最大の財産である',
    sns: {
      icons: [
        { src: Facebook, alt: 'facebook', width: 20, height: 40 },
        { src: Twitter, alt: 'twitter', width: 40, height: 32 },
        { src: Line, alt: 'line', width: 40, height: 40 },
        { src: Hatebu, alt: 'hatebu', width: 39, height: 54 },
        { src: Pinterest, alt: 'pinterest', width: 32, height: 40 },
      ],
      share: `＼ SNS でシェア ／`,
    },
    menuNav: [
      { title: 'About', menu: ['悩み', '解決策', '料金'] },
      { title: 'Legal', menu: ['利用規約', 'プライバシーポリシー', '特記法表記', '運営会社'] },
      { title: 'About', menu: ['メディアキット', 'サイトマップ'] },
    ],
  },
};
