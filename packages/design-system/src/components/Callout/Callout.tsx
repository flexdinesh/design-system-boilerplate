/** @jsxImportSource @emotion/react */
import { css, CSSObject } from '@emotion/react';
import React from 'react';
import { tokens } from '../../core/theme';
import { Box } from '../Box/Box';

export type CalloutProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  spacing?: 'default' | 'fit';
};

export const styles: CSSObject = {
  fontSize: tokens.fontSizes.base,
  borderLeft: '4px solid',
  borderRadius: tokens.radii.medium,
  margin: '1rem 0',
  color: tokens.colors.textBody,
};

export const variantStyles: {
  [variant in NonNullable<CalloutProps['variant']>]: CSSObject;
} = {
  primary: {
    borderLeftColor: tokens.colors.primaryBase,
    background: tokens.colors.transparentPrimaryBg,
  },
  secondary: {
    borderLeftColor: tokens.colors.secondaryBase,
    background: tokens.colors.transparentSecondaryBg,
  },
  ghost: {
    borderLeftColor: tokens.colors.primaryBase,
    backgroundColor: 'transparent',
  },
};

export const spacingStyles: {
  [spacing in NonNullable<CalloutProps['spacing']>]: CSSObject;
} = {
  default: {
    padding: '1rem 1.25rem',
  },
  fit: {
    padding: '0.25rem 1.25rem',
  },
};

export const Callout: React.FC<CalloutProps> = (props) => {
  const { children, variant = 'primary', spacing = 'default', ...rest } = props;

  const componentStyles = React.useMemo(() => {
    return css({
      ...styles,
      ...(variant && variantStyles[variant]),
      ...(spacing && spacingStyles[spacing]),
    });
  }, [variant, spacing]);

  return (
    <Box as={'blockquote'} css={componentStyles} {...rest}>
      {children}
    </Box>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Callout.displayName = 'Callout';
}
