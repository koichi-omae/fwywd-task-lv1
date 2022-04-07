import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { storyList } from './data';
import { PageHeader } from '.';

export default {
  title: 'organism/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;
const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = storyList.default;
