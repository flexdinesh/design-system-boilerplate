/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Button, useToggleTheme } from 'src/design-system';

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
      <Button css={{ padding: '1rem 2rem' }} onClick={toggleTheme}>
        Theme: {theme}
      </Button>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}

export default ThemeSwitcher;
