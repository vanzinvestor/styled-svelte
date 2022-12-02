<script type="ts">
  import type { CSSInterpolation } from '@emotion/css';
  import { useForwardRef } from '../useForwardRef';
  import type {
    ArraySpacing,
    HTMLTag,
    Theme,
    StyledThemeContext,
  } from '../types';

  /**
   * Set HTML tag name property
   * @example
   * ```ts
   *   htmlTag="h1"
   * ```
   * Equivalent in HTML
   * ```html
   *   <h1></>
   * ```
   * @defaultValue `undefined`
   */
  export let htmlTag: HTMLTag;

  /**
   * Set CSS class name property (At the beginning)
   * @example
   * ```ts
   *   className="box"
   * ```
   * Equivalent in HTML
   * ```html
   *   class="box"
   * ```
   * @defaultValue `undefined`
   */
  export const className: string | undefined = undefined;

  /**
   * Set CSS class name property (At the end)
   * @example
   * ```ts
   *   modifierClassName="modifier-class"
   * ```
   * Equivalent in HTML
   * ```html
   *   class="box css-sdgh modifier-class"
   * ```
   * @defaultValue `undefined`
   */
  export const modifierClassName: string | undefined = undefined;

  /**
   * Set margin style property
   * @example
   * ```ts
   *   m={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const m: number | ArraySpacing<number> | undefined = undefined;

  /**
   * Set margin-top style property
   * @example
   * ```ts
   *   mt={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-top:"16px";
   * ```
   * @defaultValue `undefined`
   */
  export const mt: number | undefined = undefined;

  /**
   * Set margin-right style property
   * @example
   * ```ts
   *   mr={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-right: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const mr: number | undefined = undefined;

  /**
   * Set margin-bottom style property
   * @example
   * ```ts
   *   mb={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-bottom: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const mb: number | undefined = undefined;

  /**
   * Set margin-left style property
   * @example
   * ```ts
   *   ml={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-left: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const ml: number | undefined = undefined;

  /**
   * Set margin-left and margin-right style property
   * @example
   * ```ts
   *   mx={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-left: "16px";
   *    margin-right: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const mx: number | undefined = undefined;

  /**
   * Set margin-top and margin-bottom style property
   * @example
   * ```ts
   *   my={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   margin-top: "16px";
   *   margin-bottom: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const my: number | undefined = undefined;

  /**
   * Set padding style property
   * @example
   * ```ts
   *   p={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const p: number | ArraySpacing<number> | undefined = undefined;

  /**
   * Set padding-top style property
   * @example
   * ```ts
   *   pt={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-top: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const pt: number | undefined = undefined;

  /**
   * Set padding-right style property
   * @example
   * ```ts
   *   pr={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-right: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const pr: number | undefined = undefined;

  /**
   * Set padding-bottom style property
   * @example
   * ```ts
   *   pb={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-bottom: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const pb: number | undefined = undefined;

  /**
   * Set padding-left style property
   * @example
   * ```ts
   *   pl={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-left: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const pl: number | undefined = undefined;

  /**
   * Set padding-left and padding-right style property
   * @example
   * ```ts
   *   px={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-left: "16px";
   *   padding-right: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const px: number | undefined = undefined;

  /**
   * Set padding-top and padding-bottom style property
   * @example
   * ```ts
   *   py={2}
   * ```
   * Equivalent in CSS
   * ```css
   *   padding-top: "16px";
   *   padding-bottom: "16px";
   * ```
   * @defaultValue `undefined`
   */
  export const py: number | undefined = undefined;

  /**
   * Set Custom CSS in JS
   * @example
   * ```ts
   * sx={{
   *   color:'#333',
   *   backgroundColor:'#fff'
   * }}
   * ```
   * Equivalent in CSS
   * ```css
   *   color:"#333";
   *   background-color:"#fff";
   * ```
   * @defaultValue `{}`
   */
  export const sx: CSSInterpolation = {};

  export const theme: Theme = { theme: {} };

  const forwardRef = useForwardRef();
</script>

<svelte:element this={htmlTag} use:forwardRef {...$$restProps}>
  <slot />
</svelte:element>
