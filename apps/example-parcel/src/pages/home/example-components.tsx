/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, Button, Callout, tokens } from '../../design-system';

export const styles = {
  exampleComponents: css`
    margin: 2rem 0 0;
  `,
};

export const ExampleComponents = () => {
  return (
    <Box as="div" css={styles.exampleComponents}>
      <Text as="h2">Example Components</Text>
      <Text as="p">
        Two example components built with tokens to demonstrate theming.
      </Text>
      <Text as="h3">Button</Text>
      <Box
        as="div"
        display="flex"
        css={{
          padding: '1rem 0',
          gap: tokens.space.medium,
        }}
        alignItems="center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Box>
      <Text as="h3">Callout</Text>
      <Box
        as="div"
        display="flex"
        flexDirection="column"
        css={{
          padding: '1rem 0',
          gap: tokens.space.medium,
        }}>
        <Callout variant="primary">
          <Text as="span">
            <strong>Primary variant.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
        <Callout variant="secondary">
          <Text as="span">
            <strong>Secondary variant.</strong> You can write anything here to
            bring extra attention to your users.
          </Text>
        </Callout>
        <Callout variant="ghost">
          <Text as="span">
            <strong>Ghost variant.</strong> You can write anything here to bring
            extra attention to your users.
          </Text>
        </Callout>
      </Box>
    </Box>
  );
};
