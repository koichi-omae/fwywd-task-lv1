import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon';
import Arrow from '~/img/Arrow.png';
import Check from '~/img/Check.png';
import Facebook from '~/img/Facebook.png';
import Hatebu from '~/img/Hatebu.png';
import Line from '~/img/Line.png';
import NotCheck from '~/img/NotCheck.png';
import Pinterest from '~/img/Pinterest.png';
import Twitter from '~/img/Twitter.png';

export default {
  title: 'atom/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ArrowIcon = Template.bind({});
ArrowIcon.args = {
  src: Arrow,
  alt: 'Arrow',
  width: 50,
  height: 50,
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  src: Check,
  alt: 'Check',
  width: 50,
  height: 50,
};

export const NotCheckIcon = Template.bind({});
NotCheckIcon.args = {
  src: NotCheck,
  alt: 'NotCheck',
  width: 50,
  height: 50,
};

export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
  src: Facebook,
  alt: 'Facebook',
  width: 40,
  height: 40,
};

export const TwitterIcon = Template.bind({});
TwitterIcon.args = {
  src: Twitter,
  alt: 'Twitter',
  width: 40,
  height: 40,
};

export const LineIcon = Template.bind({});
LineIcon.args = {
  src: Line,
  alt: 'Line',
  width: 40,
  height: 40,
};

export const HatebuIcon = Template.bind({});
HatebuIcon.args = {
  src: Hatebu,
  alt: 'Hatebu',
  width: 40,
  height: 55,
};

export const PinterestIcon = Template.bind({});
PinterestIcon.args = {
  src: Pinterest,
  alt: 'Pinterest',
  width: 40,
  height: 40,
};
