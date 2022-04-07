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
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-xs font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};

export const Small = Template.bind({});
Small.args = {
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-sm font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};

export const Base = Template.bind({});
Base.args = {
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-base font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};

export const Large = Template.bind({});
Large.args = {
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-lg font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-xl font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: (
    <span className='border-b-4 border-b-[#F2C94C] text-2xl font-bold text-primary-800'>
      Text-xs
    </span>
  ),
};
