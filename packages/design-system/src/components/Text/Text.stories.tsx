/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { args } from '../../storybook-helpers/args';
import { StorybookThemeWrapper } from '../../storybook-helpers/StorybookThemeWrapper';
import { Box } from '../Box/Box';
import { Text } from './Text';

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

const HeadingTemplate: ComponentStory<typeof Text> = (args) => {
  return (
    <StorybookThemeWrapper>
      <Box
        width="100%"
        height={'100vh'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="background">
        <Box css={{ textAlign: 'center' }}>
          <Text as="h1">{'<h1>I am a heading.</h1>'}</Text>
          <Text as="h2">{'<h2>I am a heading.</h2>'}</Text>
          <Text as="h3">{'<h3>I am a heading.</h3>'}</Text>
          <Text as="h4">{'<h4>I am a heading.</h4>'}</Text>
          <Text as="div">{'<div>I am a body text.</div>'}</Text>
        </Box>
      </Box>
    </StorybookThemeWrapper>
  );
};

export const Headings = HeadingTemplate.bind({});
