import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: (
    <span className='bg-primary-800 px-5 py-1 text-[1.125em] font-bold text-white'>Tag</span>
  ),
};
