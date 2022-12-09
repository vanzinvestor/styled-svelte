import { htmlTag, styled as defaultStyled } from './styled';
import { tags } from './tags';
import type { HTMLTag, Styled } from './types';

export * from './color';
export * from './css';
export * from './hooks';
export * from './types';
export * from './styledThemeKey';

export { default as StyledComponent } from './components/StyledComponent.svelte';

export { default as ThemeProvider } from './components/ThemeProvider.svelte';

const htmlTagStyled: any = defaultStyled;

for (const tag of tags) {
  htmlTagStyled[tag as HTMLTag] = htmlTag(tag as HTMLTag);
}

export default htmlTagStyled as Styled;
