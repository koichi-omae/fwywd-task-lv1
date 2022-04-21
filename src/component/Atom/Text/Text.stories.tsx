import { ComponentMeta, Story } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <span className='text-primary-800'>text-primary-800</span>,
};

export const Highlight = Template.bind({});
Highlight.args = {
  children: <span className='highlight text-primary-800'>text-primary-800 highlight</span>,
};

export const Black = Template.bind({});
Black.args = {
  children: <span className='text-black'>text-black</span>,
};

export const White = Template.bind({});
White.args = {
  children: <span className='text-white'>text-white</span>,
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: <span className='text-xs'>text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='text-sm'>text-sm</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='text-base'>text-base</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='text-lg'>text-lg</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='text-xl'>text-xl</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl'>text-2xl</span>,
};
