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
  children: <span className='text-xs text-primary-800'>Text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='text-sm text-primary-800'>Text-xs</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='text-base text-primary-800'>Text-xs</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='text-lg text-primary-800'>Text-xs</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='text-xl text-primary-800'>Text-xs</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl text-primary-800'>Text-xs</span>,
};
