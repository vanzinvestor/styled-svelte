import { htmlTag, styledCombine } from './base';
import { tags } from './tags';
import type { HTMLTag, Styled } from './types';

const styled: any = styledCombine;

for (const tag of tags) {
  styled[tag as HTMLTag] = htmlTag(tag as HTMLTag);
}

export default styled as Styled;
