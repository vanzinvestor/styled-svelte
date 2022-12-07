<script type="ts">
  import type { CSSInterpolation } from '@emotion/css';
  import { useForwardRef } from '../hooks/useForwardRef';
  import type { ArraySpacing, HTMLTag, Props, StyledContext } from '../types';

  export let htmlTag: HTMLTag;
  export const className: string | undefined = undefined;
  export const modifierClassName: string | undefined = undefined;
  export const m: number | ArraySpacing<number> | undefined = undefined;
  export const mt: number | undefined = undefined;
  export const mr: number | undefined = undefined;
  export const mb: number | undefined = undefined;
  export const ml: number | undefined = undefined;
  export const mx: number | undefined = undefined;
  export const my: number | undefined = undefined;
  export const p: number | ArraySpacing<number> | undefined = undefined;
  export const pt: number | undefined = undefined;
  export const pr: number | undefined = undefined;
  export const pb: number | undefined = undefined;
  export const pl: number | undefined = undefined;
  export const px: number | undefined = undefined;
  export const py: number | undefined = undefined;
  export const alignItems: string | undefined = undefined;
  export const alignSelf: string | undefined = undefined;
  export const background: string | undefined = undefined;
  export const backgroundColor: string | undefined = undefined;
  export const backgroundImage: string | undefined = undefined;
  export const backgroundPosition: string | undefined = undefined;
  export const backgroundRepeat: string | undefined = undefined;
  export const border: string | undefined = undefined;
  export const borderColor: string | undefined = undefined;
  export const borderWidth: string | undefined = undefined;
  export const borderStyle: string | undefined = undefined;
  export const borderRadius: string | undefined = undefined;
  export const bottom: string | undefined = undefined;
  export const boxShadow: string | undefined = undefined;
  export const boxSizing: string | undefined = undefined;
  export const color: string | undefined = undefined;
  export const columns: string | undefined = undefined;
  export const columnGap: string | undefined = undefined;
  export const columnSpan: string | undefined = undefined;
  export const cursor: string | undefined = undefined;
  export const direction: string | undefined = undefined;
  export const display: string | undefined = undefined;
  export const flexBasis: string | undefined = undefined;
  export const flexDirection: string | undefined = undefined;
  export const flexGrow: string | undefined = undefined;
  export const flexShrink: string | undefined = undefined;
  export const flexWrap: string | undefined = undefined;
  export const float: string | undefined = undefined;
  export const font: string | undefined = undefined;
  export const fontFamily: string | undefined = undefined;
  export const fontStyle: string | undefined = undefined;
  export const fontWeight: string | undefined = undefined;
  export const gap: string | undefined = undefined;
  export const grid: string | undefined = undefined;
  export const gridArea: string | undefined = undefined;
  export const gridAutoColumns: string | undefined = undefined;
  export const gridAutoFlow: string | undefined = undefined;
  export const gridAutoRows: string | undefined = undefined;
  export const gridGap: string | undefined = undefined;
  export const gridRow: string | undefined = undefined;
  export const gridTemplateAreas: string | undefined = undefined;
  export const gridTemplateColumns: string | undefined = undefined;
  export const gridTemplateRows: string | undefined = undefined;
  export const height: string | undefined = undefined;
  export const justifyContent: string | undefined = undefined;
  export const justifyItems: string | undefined = undefined;
  export const justifySelf: string | undefined = undefined;
  export const left: string | undefined = undefined;
  export const letterSpacing: string | undefined = undefined;
  export const listStyle: string | undefined = undefined;
  export const lineHeight: string | undefined = undefined;
  export const maxHeight: string | undefined = undefined;
  export const maxWidth: string | undefined = undefined;
  export const minHeight: string | undefined = undefined;
  export const minWidth: string | undefined = undefined;
  export const objectFit: string | undefined = undefined;
  export const objectPosition: string | undefined = undefined;
  export const opacity: string | undefined = undefined;
  export const outline: string | undefined = undefined;
  export const overflow: string | undefined = undefined;
  export const overflowX: string | undefined = undefined;
  export const overflowY: string | undefined = undefined;
  export const position: string | undefined = undefined;
  export const pointerEvents: string | undefined = undefined;
  export const right: string | undefined = undefined;
  export const rotate: string | undefined = undefined;
  export const rowGap: string | undefined = undefined;
  export const scale: string | undefined = undefined;
  export const scrollBehavior: string | undefined = undefined;
  export const textAlign: string | undefined = undefined;
  export const textDecoration: string | undefined = undefined;
  export const textIndent: string | undefined = undefined;
  export const textJustify: string | undefined = undefined;
  export const textOverflow: string | undefined = undefined;
  export const textShadow: string | undefined = undefined;
  export const textTransform: string | undefined = undefined;
  export const top: string | undefined = undefined;
  export const transform: string | undefined = undefined;
  export const transition: string | undefined = undefined;
  export const translate: string | undefined = undefined;
  export const verticalAlign: string | undefined = undefined;
  export const visibility: string | undefined = undefined;
  export const whiteSpace: string | undefined = undefined;
  export const width: string | undefined = undefined;
  export const wordBreak: string | undefined = undefined;
  export const wordSpacing: string | undefined = undefined;
  export const zIndex: string | undefined = undefined;
  export let sx:
    | ((props: any) => CSSInterpolation)
    | CSSInterpolation
    | undefined = undefined;

  export const theme: Props = { theme: {} };

  const forwardRef = useForwardRef();

  $: sx;
</script>

<svelte:element this={htmlTag} use:forwardRef {...$$restProps}>
  <slot />
</svelte:element>
