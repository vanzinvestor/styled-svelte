import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { CSSInterpolation } from '@emotion/css';

export type Styled = {
  <T = any>(Tag: HTMLTag | StyledComponent, style: Style<T>): StyledComponent;
  a: <T = any>(style: Style<T>) => StyledComponent;
  abbr: <T = any>(style: Style<T>) => StyledComponent;
  address: <T = any>(style: Style<T>) => StyledComponent;
  area: <T = any>(style: Style<T>) => StyledComponent;
  article: <T = any>(style: Style<T>) => StyledComponent;
  aside: <T = any>(style: Style<T>) => StyledComponent;
  audio: <T = any>(style: Style<T>) => StyledComponent;
  b: <T = any>(style: Style<T>) => StyledComponent;
  base: <T = any>(style: Style<T>) => StyledComponent;
  bdi: <T = any>(style: Style<T>) => StyledComponent;
  bdo: <T = any>(style: Style<T>) => StyledComponent;
  big: <T = any>(style: Style<T>) => StyledComponent;
  blockquote: <T = any>(style: Style<T>) => StyledComponent;
  body: <T = any>(style: Style<T>) => StyledComponent;
  br: <T = any>(style: Style<T>) => StyledComponent;
  button: <T = any>(style: Style<T>) => StyledComponent;
  canvas: <T = any>(style: Style<T>) => StyledComponent;
  caption: <T = any>(style: Style<T>) => StyledComponent;
  cite: <T = any>(style: Style<T>) => StyledComponent;
  code: <T = any>(style: Style<T>) => StyledComponent;
  col: <T = any>(style: Style<T>) => StyledComponent;
  colgroup: <T = any>(style: Style<T>) => StyledComponent;
  data: <T = any>(style: Style<T>) => StyledComponent;
  datalist: <T = any>(style: Style<T>) => StyledComponent;
  dd: <T = any>(style: Style<T>) => StyledComponent;
  del: <T = any>(style: Style<T>) => StyledComponent;
  details: <T = any>(style: Style<T>) => StyledComponent;
  dfn: <T = any>(style: Style<T>) => StyledComponent;
  dialog: <T = any>(style: Style<T>) => StyledComponent;
  div: <T = any>(style: Style<T>) => StyledComponent;
  dl: <T = any>(style: Style<T>) => StyledComponent;
  dt: <T = any>(style: Style<T>) => StyledComponent;
  em: <T = any>(style: Style<T>) => StyledComponent;
  embed: <T = any>(style: Style<T>) => StyledComponent;
  fieldset: <T = any>(style: Style<T>) => StyledComponent;
  figcaption: <T = any>(style: Style<T>) => StyledComponent;
  figure: <T = any>(style: Style<T>) => StyledComponent;
  footer: <T = any>(style: Style<T>) => StyledComponent;
  form: <T = any>(style: Style<T>) => StyledComponent;
  h1: <T = any>(style: Style<T>) => StyledComponent;
  h2: <T = any>(style: Style<T>) => StyledComponent;
  h3: <T = any>(style: Style<T>) => StyledComponent;
  h4: <T = any>(style: Style<T>) => StyledComponent;
  h5: <T = any>(style: Style<T>) => StyledComponent;
  h6: <T = any>(style: Style<T>) => StyledComponent;
  head: <T = any>(style: Style<T>) => StyledComponent;
  header: <T = any>(style: Style<T>) => StyledComponent;
  hgroup: <T = any>(style: Style<T>) => StyledComponent;
  hr: <T = any>(style: Style<T>) => StyledComponent;
  html: <T = any>(style: Style<T>) => StyledComponent;
  i: <T = any>(style: Style<T>) => StyledComponent;
  iframe: <T = any>(style: Style<T>) => StyledComponent;
  img: <T = any>(style: Style<T>) => StyledComponent;
  input: <T = any>(style: Style<T>) => StyledComponent;
  ins: <T = any>(style: Style<T>) => StyledComponent;
  kbd: <T = any>(style: Style<T>) => StyledComponent;
  keygen: <T = any>(style: Style<T>) => StyledComponent;
  label: <T = any>(style: Style<T>) => StyledComponent;
  legend: <T = any>(style: Style<T>) => StyledComponent;
  li: <T = any>(style: Style<T>) => StyledComponent;
  link: <T = any>(style: Style<T>) => StyledComponent;
  main: <T = any>(style: Style<T>) => StyledComponent;
  map: <T = any>(style: Style<T>) => StyledComponent;
  mark: <T = any>(style: Style<T>) => StyledComponent;
  marquee: <T = any>(style: Style<T>) => StyledComponent;
  menu: <T = any>(style: Style<T>) => StyledComponent;
  menuitem: <T = any>(style: Style<T>) => StyledComponent;
  meta: <T = any>(style: Style<T>) => StyledComponent;
  meter: <T = any>(style: Style<T>) => StyledComponent;
  nav: <T = any>(style: Style<T>) => StyledComponent;
  noscript: <T = any>(style: Style<T>) => StyledComponent;
  object: <T = any>(style: Style<T>) => StyledComponent;
  ol: <T = any>(style: Style<T>) => StyledComponent;
  optgroup: <T = any>(style: Style<T>) => StyledComponent;
  option: <T = any>(style: Style<T>) => StyledComponent;
  output: <T = any>(style: Style<T>) => StyledComponent;
  p: <T = any>(style: Style<T>) => StyledComponent;
  param: <T = any>(style: Style<T>) => StyledComponent;
  picture: <T = any>(style: Style<T>) => StyledComponent;
  pre: <T = any>(style: Style<T>) => StyledComponent;
  progress: <T = any>(style: Style<T>) => StyledComponent;
  q: <T = any>(style: Style<T>) => StyledComponent;
  rp: <T = any>(style: Style<T>) => StyledComponent;
  rt: <T = any>(style: Style<T>) => StyledComponent;
  ruby: <T = any>(style: Style<T>) => StyledComponent;
  s: <T = any>(style: Style<T>) => StyledComponent;
  samp: <T = any>(style: Style<T>) => StyledComponent;
  script: <T = any>(style: Style<T>) => StyledComponent;
  section: <T = any>(style: Style<T>) => StyledComponent;
  select: <T = any>(style: Style<T>) => StyledComponent;
  small: <T = any>(style: Style<T>) => StyledComponent;
  source: <T = any>(style: Style<T>) => StyledComponent;
  span: <T = any>(style: Style<T>) => StyledComponent;
  strong: <T = any>(style: Style<T>) => StyledComponent;
  style: <T = any>(style: Style<T>) => StyledComponent;
  sub: <T = any>(style: Style<T>) => StyledComponent;
  summary: <T = any>(style: Style<T>) => StyledComponent;
  sup: <T = any>(style: Style<T>) => StyledComponent;
  table: <T = any>(style: Style<T>) => StyledComponent;
  tbody: <T = any>(style: Style<T>) => StyledComponent;
  td: <T = any>(style: Style<T>) => StyledComponent;
  textarea: <T = any>(style: Style<T>) => StyledComponent;
  tfoot: <T = any>(style: Style<T>) => StyledComponent;
  th: <T = any>(style: Style<T>) => StyledComponent;
  thead: <T = any>(style: Style<T>) => StyledComponent;
  time: <T = any>(style: Style<T>) => StyledComponent;
  title: <T = any>(style: Style<T>) => StyledComponent;
  tr: <T = any>(style: Style<T>) => StyledComponent;
  track: <T = any>(style: Style<T>) => StyledComponent;
  u: <T = any>(style: Style<T>) => StyledComponent;
  ul: <T = any>(style: Style<T>) => StyledComponent;
  var: <T = any>(style: Style<T>) => StyledComponent;
  video: <T = any>(style: Style<T>) => StyledComponent;
  wrg: <T = any>(style: Style<T>) => StyledComponent;
  circle: <T = any>(style: Style<T>) => StyledComponent;
  clipPath: <T = any>(style: Style<T>) => StyledComponent;
  defs: <T = any>(style: Style<T>) => StyledComponent;
  ellipse: <T = any>(style: Style<T>) => StyledComponent;
  foreignObject: <T = any>(style: Style<T>) => StyledComponent;
  g: <T = any>(style: Style<T>) => StyledComponent;
  image: <T = any>(style: Style<T>) => StyledComponent;
  line: <T = any>(style: Style<T>) => StyledComponent;
  linearGradient: <T = any>(style: Style<T>) => StyledComponent;
  mask: <T = any>(style: Style<T>) => StyledComponent;
  path: <T = any>(style: Style<T>) => StyledComponent;
  pattern: <T = any>(style: Style<T>) => StyledComponent;
  polygon: <T = any>(style: Style<T>) => StyledComponent;
  polyline: <T = any>(style: Style<T>) => StyledComponent;
  radialGradient: <T = any>(style: Style<T>) => StyledComponent;
  rect: <T = any>(style: Style<T>) => StyledComponent;
  stop: <T = any>(style: Style<T>) => StyledComponent;
  svg: <T = any>(style: Style<T>) => StyledComponent;
  text: <T = any>(style: Style<T>) => StyledComponent;
  tspan: <T = any>(style: Style<T>) => StyledComponent;
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

export type ThemeContext<T = any> = {
  theme: Writable<T>;
};

/**
 * @see https://github.com/sveltejs/language-tools/issues/486#issuecomment-868975982
 */

export type StyledComponent = new (...args: any[]) => SvelteComponent;

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
