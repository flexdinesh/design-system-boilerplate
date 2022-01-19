import clone from 'just-clone';
import set from 'just-safe-set';
import { walkObject } from './object';

// restricting token groups to be flat
type TokenGroup = { [key: string]: string | number };
type ThemeDefinition = { [key: string]: string | TokenGroup };

type CreatedTheme<
  T extends ThemeDefinition | TokenGroup,
  NestedKey extends string = '--theme-'
> = T extends any
  ? {
      readonly [Key in keyof T]: T[Key] extends TokenGroup
        ? CreatedTheme<T[Key], `${NestedKey}-${string & Key}`>
        : Key extends 'name'
        ? T[Key]
        : `var(${NestedKey}-${string & Key})`;
    }
  : never;

const tokenKeysToSkip = ['name'];
export const createTheme = <ThemeDef extends ThemeDefinition>(
  themeDefinition: ThemeDef
): CreatedTheme<ThemeDef> & {
  __definition: ThemeDef;
  __cssVars: Record<string, string | number>;
} => {
  // we store the original tokens in __definition
  const __definition = clone<ThemeDef>(themeDefinition);
  // we store the created css variables in __cssVars
  const __cssVars: Record<string, string | number> = {};
  // we assign css vars to token keys
  const theme = {} as CreatedTheme<ThemeDef>;

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
