import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import HelloWorld from './HelloWorld';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      name: 'name',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof HelloWorld>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Jane',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'John',
};
