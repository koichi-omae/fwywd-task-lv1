import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Sympathy } from '.';

export default {
  title: 'organism/Sympathy',
  component: Sympathy,
} as ComponentMeta<typeof Sympathy>;
const Template: ComponentStory<typeof Sympathy> = (args) => <Sympathy {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
