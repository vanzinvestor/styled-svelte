import { css, cx, type CSSInterpolation } from '@emotion/css';
import { parseSpacing } from './pareSpacing';

export const parseCss = (props: any, style: CSSInterpolation) => {
  return cx(
    props.className,
    css(style, {
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
      ...props.sx,
    }),
    props.modifierClassName
  );
};
