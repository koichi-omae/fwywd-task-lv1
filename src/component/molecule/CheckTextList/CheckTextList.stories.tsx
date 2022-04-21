import { ComponentMeta, Story } from '@storybook/react';
import { CheckTextList } from './CheckTextList';
import { propObj } from './CheckTextList.props';
import { CheckTextListProps } from './CheckTextList.type';

export default {
  title: 'molecule/CheckTextList',
  component: CheckTextList,
} as ComponentMeta<typeof CheckTextList>;

const Template: Story<CheckTextListProps> = (args) => <CheckTextList {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
