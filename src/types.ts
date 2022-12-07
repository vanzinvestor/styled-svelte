import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { CSSInterpolation } from '@emotion/css';

export type Styled = {
  <T = any>(
    Tag: HTMLTag | StyledComponent,
    style: Style<T>,
    options?: Options
  ): StyledComponent;
  a: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  abbr: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  address: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  area: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  article: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  aside: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  audio: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  b: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  base: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  bdi: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  bdo: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  big: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  blockquote: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  body: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  br: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  button: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  canvas: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  caption: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  cite: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  code: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  col: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  colgroup: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  data: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  datalist: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  dd: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  del: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  details: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  dfn: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  dialog: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  div: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  dl: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  dt: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  em: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  embed: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  fieldset: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  figcaption: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  figure: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  footer: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  form: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h1: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h2: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h3: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h4: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h5: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  h6: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  head: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  header: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  hgroup: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  hr: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  html: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  i: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  iframe: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  img: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  input: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  ins: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  kbd: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  keygen: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  label: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  legend: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  li: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  link: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  main: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  map: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  mark: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  marquee: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  menu: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  menuitem: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  meta: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  meter: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  nav: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  noscript: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  object: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  ol: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  optgroup: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  option: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  output: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  p: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  param: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  picture: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  pre: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  progress: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  q: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  rp: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  rt: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  ruby: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  s: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  samp: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  script: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  section: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  select: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  small: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  source: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  span: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  strong: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  style: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  sub: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  summary: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  sup: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  table: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  tbody: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  td: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  textarea: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  tfoot: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  th: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  thead: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  time: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  title: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  tr: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  track: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  u: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  ul: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  var: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  video: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  wrg: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  circle: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  clipPath: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  defs: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  ellipse: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  foreignObject: <T = any>(
    style: Style<T>,
    options?: Options
  ) => StyledComponent;
  g: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  image: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  line: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  linearGradient: <T = any>(
    style: Style<T>,
    options?: Options
  ) => StyledComponent;
  mask: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  path: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  pattern: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  polygon: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  polyline: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  radialGradient: <T = any>(
    style: Style<T>,
    options?: Options
  ) => StyledComponent;
  rect: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  stop: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  svg: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  text: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
  tspan: <T = any>(style: Style<T>, options?: Options) => StyledComponent;
};

export type Style<T = any> =
  | CSSInterpolation
  | TemplateStringsArray
  | ((props: Props<T>) => CSSInterpolation);

export type AnyProperties = {
  [prop: string]: any;
};

export type Props<T = any> = AnyProperties & {
  theme: T;
};

export type StyledContext<T = any> = Writable<T>;

export type Options = {
  modifier?: (props: any, styleClass: string) => string;
  subffix?: string;
  styledSystem?: boolean;
};

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
