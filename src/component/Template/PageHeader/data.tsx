import { PageHeaderProps } from '.';
import Logo from '~/img/Logo.png';

export const storyList: { [key: string]: PageHeaderProps } = {
  default: {
    logo: {
      src: Logo,
      alt: 'hobby',
      width: 156,
      height: 60,
    },
    headerList: ['Top', '悩み', '解決策', '料金'],
    button: {
      text: '資料ダウンロード',
      link: '',
    },
  },
};
