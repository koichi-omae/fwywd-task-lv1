import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Pricing } from '.';

export default {
  title: 'organism/Pricing',
  component: Pricing,
} as ComponentMeta<typeof Pricing>;
const Template: ComponentStory<typeof Pricing> = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
