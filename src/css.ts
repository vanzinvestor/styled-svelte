import createEmotion from '@emotion/css/create-instance';

const instance = createEmotion({
  key: 'styled',
});

export const flush = instance.flush.bind(instance);
export const hydrate = instance.hydrate.bind(instance);
export const cx = instance.cx.bind(instance);
export const merge = instance.merge.bind(instance);
export const getRegisteredStyles = instance.getRegisteredStyles.bind(instance);
export const injectGlobal = instance.injectGlobal.bind(instance);
export const keyframes = instance.keyframes.bind(instance);
export const css = instance.css.bind(instance);
export const sheet = instance.sheet;
export const cache = instance.cache;
