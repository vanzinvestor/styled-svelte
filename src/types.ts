import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import type { CSSInterpolation } from '@emotion/css';

export type Styled = {
  <T = any>(Tag: HTMLTag | StyledComponent, style: Style<T>): StyledComponent;
  a: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  abbr: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  address: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  area: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  article: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  aside: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  audio: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  b: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  base: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  bdi: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  bdo: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  big: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  blockquote: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  body: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  br: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  button: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  canvas: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  caption: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  cite: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  code: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  col: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  colgroup: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  data: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  datalist: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  dd: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  del: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  details: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  dfn: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  dialog: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  div: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  dl: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  dt: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  em: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  embed: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  fieldset: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  figcaption: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  figure: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  footer: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  form: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  h1: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  h2: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  h3: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  h4: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  h5: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  h6: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  head: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  header: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  hgroup: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  hr: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  html: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  i: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  iframe: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  img: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  input: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  ins: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  kbd: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  keygen: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  label: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  legend: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  li: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  link: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  main: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  map: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  mark: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  marquee: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  menu: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  menuitem: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  meta: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  meter: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  nav: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  noscript: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  object: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  ol: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  optgroup: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  option: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  output: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  p: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  param: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  picture: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  pre: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  progress: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  q: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  rp: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  rt: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  ruby: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  s: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  samp: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  script: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  section: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  select: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  small: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  source: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  span: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  strong: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  style: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  sub: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  summary: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  sup: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  table: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  tbody: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  td: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  textarea: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  tfoot: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  th: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  thead: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  time: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  title: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  tr: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  track: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  u: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  ul: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  var: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  video: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  wrg: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  circle: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  clipPath: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  defs: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  ellipse: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  foreignObject: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  g: <T = any>(...style: TemplateStringsArray | Style<T>[]) => StyledComponent;
  image: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  line: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  linearGradient: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  mask: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  path: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  pattern: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  polygon: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  polyline: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  radialGradient: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  rect: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  stop: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  svg: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  text: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
  ) => StyledComponent;
  tspan: <T = any>(
    ...style: TemplateStringsArray | Style<T>[]
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
