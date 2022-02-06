import { ThemeProvider, themes } from '../design-system';

export const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider themes={themes} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
