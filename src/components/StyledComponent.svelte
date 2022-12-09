<script type="ts">
  import type { CSSInterpolation } from '@emotion/css';
  import { getContext } from 'svelte';
  import { useForwardRef } from '../hooks/useForwardRef';
  import type { ArraySpacing, HTMLTag, ThemeContext } from '../types';
  import { css as systemCss, cx as systemCx } from '../css';
  import { parseSpacing } from '../parseSpacing';
  import { parseProperties } from '../parseProperty';
  import { useTheme } from '../hooks';
  import { styledThemeKey } from '../styledThemeKey';

  export let tag: HTMLTag = 'div';
  export let className: string | undefined = undefined;
  export let m: number | ArraySpacing<number> | undefined = undefined;
  export let mt: number | undefined = undefined;
  export let mr: number | undefined = undefined;
  export let mb: number | undefined = undefined;
  export let ml: number | undefined = undefined;
  export let mx: number | undefined = undefined;
  export let my: number | undefined = undefined;
  export let p: number | ArraySpacing<number> | undefined = undefined;
  export let pt: number | undefined = undefined;
  export let pr: number | undefined = undefined;
  export let pb: number | undefined = undefined;
  export let pl: number | undefined = undefined;
  export let px: number | undefined = undefined;
  export let py: number | undefined = undefined;
  export let alignItems: string | undefined = undefined;
  export let alignSelf: string | undefined = undefined;
  export let background: string | undefined = undefined;
  export let backgroundColor: string | undefined = undefined;
  export let backgroundImage: string | undefined = undefined;
  export let backgroundPosition: string | undefined = undefined;
  export let backgroundRepeat: string | undefined = undefined;
  export let border: string | undefined = undefined;
  export let borderColor: string | undefined = undefined;
  export let borderWidth: string | undefined = undefined;
  export let borderStyle: string | undefined = undefined;
  export let borderRadius: string | undefined = undefined;
  export let bottom: string | undefined = undefined;
  export let boxShadow: string | undefined = undefined;
  export let boxSizing: string | undefined = undefined;
  export let color: string | undefined = undefined;
  export let columns: string | undefined = undefined;
  export let columnGap: string | undefined = undefined;
  export let columnSpan: string | undefined = undefined;
  export let cursor: string | undefined = undefined;
  export let direction: string | undefined = undefined;
  export let display: string | undefined = undefined;
  export let flexBasis: string | undefined = undefined;
  export let flexDirection: string | undefined = undefined;
  export let flexGrow: string | undefined = undefined;
  export let flexShrink: string | undefined = undefined;
  export let flexWrap: string | undefined = undefined;
  export let float: string | undefined = undefined;
  export let font: string | undefined = undefined;
  export let fontFamily: string | undefined = undefined;
  export let fontSize: string | undefined = undefined;
  export let fontStyle: string | undefined = undefined;
  export let fontWeight: string | undefined = undefined;
  export let gap: string | undefined = undefined;
  export let grid: string | undefined = undefined;
  export let gridArea: string | undefined = undefined;
  export let gridAutoColumns: string | undefined = undefined;
  export let gridAutoFlow: string | undefined = undefined;
  export let gridAutoRows: string | undefined = undefined;
  export let gridGap: string | undefined = undefined;
  export let gridRow: string | undefined = undefined;
  export let gridTemplateAreas: string | undefined = undefined;
  export let gridTemplateColumns: string | undefined = undefined;
  export let gridTemplateRows: string | undefined = undefined;
  export let height: string | undefined = undefined;
  export let justifyContent: string | undefined = undefined;
  export let justifyItems: string | undefined = undefined;
  export let justifySelf: string | undefined = undefined;
  export let left: string | undefined = undefined;
  export let letterSpacing: string | undefined = undefined;
  export let listStyle: string | undefined = undefined;
  export let lineHeight: string | undefined = undefined;
  export let margin: string | undefined = undefined;
  export let marginTop: string | undefined = undefined;
  export let marginRight: string | undefined = undefined;
  export let marginBottom: string | undefined = undefined;
  export let marginLeft: string | undefined = undefined;
  export let maxHeight: string | undefined = undefined;
  export let maxWidth: string | undefined = undefined;
  export let minHeight: string | undefined = undefined;
  export let minWidth: string | undefined = undefined;
  export let objectFit: string | undefined = undefined;
  export let objectPosition: string | undefined = undefined;
  export let opacity: string | undefined = undefined;
  export let padding: string | undefined = undefined;
  export let paddingTop: string | undefined = undefined;
  export let paddingRight: string | undefined = undefined;
  export let paddingBottom: string | undefined = undefined;
  export let paddingLeft: string | undefined = undefined;
  export let outline: string | undefined = undefined;
  export let overflow: string | undefined = undefined;
  export let overflowX: string | undefined = undefined;
  export let overflowY: string | undefined = undefined;
  export let position: string | undefined = undefined;
  export let pointerEvents: string | undefined = undefined;
  export let right: string | undefined = undefined;
  export let rotate: string | undefined = undefined;
  export let rowGap: string | undefined = undefined;
  export let scale: string | undefined = undefined;
  export let scrollBehavior: string | undefined = undefined;
  export let textAlign: string | undefined = undefined;
  export let textDecoration: string | undefined = undefined;
  export let textIndent: string | undefined = undefined;
  export let textJustify: string | undefined = undefined;
  export let textOverflow: string | undefined = undefined;
  export let textShadow: string | undefined = undefined;
  export let textTransform: string | undefined = undefined;
  export let top: string | undefined = undefined;
  export let transform: string | undefined = undefined;
  export let transition: string | undefined = undefined;
  export let translate: string | undefined = undefined;
  export let verticalAlign: string | undefined = undefined;
  export let visibility: string | undefined = undefined;
  export let whiteSpace: string | undefined = undefined;
  export let width: string | undefined = undefined;
  export let wordBreak: string | undefined = undefined;
  export let wordSpacing: string | undefined = undefined;
  export let zIndex: string | undefined = undefined;
  export let suffix: string | undefined = undefined;
  export let styledSystem: boolean = false;
  export let cx:
    | ((props: any) => CSSInterpolation)
    | CSSInterpolation
    | undefined = undefined;
  export let sx:
    | ((props: any) => CSSInterpolation)
    | CSSInterpolation
    | undefined = undefined;
  export let lx:
    | ((props: any) => CSSInterpolation)
    | CSSInterpolation
    | undefined = undefined;

  let forwardRef = useForwardRef();

  let theme: any;

  let ctx = getContext<ThemeContext<any>>(styledThemeKey);

  if (!ctx) {
    theme = {};
  } else {
    theme = useTheme();
  }

  $: ownerState = {
    alignItems,
    alignSelf,
    background,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    border,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    bottom,
    boxShadow,
    boxSizing,
    color,
    columns,
    columnGap,
    columnSpan,
    cursor,
    direction,
    display,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    float,
    font,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    gap,
    grid,
    gridArea,
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    gridGap,
    gridRow,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    height,
    justifyContent,
    justifyItems,
    justifySelf,
    left,
    letterSpacing,
    listStyle,
    lineHeight,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    objectFit,
    objectPosition,
    opacity,
    outline,
    overflow,
    overflowX,
    overflowY,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    position,
    pointerEvents,
    right,
    rotate,
    rowGap,
    scale,
    scrollBehavior,
    textAlign,
    textDecoration,
    textIndent,
    textJustify,
    textOverflow,
    textShadow,
    textTransform,
    top,
    transform,
    transition,
    translate,
    verticalAlign,
    visibility,
    whiteSpace,
    width,
    wordBreak,
    wordSpacing,
    zIndex,
    suffix,
    styledSystem,
    theme: $theme,
  };

  $: style = systemCx(
    className,
    systemCss(
      cx && typeof cx === 'object' && cx,
      cx && typeof cx === 'function' && cx(ownerState),
      {
        margin: parseSpacing(m),
        marginTop: parseSpacing([mt, my], true),
        marginRight: parseSpacing([mr, mx], true),
        marginBottom: parseSpacing([mb, my], true),
        marginLeft: parseSpacing([ml, mx], true),
        padding: parseSpacing(p),
        paddingTop: parseSpacing([pt, py], true),
        paddingRight: parseSpacing([pr, px], true),
        paddingBottom: parseSpacing([pb, py], true),
        paddingLeft: parseSpacing([pl, px], true),
      },
      ...(styledSystem ? parseProperties(ownerState) : []),
      lx && typeof lx === 'object' && lx,
      lx && typeof lx === 'function' && lx(ownerState),
      sx && typeof sx === 'object' && sx,
      sx && typeof sx === 'function' && sx(ownerState),
      suffix && {
        label: suffix ? suffix : undefined,
      }
    )
  );
</script>

<svelte:element this={tag} class={style} use:forwardRef {...$$restProps}>
  <slot />
</svelte:element>
