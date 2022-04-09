import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Benefit } from '.';

export default {
  title: 'organism/Benefit',
  component: Benefit,
} as ComponentMeta<typeof Benefit>;
const Template: ComponentStory<typeof Benefit> = (args) => <Benefit {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
