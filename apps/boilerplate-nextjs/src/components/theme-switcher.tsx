/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Button, useToggleTheme } from 'src/design-system';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <Button size="small" onClick={toggleTheme}>
      {theme}
    </Button>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}
