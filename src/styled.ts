import { css } from './css';
import { getContext, onDestroy } from 'svelte';
import StyledElement from './components/StyledComponent.svelte';
import { parseCss } from './parseCss';
import { styledThemeKey } from './styledThemeKey';
import type {
  StyledComponent,
  HTMLTag,
  Props,
  StyledContext,
  Options,
  Style,
} from './types';

export function htmlTag(tag: HTMLTag) {
  return function <T = any>(
    style: Style<T>,
    options?: Options
  ): StyledComponent {
    return class extends StyledElement {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        let theme: any;

        const ctx = getContext<StyledContext<Props<T>>>(styledThemeKey);

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
              typeof options?.modifier === 'function'
                ? typeof style === 'function'
                  ? options?.modifier(
                      props,
                      parseCss(props, style(props), options)
                    )
                  : options?.modifier(props, parseCss(props, style, options))
                : typeof style === 'function'
                ? parseCss(props, style(props), options)
                : parseCss(props, css(style as TemplateStringsArray), options),
          },
        });
      }
    };
  };
}

export function component(Component: StyledComponent) {
  return function <T = any>(
    style: Style<T>,
    options?: Options
  ): StyledComponent {
    return class extends Component {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        let theme: any;

        const ctx = getContext<StyledContext<Props<T>>>(styledThemeKey);

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
              typeof options?.modifier === 'function'
                ? typeof style === 'function'
                  ? options?.modifier(
                      props,
                      parseCss(props, style(props), options)
                    )
                  : options?.modifier(props, parseCss(props, style, options))
                : typeof style === 'function'
                ? parseCss(props, style(props), options)
                : parseCss(props, css(style as TemplateStringsArray), options),
          },
        });
      }
    };
  };
}

export const styled = <T = any>(
  Tag: HTMLTag | StyledComponent,
  style: Style<T>,
  options: Options
) => {
  if (typeof Tag === 'string') {
    return htmlTag(Tag)(style, options);
  } else if (Tag instanceof Object) {
    return component(Tag)(style, options);
  } else {
    throw new Error('Styled not matched HTML tag OR SvelteComponent');
  }
};
