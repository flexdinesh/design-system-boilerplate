/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { useToggleTheme } from '../../hooks/useToggleTheme';
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
      <Button size="small" margin="medium" onClick={toggleTheme}>
        {theme}
      </Button>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}
