/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Button, useToggleTheme } from '../../';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <Button size="small" css={{}} onClick={toggleTheme}>
      {theme}
    </Button>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}
