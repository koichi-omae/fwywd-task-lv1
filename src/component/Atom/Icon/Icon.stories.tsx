import { ComponentMeta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
  title: 'atom/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Logo = Template.bind({});
Logo.args = { type: 'logo', width: 156, height: 60 };

export const Arrow = Template.bind({});
Arrow.args = {
  type: 'arrow',
  width: 50,
  height: 50,
};

export const Check = Template.bind({});
Check.args = {
  type: 'check',
  width: 50,
  height: 50,
};

export const NotCheck = Template.bind({});
NotCheck.args = {
  type: 'notCheck',
  width: 50,
  height: 50,
};

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'facebook',
  width: 50,
  height: 50,
};

export const Twitter = Template.bind({});
Twitter.args = {
  type: 'twitter',
  width: 50,
  height: 50,
};

export const Hatebu = Template.bind({});
Hatebu.args = {
  type: 'hatebu',
  width: 50,
  height: 50,
};

export const Line = Template.bind({});
Line.args = {
  type: 'line',
  width: 50,
  height: 50,
};

export const Pinterest = Template.bind({});
Pinterest.args = {
  type: 'pinterest',
  width: 50,
  height: 50,
};
