import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { CSSInterpolation } from '@emotion/css';

export type Styled = {
  <T = any>(Tag: HTMLTag | StyledComponent, style: Style<T>): StyledComponent;
  a: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  abbr: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  address: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  area: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  article: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  aside: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  audio: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  b: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  base: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  bdi: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  bdo: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  big: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  blockquote: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  body: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  br: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  button: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  canvas: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  caption: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  cite: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  code: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  col: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  colgroup: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  data: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  datalist: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  dd: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  del: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  details: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  dfn: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  dialog: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  div: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  dl: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  dt: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  em: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  embed: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  fieldset: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  figcaption: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  figure: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  footer: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  form: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h1: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h2: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h3: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h4: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h5: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  h6: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  head: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  header: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  hgroup: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  hr: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  html: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  i: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  iframe: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  img: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  input: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  ins: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  kbd: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  keygen: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  label: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  legend: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  li: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  link: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  main: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  map: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  mark: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  marquee: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  menu: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  menuitem: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  meta: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  meter: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  nav: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  noscript: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  object: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  ol: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  optgroup: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  option: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  output: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  p: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  param: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  picture: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  pre: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  progress: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  q: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  rp: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  rt: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  ruby: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  s: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  samp: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  script: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  section: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  select: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  small: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  source: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  span: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  strong: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  style: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  sub: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  summary: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  sup: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  table: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  tbody: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  td: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  textarea: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  tfoot: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  th: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  thead: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  time: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  title: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  tr: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  track: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  u: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  ul: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  var: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  video: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  wrg: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  circle: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  clipPath: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  defs: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  ellipse: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  foreignObject: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  g: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  image: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  line: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  linearGradient: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  mask: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  path: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  pattern: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  polygon: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  polyline: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  radialGradient: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  rect: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  stop: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  svg: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  text: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
  tspan: <T = any>(
    template: Style<T>,
    ...args: CSSInterpolation[] | ((props: Props<T>) => CSSInterpolation)[]
  ) => StyledComponent;
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
