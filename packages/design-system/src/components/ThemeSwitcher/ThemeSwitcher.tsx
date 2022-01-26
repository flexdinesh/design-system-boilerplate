/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { useToggleTheme } from '../../hooks';
import { Button } from '../Button/Button';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}>
      <Button margin="medium" onClick={toggleTheme}>
        Theme: {theme}
      </Button>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}
