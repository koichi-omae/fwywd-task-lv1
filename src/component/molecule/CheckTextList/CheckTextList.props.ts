import { CheckTextListProps } from './CheckTextList.type';

const defaultProps: CheckTextListProps = {
  checkTextList: [
    { icon: { type: 'check' }, text: 'text1' },
    { icon: { type: 'check' }, text: 'text2' },
    { icon: { type: 'check' }, text: 'text3' },
  ],
};

export const propObj: { [key: string]: CheckTextListProps } = {
  default: defaultProps,
};
