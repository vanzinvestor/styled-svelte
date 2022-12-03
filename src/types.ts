import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { CSSInterpolation } from '@emotion/css';

export type AnyProperties = {
  [prop: string]: any;
};

export type Theme<T = any> = AnyProperties & {
  theme: T;
};

export type StyledThemeContext<T = any> = Writable<T>;

/**
 * @see https://github.com/sveltejs/language-tools/issues/486#issuecomment-868975982
 */

export type StyledComponent = new (...args: any[]) => SvelteComponent;

export type CommonProps = {
  className: string | undefined;
  modifierClassName: string | undefined;
  m: number | ArraySpacing<number> | undefined;
  mt: number | undefined;
  mr: number | undefined;
  mb: number | undefined;
  ml: number | undefined;
  mx: number | undefined;
  my: number | undefined;
  p: number | ArraySpacing<number> | undefined;
  pt: number | undefined;
  pr: number | undefined;
  pb: number | undefined;
  pl: number | undefined;
  px: number | undefined;
  py: number | undefined;
  sx: ((props: any) => CSSInterpolation) | CSSInterpolation | undefined;
};

type TupMinMax<
  T,
  Min extends number,
  Max extends number,
  A extends (T | undefined)[] = [],
  O extends boolean = false
> = O extends false
  ? Min extends A['length']
    ? TupMinMax<T, Min, Max, A, true>
    : TupMinMax<T, Min, Max, [...A, T], false>
  : Max extends A['length']
  ? A
  : TupMinMax<T, Min, Max, [...A, T?], false>;

export type ArraySpacing<T> = TupMinMax<T, 1, 4>;

/**
 * @see https://github.com/emotion-js/emotion/blob/main/packages/styled/src/tags.js
 */
export type HTMLTag =
  | 'a'
  | 'abbr'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'base'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'caption'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'del'
  | 'details'
  | 'dfn'
  | 'dialog'
  | 'div'
  | 'dl'
  | 'dt'
  | 'em'
  | 'embed'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'head'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'keygen'
  | 'label'
  | 'legend'
  | 'li'
  | 'link'
  | 'main'
  | 'map'
  | 'mark'
  | 'marquee'
  | 'menu'
  | 'menuitem'
  | 'meta'
  | 'meter'
  | 'nav'
  | 'noscript'
  | 'object'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'param'
  | 'picture'
  | 'pre'
  | 'progress'
  | 'q'
  | 'rp'
  | 'rt'
  | 'ruby'
  | 's'
  | 'samp'
  | 'script'
  | 'section'
  | 'select'
  | 'small'
  | 'source'
  | 'span'
  | 'strong'
  | 'style'
  | 'sub'
  | 'summary'
  | 'sup'
  | 'table'
  | 'tbody'
  | 'td'
  | 'textarea'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'time'
  | 'title'
  | 'tr'
  | 'track'
  | 'u'
  | 'ul'
  | 'var'
  | 'video'
  | 'wbr' // SVG
  | 'circle'
  | 'clipPath'
  | 'defs'
  | 'ellipse'
  | 'foreignObject'
  | 'g'
  | 'image'
  | 'line'
  | 'linearGradient'
  | 'mask'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'rect'
  | 'stop'
  | 'svg'
  | 'text'
  | 'tspan';
