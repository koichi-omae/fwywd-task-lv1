import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  children: (
    <span className='rounded-md bg-gradient-to-r from-primary-800 to-primary-500 py-5 px-12 text-base text-white hover:opacity-70'>
      button
    </span>
  ),
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: (
    <span
      className='rounded-md
    bg-gradient-to-r from-[#F2994A]
    to-[#F2C94C] py-5 px-12 text-base text-white hover:opacity-70'
    >
      button
    </span>
  ),
};
