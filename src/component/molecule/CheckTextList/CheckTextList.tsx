import { CheckTextListProps } from './CheckTextList.type';
import { Icon } from '@/component/atom/Icon';

export const baseId = 'molecule-check-text-list';

export const CheckTextList: React.FC<CheckTextListProps> = ({ checkTextList }) => (
  <ul>
    {checkTextList.map((checkText, index) => (
      <li className='flex gap-x-2 py-1' key={index}>
        <Icon {...checkText.icon} />
        <span className='text-sm font-bold text-primary-800'>{checkText.text}</span>
      </li>
    ))}
  </ul>
);
