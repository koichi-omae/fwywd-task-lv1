import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: <span className='text-xs font-bold text-primary-800'>Text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='text-sm font-bold text-primary-800'>Text-xs</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='text-base font-bold text-primary-800'>Text-xs</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='text-lg font-bold text-primary-800'>Text-xs</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='text-xl font-bold text-primary-800'>Text-xs</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl font-bold text-primary-800'>Text-xs</span>,
};
