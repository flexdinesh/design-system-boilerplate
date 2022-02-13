/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsxImportSource @emotion/react */
import { MDXProvider as MDXProviderImported } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import { Callout, Text, tokens } from '../design-system';
import { theme } from './prism-theme';

const CodeHighlight: React.FC<{ className: string; children: string }> = ({
  className,
  children,
}) => {
  const language = className?.replace(/language-/, '') as React.ComponentProps<
    typeof Highlight
  >['language'];

  if (!language) {
    return (
      <code
        css={{
          ':not(pre code)': {
            background: tokens.colors.codeBg,
            borderRadius: '3px',
            boxShadow: `0 0 0 1px ${tokens.colors.border}`,
            fontFamily:
              'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
            fontSize: tokens.fontSizes.small,
            maxWidth: '100%',
            overflow: 'auto',
            padding: 4,
          },
        }}>
        {children?.trim()}
      </code>
    );
  }

  children = typeof children === 'string' ? children.trim() : children;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}>
      {({
        className,
        style,
        tokens: codeTokens,
        getLineProps,
        getTokenProps,
      }) => {
        return (
          <pre
            className={className}
            style={{
              ...style,
              ...{
                background: tokens.colors.codeBg,
                textShadow: 'none',
                fontSize: tokens.fontSizes.small,
              },
            }}
            css={{
              padding: '1rem',
              borderRadius: '3px',
              boxShadow: `0 0 0 1px ${tokens.colors.border}`,
              overflow: 'auto',
              fontFamily:
                'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
              'span.token.operator': {
                background: 'none',
              },
              'span.token.script.language-javascript': {
                color: tokens.colors.codeText,
              },
            }}>
            {codeTokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

const H1: React.FC = (props) => (
  <Text as="h1" {...props}>
    {props.children}
  </Text>
);

const H2: React.FC = (props) => (
  <Text as="h2" {...props}>
    {props.children}
  </Text>
);

const H3: React.FC = (props) => (
  <Text as="h3" {...props}>
    {props.children}
  </Text>
);

const H4: React.FC = (props) => (
  <Text as="h4" {...props}>
    {props.children}
  </Text>
);

const P: React.FC = (props) => (
  <Text as="p" {...props}>
    {props.children}
  </Text>
);

const Blockquote: React.FC = (props) => (
  // @ts-ignore
  <Callout variant="primary" spacing="default" css={{ p: { margin: 0 } }}>
    {props.children}
  </Callout>
);

const Li: React.FC = (props) => (
  <li
    {...props}
    css={{
      lineHeight: tokens.lineHeights.body,
      color: tokens.colors.textBody,
      margin: '0.5rem 0',
    }}>
    {props.children}
  </li>
);

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  li: Li,
  code: CodeHighlight,
  blockquote: Blockquote,
};

export const MDXProvider: React.FC = ({ children }) => {
  return (
    // @ts-ignore
    <MDXProviderImported components={components}>
      {children}
    </MDXProviderImported>
  );
};
