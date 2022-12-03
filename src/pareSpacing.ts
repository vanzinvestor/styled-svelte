export function parseSpacing(
  n: number | Array<number | undefined> | undefined,
  defaultValue?: string | boolean,
  orMode?: boolean
) {
  if (
    (defaultValue === undefined || defaultValue === false) &&
    orMode === undefined
  ) {
    return parseSpacingValue(n);
  } else if (
    typeof defaultValue === 'string' &&
    (orMode === undefined || orMode === false)
  ) {
    return parseSpacingValue(n, defaultValue)
      ? parseSpacingValue(n, defaultValue)
      : defaultValue;
  } else if (
    n instanceof Array &&
    typeof defaultValue === 'string' &&
    orMode === true
  ) {
    return parseArraySpacingOrMode(n)
      ? parseArraySpacingOrMode(n)
      : defaultValue;
  } else if (
    n instanceof Array &&
    defaultValue === true &&
    orMode === undefined
  ) {
    return parseArraySpacingOrMode(n);
  } else if (typeof n === 'number' && orMode === true) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('Or mode condition work with array only');
    }
  }
}

export function parseSpacingValue(
  n: number | Array<number | undefined> | undefined,
  defaultValue?: string
) {
  if (n instanceof Array) {
    return n ? parseArraySpacing(n) : defaultValue ? defaultValue : undefined;
  } else {
    return n ? `${n * 8}px` : defaultValue ? defaultValue : undefined;
  }
}

export function parseSpacingValues(
  n: number | undefined,
  v: number | undefined,
  defaultValue?: string
) {
  return n
    ? `${n * 8}px`
    : v
    ? `${v * 8}px`
    : defaultValue
    ? defaultValue
    : undefined;
}

export function parseArraySpacingOrMode(values: Array<number | undefined>) {
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return `${values[i]! * 8}px`;
    }
  }
  return undefined;
}

function parseArraySpacing(values: Array<number | undefined>) {
  switch (values.length) {
    case 1:
      return formatArraySpacing(values);

    case 2:
      return formatArraySpacing(values);

    case 3:
      return formatArraySpacing(values);

    case 4:
      return formatArraySpacing(values);

    default:
      return undefined;
  }
}

export function formatArraySpacing(values: Array<number | undefined>) {
  let result: string | undefined = '';

  for (let i = 0; i < values.length; i++) {
    result += `${
      i > 0 && typeof values[i] === 'number' && result.length > 0 ? ' ' : ''
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    }${typeof values[i] === 'number' ? `${values[i]! * 8}px` : ''}`;
  }

  return result.length ? result : undefined;
}
