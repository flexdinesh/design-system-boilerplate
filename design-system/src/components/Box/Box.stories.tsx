/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from 'components/Box';
import { args } from '../../storybook-helpers/args';
import { StorybookThemeWrapper } from '../../storybook-helpers/StorybookThemeWrapper';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: args.backgroundColor,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return (
    <StorybookThemeWrapper>
      <Box {...args}>Box w:200, height:100</Box>
    </StorybookThemeWrapper>
  );
};

export const BoxProps = Template.bind({});
BoxProps.args = {
  border: '1px solid',
  borderColor: 'primary500',
  width: 200,
  height: 100,
};
