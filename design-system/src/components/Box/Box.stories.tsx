import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from 'components/Box';
import { args } from 'util/storybook';
import { StorybookThemeWrapper } from 'util/storybook-templates';

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
      <Box {...args}>Box Component</Box>
    </StorybookThemeWrapper>
  );
};

export const BoxProps = Template.bind({});
BoxProps.args = {
  backgroundColor: 'primary100',
  width: 100,
  height: 100,
};

export const ResponsiveBox = Template.bind({});
ResponsiveBox.args = {
  bg: 'primary300',
  width: '100%',
  height: 100,
};
