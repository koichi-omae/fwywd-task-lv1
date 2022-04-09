import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Hero } from '.';

export default {
  title: 'organism/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
