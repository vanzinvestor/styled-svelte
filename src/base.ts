import StyledElement from './components/StyledComponent.svelte';
import type { StyledComponent, HTMLTag, Style } from './types';

export function htmlTag(tag: HTMLTag) {
  return function <T = any>(style: Style<T>) {
    return class StyledComponent extends StyledElement {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        super({
          ...restOptions,
          props: {
            ...props,
            tag: tag,
            ox: style,
          },
        });
      }
    };
  };
}

export function component(Component: StyledComponent) {
  return function <T = any>(style: Style<T>) {
    return class StyledComponent extends Component {
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

export const styledCombine = <T = any>(
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
