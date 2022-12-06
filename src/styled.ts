import type { CSSInterpolation } from '@emotion/css';
import { css } from './css';
import { getContext, onDestroy } from 'svelte';
import StyledElement from './components/StyledComponent.svelte';
import { parseCss } from './parseCss';
import { styledThemeKey } from './styledThemeKey';
import type {
  StyledComponent,
  HTMLTag,
  Theme,
  StyledThemeContext,
  Modifier,
} from './types';

export function htmlTag(tag: HTMLTag) {
  return function <T = any>(
    style: ((props: Theme<T>) => CSSInterpolation) | CSSInterpolation,
    modifier?: ((props: Theme<T>, styleClass: string) => string) | Modifier
  ): StyledComponent {
    return class extends StyledElement {
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
            htmlTag: tag,
            class:
              typeof modifier === 'function'
                ? typeof style === 'function'
                  ? modifier(props, parseCss(props, style(props)))
                  : modifier(props, parseCss(props, style))
                : typeof style === 'function'
                ? parseCss(props, style(props), modifier)
                : parseCss(props, css(style), modifier),
          },
        });
      }
    };
  };
}

export function withComponent(Component: StyledComponent) {
  return function <T = any>(
    style: ((props: Theme<T>) => CSSInterpolation) | CSSInterpolation,
    modifier?: ((props: Theme<T>, styleClass: string) => string) | Modifier
  ): StyledComponent {
    return class extends Component {
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
            modifierClassName:
              typeof modifier === 'function'
                ? typeof style === 'function'
                  ? modifier(props, parseCss(props, style(props)))
                  : modifier(props, parseCss(props, style))
                : typeof style === 'function'
                ? parseCss(props, style(props), modifier)
                : parseCss(props, css(style), modifier),
          },
        });
      }
    };
  };
}

export const styled = <T = any>(
  Tag: HTMLTag | StyledComponent,
  style: ((props: Theme<T>) => CSSInterpolation) | CSSInterpolation,
  modifier?: ((props: Theme<T>, styleClass: string) => string) | Modifier
) => {
  if (typeof Tag === 'string') {
    return htmlTag(Tag)(style, modifier);
  } else if (Tag instanceof Object) {
    return withComponent(Tag)(style, modifier);
  } else {
    throw new Error('Styled not matched HTML tag OR SvelteComponent');
  }
};
