import { ComponentMeta, Story } from '@storybook/react';
import { Tag, TagProps } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <span className='tag tag-green'>tag tag-green</span>,
};
