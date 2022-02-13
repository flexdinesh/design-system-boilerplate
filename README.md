# Design System Boilerplate

A highly scalable, performance focused design system boilerplate setup with **configurable tokens**, **smart theming**, **strong types** and auto-generated css variables.

> You can **server render themes** with zero runtime concerns. [This website](https://design-system-boilerplate.netlify.app) is server rendered with light theme. Try reloading the page after disabling JavaScript and you'll see the server rendered theme in action.

## How does it work?

- Themes are statically compiled (no runtime theming).
- Components are styled using [Emotion](https://emotion.sh/docs/introduction).
- Tokens are based on [System UI Theme Specification](https://system-ui.com/theme/).
- Components are built with [Styled System](https://styled-system.com/) component API for rapid UI development.
- Strong types with full token autocomplete support in component APIs

## Principles

The design system is built with a set of constraints that allows us to statically compile theme definitions and build flexibile APIs.

- Predefine all your themes. i.e _no runtime theme creation_. This allows us to statically define themes using css variables and create strongly typed theme tokens. Strong types help with full autocomplete support in component APIs. Eg.

  - **Box** component `backgroundColor` prop autocompletes with available color tokens - `primary`, `secondary`, etc.
  - **Box** component `padding` prop autocompletes with available spacing tokens - `small`, `large`, etc.

- Token groups are identified and based on [System UI Theme Specification](https://system-ui.com/theme/). Eg. `colors`, `space`, `fontSizes`, etc.

- Keep your token groups flat. Don't nest your tokens within token groups. Eg. `colors.primary` is allowed. `colors.primary.success` is not allowed.

- All themes should have the same set of tokens. Eg. _dark_ theme cannot have a token that's not available in _light_ theme.

- Theming is setup with CSS custom properties (css variables). This makes it easy to switch or server render themes without runtime concerns. Eg. `token.colors.primary` has the same css variable across themes and makes it easy to statically define styles instead of defining the styles during runtime based on theme. `background: ${tokens.colors.primary}` instead of `background: ${(prop) => prop.theme.colors.primary}`.

## How does theming work?

- Theme definitions are automatically converted to css variables using the `createTheme` utility.
- The generated css variables are theme-name scoped in `ThemeProvider`.

This is how the generated css variables are inserted into the global stylesheet —

```css
body[data-theme='light'] {
  --theme-colors-primary: blue;
  --theme-colors-secondary: lightblue;
}
body[data-theme='dark'] {
  --theme-colors-primary: green;
  --theme-colors-secondary: lightgreen;
}
```

So when you use a token in your component —

```jsx
const Example = () => {
  return (
    <div css={{ backgroundColor: tokens.colors.primary }}>Hello World</div>
  );
};
```

This is what is used as token value —

```jsx
const Example = () => {
  return (
    <div css={{ backgroundColor: 'var(--theme-colors-primary)' }}>
      Hello World
    </div>
  );
};
```

And the css variable `--theme-colors-primary` value is scoped based on the data attribute in body element — `<body data-theme="light">`

## Server rendering themes

Theming is completely css driven. All themes are statically defined using tokens which are then converted to css variables. Current theme is decided based on a html attribute on body element. Eg. `<body data-theme="light">`. So server rendering themes is just a matter of rendering the right theme name as body attribute.

## Example theme usage

### Using tokens

All themes use the same css variable names as token values. So you can define the styles statically without needing runtime theme prop.

```jsx
import { tokens } from '@unpublished/design-system';

const Example = () => {
  return (
    <div css={{ backgroundColor: tokens.colors.primary }}>Hello World</div>
  );
};
```

### Getting current theme name

Getting current theme is as simple as querying the DOM attribute. You don't need Context or fancy hooks to provide you the value.

```js
const themeName = document.body.getAttribute('data-theme');
```

_Note: You can use a context based hook if you need — `useTheme()`._

### Switching theme

Switching theme is as simple as setting the theme name on body element. Since themes are completely css driven, themes can be changed without re-rendering the whole tree.

```js
document.body.setAttribute('data-theme', 'dark');
```

_Note: You can also re-render the whole tree on theme change using `useTheme()` hook if you have to._

## License

MIT © [Dinesh Pandiyan](https://github.com/flexdinesh)
