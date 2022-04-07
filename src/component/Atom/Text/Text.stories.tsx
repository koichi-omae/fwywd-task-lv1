import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

//Primary Text
export const PrimaryExtraSmall = Template.bind({});
PrimaryExtraSmall.args = {
  children: <span className='primary-xs'>Text-xs</span>,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: <span className='primary-sm'>Text-xs</span>,
};

export const PrimaryBase = Template.bind({});
PrimaryBase.args = {
  children: <span className='primary-base'>Text-xs</span>,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: <span className='primary-lg'>Text-xs</span>,
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
  children: <span className='primary-xl'>Text-xs</span>,
};

export const PrimaryExtraLarge2 = Template.bind({});
PrimaryExtraLarge2.args = {
  children: <span className='primary-2xl'>Text-xs</span>,
};

//Gray Text
export const GrayExtraSmall = Template.bind({});
GrayExtraSmall.args = {
  children: <span className='gray-xs'>Text-xs</span>,
};

export const GraySmall = Template.bind({});
GraySmall.args = {
  children: <span className='gray-sm'>Text-xs</span>,
};

export const GrayBase = Template.bind({});
GrayBase.args = {
  children: <span className='gray-base'>Text-xs</span>,
};

export const GrayLarge = Template.bind({});
GrayLarge.args = {
  children: <span className='gray-lg'>Text-xs</span>,
};

export const GrayExtraLarge = Template.bind({});
GrayExtraLarge.args = {
  children: <span className='gray-xl'>Text-xs</span>,
};

export const GrayExtraLarge2 = Template.bind({});
GrayExtraLarge2.args = {
  children: <span className='gray-2xl'>Text-xs</span>,
};

//white Text
export const WhiteExtraSmall = Template.bind({});
WhiteExtraSmall.args = {
  children: <span className='white-xs'>Text-xs</span>,
};

export const WhiteSmall = Template.bind({});
WhiteSmall.args = {
  children: <span className='white-sm'>Text-xs</span>,
};

export const WhiteBase = Template.bind({});
WhiteBase.args = {
  children: <span className='white-base'>Text-xs</span>,
};

export const WhiteLarge = Template.bind({});
WhiteLarge.args = {
  children: <span className='white-lg'>Text-xs</span>,
};

export const WhiteExtraLarge = Template.bind({});
WhiteExtraLarge.args = {
  children: <span className='white-xl'>Text-xs</span>,
};

export const WhiteExtraLarge2 = Template.bind({});
WhiteExtraLarge2.args = {
  children: <span className='white-2xl'>Text-xs</span>,
};
