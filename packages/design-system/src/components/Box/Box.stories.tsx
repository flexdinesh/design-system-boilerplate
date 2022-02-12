/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { args } from '../../storybook-helpers/args';
import { StorybookLayout } from '../../storybook-helpers/StorybookLayout';
import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: args.backgroundColor,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return (
    <StorybookLayout>
      <Box {...args}>Box w:400, height:100</Box>
    </StorybookLayout>
  );
};

export const BoxProps = Template.bind({});
BoxProps.args = {
  border: '1px solid',
  borderColor: 'primary500',
  width: 400,
  height: 100,
  padding: 'medium',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
