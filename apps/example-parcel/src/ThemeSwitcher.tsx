/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Button, useToggleTheme } from './design-system';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      <Button margin="medium" onClick={toggleTheme}>
        Theme: {theme}
      </Button>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}

export default ThemeSwitcher;
