import { css, cx } from './css';
import { parseSpacing } from './parseSpacing';
import { parseProperties } from './parseProperty';
import type { AnyProperties, Options, CommonProps, Style } from './types';

export const parseCss = <T = any>(
  props: AnyProperties & CommonProps,
  style: Style<T>,
  options?: Options
) => {
  return cx(
    props?.className,
    css(
      style as TemplateStringsArray,
      {
        margin: parseSpacing(props?.m),
        marginTop: parseSpacing([props?.mt, props?.my], true),
        marginRight: parseSpacing([props?.mr, props?.mx], true),
        marginBottom: parseSpacing([props?.mb, props?.my], true),
        marginLeft: parseSpacing([props?.ml, props?.mx], true),
        padding: parseSpacing(props?.p),
        paddingTop: parseSpacing([props?.pt, props?.py], true),
        paddingRight: parseSpacing([props?.pr, props?.px], true),
        paddingBottom: parseSpacing([props?.pb, props?.py], true),
        paddingLeft: parseSpacing([props?.pl, props?.px], true),
        ...(typeof props?.sx === 'object' && props.sx),
      },
      ...(options && options.styledSystem && options.styledSystem === true
        ? parseProperties(props)
        : []),
      typeof props?.sx === 'function' && props.sx(props as any),
      typeof options?.subffix && {
        label: options?.subffix ? options?.subffix : undefined,
      }
    ),
    props?.modifierClassName
  );
};
