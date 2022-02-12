/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookLayout } from '../../storybook-helpers/StorybookLayout';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Callout } from './Callout';

export default {
  title: 'Components/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => {
  return (
    <StorybookLayout>
      <Box
        as="div"
        css={{
          display: 'grid',
        }}>
        <Callout {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
        <Callout spacing="fit" {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>

        <Callout variant="secondary" {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
        <Callout variant="secondary" spacing="fit" {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>

        <Callout variant="ghost" {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
        <Callout variant="ghost" spacing="fit" {...args}>
          <Text as="span">
            <strong>This is a callout.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
      </Box>
    </StorybookLayout>
  );
};

export const Callouts = Template.bind({});
Callouts.args = {};
