import { CtaProps } from '.';
import Cta from '~/img/Cta.png';

export const storyList: { [key: string]: CtaProps } = {
  default: {
    button: {
      text: '資料ダウンロード',
      link: '',
    },
    icon: {
      src: Cta,
      alt: 'cta',
      width: 600,
      height: 600,
    },
  },
};
