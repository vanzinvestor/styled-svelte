export function parseCssFromTemplateStrings<T = any>(args: any) {
  return function (props: T) {
    if (process.env.NODE_ENV !== 'production' && !props) {
      throw new Error('Function missing required argument "props"');
    }

    const result: any[] = [];

    for (let i = 1; i < args.length; i++) {
      if (typeof args[i] === 'function') {
        result.push(args[0][i - 1], (args[i] as (props: T) => any)(props));
      } else {
        result.push(args[0][i]);
      }
    }

    return result.join('');
  };
}
