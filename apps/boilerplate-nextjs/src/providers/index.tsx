import { ThemeProvider, themes } from 'src/design-system';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider themes={themes} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;