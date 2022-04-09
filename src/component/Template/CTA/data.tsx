import { CtaProps } from '.';
import Cta from '~/img/Cta.png';

export const storyList: { [key: string]: CtaProps } = {
  default: {
    button: {
      text: '資料ダウンロード',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSflSSih9XSE5RHXQQnhMoQb2u3dkmcaNe7pPkYm56h90QKVlw/viewform',
    },
    icon: {
      src: Cta,
      alt: 'cta',
      width: 600,
      height: 600,
    },
  },
};
