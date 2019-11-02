import { createTheme, darkThemePrimitives } from 'baseui';

export const pokerTheme = createTheme(
  {
    ...darkThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    // primaryFontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  {
    // add all the theme overrides here - under the hood it uses deep merge
    borders: {
      buttonBorderRadius: '8px',
    },
  }
);
