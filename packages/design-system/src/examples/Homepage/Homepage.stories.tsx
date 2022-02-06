/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Homepage } from './Homepage';

export default {
  title: 'Examples/Homepage',
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => {
  return <Homepage />;
};

export const Default = Template.bind({});
Default.args = {};
