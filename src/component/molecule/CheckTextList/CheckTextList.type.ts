import { IconProps } from '@/component/atom/Icon';

export interface CheckTextListProps {
  checkTextList: CheckText[];
}

interface CheckText {
  icon: IconProps;
  text: string;
}
