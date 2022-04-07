import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Logo } from './Logo';

import LogoImg from '~/img/Logo.png';

export default {
  title: 'atom/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const ArrowIcon = Template.bind({});
ArrowIcon.args = {
  src: LogoImg,
  alt: 'Logo',
  width: 156,
  height: 60,
};
