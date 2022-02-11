/** @jsxImportSource @emotion/react */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { MDXProvider as MDXProviderImported } from '@mdx-js/react';
import { Text, tokens } from 'src/design-system';
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
            fontSize: '0.875rem',
            maxWidth: '100%',
            overflow: 'auto',
            padding: 4,
          },
        }}
      >
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
      language={language}
    >
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
                fontSize: '1rem',
              },
            }}
            css={{
              padding: '1rem',
              borderRadius: '3px',
              boxShadow: `0 0 0 1px ${tokens.colors.border}`,
              fontFamily:
                'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
              'span.token.operator': {
                background: 'none',
              },
              'span.token.script.language-javascript': {
                color: tokens.colors.codeText,
              },
            }}
          >
            {codeTokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
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

const H1 = (props: React.PropsWithChildren<{}>) => (
  <Text as="h1" {...props}>
    {props.children}
  </Text>
);

const H2 = (props: React.PropsWithChildren<{}>) => (
  <Text as="h2" {...props}>
    {props.children}
  </Text>
);

const H3 = (props: React.PropsWithChildren<{}>) => (
  <Text as="h3" {...props}>
    {props.children}
  </Text>
);

const H4 = (props: React.PropsWithChildren<{}>) => (
  <Text as="h4" {...props}>
    {props.children}
  </Text>
);

const P = (props: React.PropsWithChildren<{}>) => (
  <Text as="p" {...props}>
    {props.children}
  </Text>
);

const Li = (props: React.PropsWithChildren<{}>) => (
  <li
    {...props}
    css={{
      lineHeight: tokens.lineHeights.body,
      color: tokens.colors.textBody,
    }}
  >
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
};

export const MDXProvider: React.FC = ({ children }) => {
  return (
    // @ts-ignore
    <MDXProviderImported components={components}>
      {children}
    </MDXProviderImported>
  );
};
