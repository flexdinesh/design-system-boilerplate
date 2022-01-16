import clone from 'just-clone';
import set from 'just-safe-set';
import { walkObject } from './object';

type NameKey = 'name';
type CreatedTheme<
  ThemeDefinition extends Record<string, any>,
  NestedKey extends string = '-'
> = {
  [Key in keyof ThemeDefinition]: ThemeDefinition[Key] extends object
    ? CreatedTheme<ThemeDefinition[Key], `${NestedKey}-${string & Key}`>
    : Key extends NameKey
    ? ThemeDefinition[Key]
    : `var(${NestedKey}-${string & Key})`;
};

const tokenKeysToSkip = ['name'];
export const createTheme = <ThemeDefinition extends Record<string, any>>(
  themeDefinition: ThemeDefinition
): CreatedTheme<ThemeDefinition> & {
  __definition: ThemeDefinition;
  __cssVars: Record<string, string | number>;
} => {
  // we store the original tokens in __definition
  const __definition = clone<ThemeDefinition>(themeDefinition);
  // we store the created css variables in __cssVars
  const __cssVars: Record<string, string | number> = {};
  // we assign css vars to token keys
  const theme = {} as CreatedTheme<ThemeDefinition>;

  walkObject(themeDefinition, ({ value, location, isLeaf }) => {
    if (tokenKeysToSkip.includes(location[0])) {
      set(theme, location, value);
      return;
    }
    if (isLeaf) {
      const cssVarName = `--theme-${location.join('-')}`;
      const cssVarValue = typeof value === 'number' ? `${value}px` : value;
      set(theme, location, `var(${cssVarName})`);
      __cssVars[cssVarName] = cssVarValue;
    }
  });

  return { ...theme, __definition, __cssVars };
};
