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
  children: <span className='btn-green'>button</span>,
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: <span className='btn-yellow'>button</span>,
};
