import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { PageFooter } from '.';

export default {
  title: 'organism/PageFooter',
  component: PageFooter,
} as ComponentMeta<typeof PageFooter>;
const Template: ComponentStory<typeof PageFooter> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
