import { css, type CSSInterpolation } from '@emotion/css';
import { getContext, onDestroy } from 'svelte';
import Element from './components/StyledComponent.svelte';
import { parseCss } from './parseCss';
import { styledThemeKey } from './styledThemeKey';
import type {
  StyledComponent,
  HTMLTag,
  Theme,
  StyledThemeContext,
} from './types';

export const styled = <T = any>(
  Tag: HTMLTag | StyledComponent,
  style: ((props: Theme<T>) => CSSInterpolation) | CSSInterpolation,
  modifier?: (props: Theme<T>, styleClass: string) => string
): StyledComponent => {
  if (typeof Tag === 'string') {
    return class extends Element {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        let theme: any;

        const ctx = getContext<StyledThemeContext<Theme<T>>>(styledThemeKey);

        // Check used StyledThemeProvider
        if (ctx) {
          const unsubscribe = ctx.subscribe((t) => {
            theme = t;
          });

          props['theme'] = theme.theme;

          onDestroy(unsubscribe);
        }

        super({
          ...restOptions,
          props: {
            ...props,
            htmlTag: Tag as HTMLTag,
            class: modifier
              ? typeof style === 'function'
                ? modifier(props, parseCss(props, style(props)))
                : modifier(props, parseCss(props, style))
              : typeof style === 'function'
              ? parseCss(props, style(props))
              : parseCss(props, css(style)),
          },
        });
      }
    };
  } else if (Tag instanceof Object) {
    return class extends Tag {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        let theme: any;

        const ctx = getContext<StyledThemeContext<Theme<T>>>(styledThemeKey);

        // Check used StyledThemeProvider
        if (ctx) {
          const unsubscribe = ctx.subscribe((t) => {
            theme = t;
          });

          props['theme'] = theme.theme;

          onDestroy(unsubscribe);
        }

        super({
          ...restOptions,
          props: {
            ...props,
            modifierClassName: modifier
              ? typeof style === 'function'
                ? modifier(props, parseCss(props, style(props)))
                : modifier(props, parseCss(props, style))
              : typeof style === 'function'
              ? parseCss(props, style(props))
              : parseCss(props, css(style)),
          },
        });
      }
    };
  } else {
    throw new Error('Styled not matched HTML tag OR SvelteComponent');
  }
};
