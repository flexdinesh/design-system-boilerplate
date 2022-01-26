import Box from '../components/Box';
import CSSReset from '../components/CSSReset';
import ThemeProvider from '../components/ThemeProvider';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { themes } from '../core/theme';

export const StorybookThemeWrapper: React.FC = ({ children }) => {
  return (
    <>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="light">
        <ThemeSwitcher />
        <Box width={'100%'} height={'100vh'} backgroundColor={'background'}>
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
};
