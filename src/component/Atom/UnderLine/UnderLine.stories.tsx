import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { UnderLine } from './UnderLine';

export default {
  title: 'atom/UnderLine',
  component: UnderLine,
} as ComponentMeta<typeof UnderLine>;

const Template: ComponentStory<typeof UnderLine> = (args) => <UnderLine {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: <span className='underline-xs'>Text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='underline-sm'>Text-sm</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='underline-base'>Text-base</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='underline-lg'>Text-lg</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='underline-xl'>Text-xl</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='underline-2xl'>Text-2xl</span>,
};
