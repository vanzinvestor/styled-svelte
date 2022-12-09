import StyledElement from './components/StyledComponent.svelte';
import type { StyledComponent, HTMLTag, Style } from './types';

export function htmlTag(tag: HTMLTag) {
  return function <T = any>(style: Style<T>): StyledComponent {
    return class extends StyledElement {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        super({
          ...restOptions,
          props: {
            ...props,
            tag: tag,
            cx: style,
          },
        });
      }
    };
  };
}

export function component(Component: StyledComponent) {
  return function <T = any>(style: Style<T>): StyledComponent {
    return class extends Component {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        super({
          ...restOptions,
          props: {
            ...props,
            lx: style,
          },
        });
      }
    };
  };
}

export const styled = <T = any>(
  Tag: HTMLTag | StyledComponent,
  style: Style<T>
) => {
  if (typeof Tag === 'string') {
    return htmlTag(Tag)(style);
  } else if (Tag instanceof Object) {
    return component(Tag)(style);
  } else {
    throw new Error('Styled not matched HTML tag OR SvelteComponent');
  }
};
