<script>
  import { getContext } from 'svelte';
  import { useForwardRef } from '../hooks/useForwardRef';
  import { css, cx } from '../css';
  import { parseSpacing } from '../parseSpacing';
  import { parseProperties } from '../parseProperty';
  import { useTheme } from '../hooks';
  import { styledThemeKey } from '../styledThemeKey';

  export let action = (node, params) => {
    return { destroy() {} };
  };

  export let tag = 'div';
  export let className = undefined;
  export let m = undefined;
  export let mt = undefined;
  export let mr = undefined;
  export let mb = undefined;
  export let ml = undefined;
  export let mx = undefined;
  export let my = undefined;
  export let p = undefined;
  export let pt = undefined;
  export let pr = undefined;
  export let pb = undefined;
  export let pl = undefined;
  export let px = undefined;
  export let py = undefined;
  export let alignItems = undefined;
  export let alignSelf = undefined;
  export let background = undefined;
  export let backgroundColor = undefined;
  export let backgroundImage = undefined;
  export let backgroundPosition = undefined;
  export let backgroundRepeat = undefined;
  export let border = undefined;
  export let borderColor = undefined;
  export let borderWidth = undefined;
  export let borderStyle = undefined;
  export let borderRadius = undefined;
  export let bottom = undefined;
  export let boxShadow = undefined;
  export let boxSizing = undefined;
  export let color = undefined;
  export let columns = undefined;
  export let columnGap = undefined;
  export let columnSpan = undefined;
  export let cursor = undefined;
  export let direction = undefined;
  export let display = undefined;
  export let flexBasis = undefined;
  export let flexDirection = undefined;
  export let flexGrow = undefined;
  export let flexShrink = undefined;
  export let flexWrap = undefined;
  export let float = undefined;
  export let font = undefined;
  export let fontFamily = undefined;
  export let fontSize = undefined;
  export let fontStyle = undefined;
  export let fontWeight = undefined;
  export let gap = undefined;
  export let grid = undefined;
  export let gridArea = undefined;
  export let gridAutoColumns = undefined;
  export let gridAutoFlow = undefined;
  export let gridAutoRows = undefined;
  export let gridGap = undefined;
  export let gridRow = undefined;
  export let gridTemplateAreas = undefined;
  export let gridTemplateColumns = undefined;
  export let gridTemplateRows = undefined;
  export let height = undefined;
  export let justifyContent = undefined;
  export let justifyItems = undefined;
  export let justifySelf = undefined;
  export let left = undefined;
  export let letterSpacing = undefined;
  export let listStyle = undefined;
  export let lineHeight = undefined;
  export let margin = undefined;
  export let marginTop = undefined;
  export let marginRight = undefined;
  export let marginBottom = undefined;
  export let marginLeft = undefined;
  export let maxHeight = undefined;
  export let maxWidth = undefined;
  export let minHeight = undefined;
  export let minWidth = undefined;
  export let objectFit = undefined;
  export let objectPosition = undefined;
  export let opacity = undefined;
  export let padding = undefined;
  export let paddingTop = undefined;
  export let paddingRight = undefined;
  export let paddingBottom = undefined;
  export let paddingLeft = undefined;
  export let outline = undefined;
  export let overflow = undefined;
  export let overflowX = undefined;
  export let overflowY = undefined;
  export let position = undefined;
  export let pointerEvents = undefined;
  export let right = undefined;
  export let rotate = undefined;
  export let rowGap = undefined;
  export let scale = undefined;
  export let scrollBehavior = undefined;
  export let textAlign = undefined;
  export let textDecoration = undefined;
  export let textIndent = undefined;
  export let textJustify = undefined;
  export let textOverflow = undefined;
  export let textShadow = undefined;
  export let textTransform = undefined;
  export let top = undefined;
  export let transform = undefined;
  export let transition = undefined;
  export let translate = undefined;
  export let verticalAlign = undefined;
  export let visibility = undefined;
  export let whiteSpace = undefined;
  export let width = undefined;
  export let wordBreak = undefined;
  export let wordSpacing = undefined;
  export let zIndex = undefined;
  export let suffix = undefined;
  export let styledSystem = false;
  export let sx = undefined;
  /**
   * @remark
   * ox - Internal use only
   */
  export let ox = undefined;
  /**
   * @remark
   * lx - Internal use only
   */
  export let lx = undefined;

  let forwardRef = useForwardRef();

  let theme;

  let ctx = getContext(styledThemeKey);

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
    ...$$restProps,
  };

  $: style = cx(
    className,
    css(
      ox && typeof ox === 'object' && !Array.isArray(ox) && ox,
      ...(ox && Array.isArray(ox) ? ox : []),
      ox && typeof ox === 'function' && ox(ownerState),
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

{#if tag === 'area' || tag === 'base' || tag === 'br' || tag === 'col' || tag === 'embed' || tag === 'hr' || tag === 'img' || tag === 'input' || tag === 'link' || tag === 'meta' || tag === 'param' || tag === 'source' || tag === 'track' || tag === 'circle' || tag === 'ellipse' || tag === 'image' || tag === 'line' || tag === 'path' || tag === 'polygon' || tag === 'polyline' || tag === 'rect' || tag === 'stop'}
  <svelte:element
    this={tag}
    class={style}
    use:action
    use:forwardRef
    {...$$restProps}
  />
{:else}
  <svelte:element
    this={tag}
    use:action
    class={style}
    use:forwardRef
    {...$$restProps}
  >
    <slot />
  </svelte:element>
{/if}
