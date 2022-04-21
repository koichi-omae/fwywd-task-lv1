import { ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  children: <span className='btn btn-green'>btn btn-green</span>,
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: <span className='btn btn-yellow'>btn btn-yellow</span>,
};
