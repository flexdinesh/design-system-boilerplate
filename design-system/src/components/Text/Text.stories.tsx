/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from 'components/Box';
import Text from 'components/Text';
import { args } from '../../storybook-helpers/args';
import { StorybookThemeWrapper } from '../../storybook-helpers/StorybookThemeWrapper';

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
        <Text {...args}>{args.children}</Text>
      </Box>
    </StorybookThemeWrapper>
  );
};

export const Theme = Template.bind({});
Theme.args = {
  children: 'I am a text. Try changing the theme.',
};

export const Heading = Template.bind({});
Heading.args = {
  as: 'h1',
  children: '<h1>I am a heading.</h1>',
};
