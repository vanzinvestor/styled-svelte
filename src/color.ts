import Color from 'color';

export const alpha = (color: string, opacity: number) => {
  return Color(color).alpha(opacity).rgb().string();
};

export const lighten = (color: string, ratio: number) => {
  return Color(color).lighten(ratio).hex();
};

export const darker = (color: string, ratio: number) => {
  return Color(color).darken(ratio).hex();
};

export const lightness = (color: string, value: number) => {
  return Color(color).lightness(value).hex();
};

export const saturate = (color: string, ratio: number) => {
  return Color(color).saturate(ratio).hex();
};

export const grayscale = (color: string) => {
  return Color(color).grayscale().hex();
};

export const whiten = (color: string, ratio: number) => {
  return Color(color).whiten(ratio).hex();
};

export const blacken = (color: string, ratio: number) => {
  return Color(color).blacken(ratio).hex();
};

export const fade = (color: string, ratio: number) => {
  return Color(color).fade(ratio).rgb().string();
};

export const opaquer = (color: string, ratio: number) => {
  return Color(color).opaquer(ratio).rgb().string();
};
