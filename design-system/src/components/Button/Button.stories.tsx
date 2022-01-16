import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Box from 'components/Box';
import Button from 'components/Button';
import { StorybookThemeWrapper } from 'util/storybook-templates';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <StorybookThemeWrapper>
      <Box
        width={'100%'}
        height={'100%'}
        display="flex"
        css={{
          gap: 16,
        }}
        alignItems="center"
        justifyContent="center"
        backgroundColor={'background'}>
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="secondary">
          Secondary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
      </Box>
    </StorybookThemeWrapper>
  );
};

export const Buttons = Template.bind({});
Buttons.args = {
  variant: 'primary',
};
