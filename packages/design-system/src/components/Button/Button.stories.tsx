/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookLayout } from '../../storybook-helpers/StorybookLayout';
import { Box } from '../Box/Box';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <StorybookLayout>
      <Box
        height={100}
        display="flex"
        css={{
          gap: 24,
        }}
        alignItems="center"
        justifyContent="center">
        <Button {...args} size="small">
          Primary
        </Button>
        <Button {...args} size="medium">
          Secondary
        </Button>
        <Button {...args} size="large">
          Secondary
        </Button>
      </Box>
      <Box
        height={100}
        display="flex"
        css={{
          gap: 24,
        }}
        alignItems="center"
        justifyContent="center">
        <Button {...args} size="small" variant="secondary">
          Primary
        </Button>
        <Button {...args} size="medium" variant="secondary">
          Secondary
        </Button>
        <Button {...args} size="large" variant="secondary">
          Secondary
        </Button>
      </Box>
    </StorybookLayout>
  );
};

export const Buttons = Template.bind({});
Buttons.args = {};
