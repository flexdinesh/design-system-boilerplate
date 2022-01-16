import React from 'react';
import type { FC } from 'react';
import Box from 'components/Box';
import Button from 'components/Button';
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

  React.useEffect(() => {
    const dataThemeInBodyElem = document.body.getAttribute(`data-theme`);
    if (dataThemeInBodyElem) {
      setTheme(dataThemeInBodyElem);
    }
  }, []);

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

export default ThemeSwitcher;
