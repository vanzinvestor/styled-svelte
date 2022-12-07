import { getContext } from 'svelte';
import { styledThemeKey } from '../styledThemeKey';
import type { ThemeContext } from '../types';

export const useTheme = <T = any>() => {
  const ctx = getContext<ThemeContext<T>>(styledThemeKey);

  if (process.env.NODE_ENV !== 'production') {
    if (!ctx) {
      throw new Error(
        'could not find styled-svelte context value; please ensure the component is wrapped in a <ThemeProvider {theme}></ThemeProvider>'
      );
    }
  }

  return ctx.theme;
};
