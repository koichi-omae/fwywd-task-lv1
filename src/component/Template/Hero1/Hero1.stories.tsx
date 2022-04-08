import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Hero1 } from '.';

export default {
  title: 'organism/Hero1',
  component: Hero1,
} as ComponentMeta<typeof Hero1>;
const Template: ComponentStory<typeof Hero1> = (args) => <Hero1 {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
