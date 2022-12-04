import { attributes } from './attributes';
import type { AnyProperties } from './types';

export function parseProperties(props: AnyProperties) {
  return findMapByKeyInProps(attributes, props);
}

export function parseProperty(property: string, value: string) {
  return { [property]: value };
}

function findMapByKeyInProps<K, V>(
  m: Map<K, V>,
  props: AnyProperties
): AnyProperties[] {
  const arr: AnyProperties[] = [];
  for (const [k, v] of m) {
    if (props[k as string]) {
      arr.push({ [v as string]: props[k as string] });
    }
  }
  return arr;
}
