import type { CSSInterpolation } from '@emotion/css';
import { css, cx } from './css';
import { parseSpacing } from './parseSpacing';
import { parseProperty } from './parseProperty';
import type { AnyProperties, Modifier, CommonProps } from './types';

export const parseCss = (
  props: AnyProperties & CommonProps,
  style: CSSInterpolation,
  option?: Modifier
) => {
  return cx(
    props.className,
    css(
      style,
      {
        margin: parseSpacing(props.m),
        marginTop: parseSpacing([props.mt, props.my], true),
        marginRight: parseSpacing([props.mr, props.mx], true),
        marginBottom: parseSpacing([props.mb, props.my], true),
        marginLeft: parseSpacing([props.ml, props.mx], true),
        padding: parseSpacing(props.p),
        paddingTop: parseSpacing([props.pt, props.py], true),
        paddingRight: parseSpacing([props.pr, props.px], true),
        paddingBottom: parseSpacing([props.pb, props.py], true),
        paddingLeft: parseSpacing([props.pl, props.px], true),
        ...(props.color && parseProperty('color', props.color)),
        ...(props.bg && parseProperty('backgroundColor', props.bg)),
        ...(typeof props.sx === 'object' && props.sx),
      },
      typeof props.sx === 'function' && props.sx(props as any),
      typeof option === 'object' && {
        label: option?.subffix ? option?.subffix : undefined,
      }
    ),
    props.modifierClassName
  );
};
