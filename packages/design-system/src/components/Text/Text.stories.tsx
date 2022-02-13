/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { args } from '../../storybook-helpers/args';
import { StorybookLayout } from '../../storybook-helpers/StorybookLayout';
import { Box } from '../Box/Box';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: args.backgroundColor,
  },
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <StorybookLayout>
      <Box css={{ textAlign: 'center' }}>
        <Text as="h1">{'<h1>I am a heading.</h1>'}</Text>
        <Text as="h2">{'<h2>I am a heading.</h2>'}</Text>
        <Text as="h3">{'<h3>I am a heading.</h3>'}</Text>
        <Text as="h4">{'<h4>I am a heading.</h4>'}</Text>
        <Text as="p">{'<p>I am a paragraph.</p>'}</Text>
        <Text as="div">{'<div>I am a body text.</div>'}</Text>
      </Box>
    </StorybookLayout>
  );
};

export const Headings = Template.bind({});
