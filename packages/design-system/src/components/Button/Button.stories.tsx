/** @jsxImportSource @emotion/react */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookThemeWrapper } from '../../storybook-helpers/StorybookThemeWrapper';
import { Box } from '../Box/Box';
import { Button } from './Button';

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
        flexDirection="column">
        <Box
          width={'100%'}
          height={80}
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
        <Box
          width={'100%'}
          height={80}
          display="flex"
          css={{
            gap: 16,
          }}
          alignItems="center"
          justifyContent="center"
          backgroundColor={'background'}>
          <Button {...args} size="large" variant="primary">
            Primary
          </Button>
          <Button {...args} size="large" variant="secondary">
            Secondary
          </Button>
          <Button {...args} size="large" variant="outline">
            Outline
          </Button>
        </Box>
      </Box>
    </StorybookThemeWrapper>
  );
};

export const Buttons = Template.bind({});
Buttons.args = {};
