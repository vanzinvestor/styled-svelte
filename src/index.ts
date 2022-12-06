import { htmlTag, styled as defaultStyled } from './styled';
import { tags } from './tags';
import type { HTMLTag, Styled } from './types';

export * from './color';
export * from './css';
export * from './types';
export * from './styledThemeKey';

export { default as ThemeProvider } from './components/ThemeProvider.svelte';

const htmlTagStyle: any = defaultStyled;

for (const tag of tags) {
  htmlTagStyle[tag] = htmlTag(tag as HTMLTag);
}

export default defaultStyled as Styled;
