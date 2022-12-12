import StyledElement from './components/StyledComponent.svelte';
import { parseCssFromTemplateStrings } from './parseCss';
import type { StyledComponent, HTMLTag, Style } from './types';

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences
 */
const ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".`;

export function htmlTag(tag: HTMLTag) {
  return function <T = any>(...args: any) {
    let newStyle: any;

    if (args && args.length > 1) {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      newStyle = parseCssFromTemplateStrings<T>(args);
    } else {
      newStyle = args[0];
    }

    return class StyledComponent extends StyledElement {
      constructor(args: any) {
        const { props, ...restOptions } = args;

        super({
          ...restOptions,
          props: {
            ...props,
            tag: tag,
            ox: newStyle,
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
