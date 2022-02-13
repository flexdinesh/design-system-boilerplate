import { ThemeProvider, themes } from '../design-system';
import { MDXProvider } from './mdx-provider';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider themes={themes} defaultTheme="light">
      <MDXProvider>{children}</MDXProvider>
    </ThemeProvider>
  );
};

export default Providers;
