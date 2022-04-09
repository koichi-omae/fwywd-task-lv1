import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { Cta } from '.';

export default {
  title: 'organism/Cta',
  component: Cta,
} as ComponentMeta<typeof Cta>;
const Template: ComponentStory<typeof Cta> = (args) => <Cta {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
