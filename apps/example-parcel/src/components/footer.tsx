/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, tokens } from '../design-system';

export const styles = {
  footer: css`
    box-shadow: 0 1px 0 0 ${tokens.colors.border} inset;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    font-size: ${tokens.fontSizes.body};
    background: ${tokens.colors.codeBg};
    color: ${tokens.colors.codeText};
  `,
};

export const Footer = () => {
  return (
    <Box as="footer" css={styles.footer}>
      <Text>
        Made by{' '}
        <a
          href="https://twitter.com/flexdinesh"
          target="_blank"
          rel="noreferrer"
          css={css`
            line-height: 1.75;
            font-weight: ${tokens.fontWeights.semibold};
            border-bottom: 1.5px solid ${tokens.colors.primaryBase};
            color: ${tokens.colors.primaryBase};
            padding-bottom: 0.125rem;
            text-decoration: none;

            :hover {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
              background-position: bottom;
              background-repeat: repeat-x;
              background-size: 20%;
              border-bottom: 0;
              padding-bottom: 0.25rem;
              text-decoration: none;
            }
          `}>
          Dinesh
        </a>
      </Text>
    </Box>
  );
};
