import Color from 'color';

export const alpha = (color: string, opacity: number) => {
  const newColor = Color(color).alpha(opacity).rgb().string();

  return rgbToHex(newColor);
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
  const newColor = Color(color).fade(ratio).rgb().string();

  return rgbToHex(newColor);
};

export const opaquer = (color: string, ratio: number) => {
  const newColor = Color(color).opaquer(ratio).rgb().string();

  return rgbToHex(newColor);
};

function rgbToHex(color: string) {
  const sep = color.indexOf(',') > -1 ? ',' : ' ';
  const strs = color.substr(5).split(')')[0].split(sep);

  if (strs.length === 3) {
    return rgbFormatToHex(color);
  } else if (strs.length === 4) {
    return rgbaFormatToHex(color);
  } else {
    return color;
  }
}

function rgbFormatToHex(rgb: string) {
  const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  const orgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+orgb[0]).toString(16),
    g = (+orgb[1]).toString(16),
    b = (+orgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b;
}

function rgbaFormatToHex(rgba: string) {
  const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
  const orgba = rgba.substr(5).split(')')[0].split(sep);

  let r = (+orgba[0]).toString(16),
    g = (+orgba[1]).toString(16),
    b = (+orgba[2]).toString(16),
    a = Math.round(+orgba[3] * 255).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;
  if (a.length == 1) a = '0' + a;

  return '#' + r + g + b + a;
}
