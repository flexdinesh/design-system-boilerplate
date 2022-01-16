import React from 'react';
import type { FC } from 'react';
import Box from 'components/Box';
import { themes } from 'core/theme';

/* just the theme name is enough since all theme css vars are already inserted into stylesheet */
const themeNames = themes.map((t) => t.name);

const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = React.useState(themeNames[0]);

  const toggleTheme = () => {
    const index = themeNames.indexOf(theme);
    let nextTheme = theme;
    if (index >= 0 && index < themeNames.length - 1) {
      nextTheme = themeNames[index + 1];
    } else {
      nextTheme = themeNames[0];
    }
    document.body.setAttribute(`data-theme`, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}>
      <Box
        as="button"
        bg={'primary100'}
        color="alternate"
        onClick={toggleTheme}>
        Theme: {theme}
      </Box>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}

export default ThemeSwitcher;
