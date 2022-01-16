import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Box from 'components/Box';
import Text from 'components/Text';
import { args } from 'util/storybook';
import { StorybookThemeWrapper } from 'util/storybook-templates';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: args.backgroundColor,
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <StorybookThemeWrapper>
      <Box
        width="100%"
        height={200}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="background">
        <Text {...args}>I am a text. Try changing the theme</Text>
      </Box>
    </StorybookThemeWrapper>
  );
};

export const Theme = Template.bind({});
Theme.args = {};
