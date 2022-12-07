# styled-svelte

`styled-svelte` is a way to create Svelte components that have styles attached to them. It's available from [styled-svelte](https://www.npmjs.com/package/styled-svelte). styled was heavily inspired by [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) and [styled-components](https://www.npmjs.com/package/styled-components)

## Table of Contents

- [Quick Start](#quick-start)
- [API](#api)
  - [Styles with html tag — `styled`](#styled)
  - [styled with component tag — `styled`](#styled-with-component-tag)
  - [Styled with props — `styled` `props`](#styles-with-props)
  - [Styles and add subfix — `styled`](#styles-and-add-subfix)
  - [Styles and combining class names — `styled` `cx`](#styles-and-combining-class-names-cx)
  - [Styles and used system-styled — `styled`](#styles-and-used-system-styled)
  - [Styles with props in component — `build in`](#styles-with-props-in-component)
  - [Forwarding Refs Events — `build in`](#forwarding-refs-events)
  - [Theme — `ThemeProvider` `props.theme`](#theme)
  - [Global Styles — `injectGlobal`](#global-styles)
  - [Color Utility — `alpha` `darker` `lighten` and more](#color-utility)
  - [Other Api — `css` `cx` `cache` and more](#other-api)
- [Thanks](#thanks-to-inspire-me)

## Quick Start

Get up and running with a single import.

```bash
npm install --save styled-svelte
```

```ts
import styled from 'styled-svelte';

const Div = styled('div', { padding: '10px 20px' });

const Button = styled('button', {
  color: '#333',
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
});
```

Use them like any other Svelte component – except they're styled!

```svelte
<Div>
  <Button>Click</Button>
</Div>
```

## API

### styled

The `styled` function accepts tag and styles as a object or template string and returns a svelte component.

#### Styles with html tag

`styled` with html tag or component. and used object styles.

```ts
import styled from 'styled-svelte';

const Button = styled('button', {
  color: '#333',
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
});
```

`styled` with object styles. except you call it with an html tag

```ts
const Button = styled.button({
  color: '#333',
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
});
```

`styled` with css styles\*, except you call it with an html tag

```ts
import styled from 'styled-svelte';

const Button = styled.button`
  color: #333;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  backgroundcolor: #e8e8e8;
  &:hover: {
    backgroundcolor: #d8d8d8;
  }
`;
```

Remark: css styles not support variable in template string

### Styled with Component tag

```javascript
import styled from 'styled-svelte';

const Button = styled('button', {
  color: '#333',
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
});

const NewButton = styled(Button, {
  color: '#fff',
  padding: '10px 32px',
  backgroundColor: '#333',
  '&:hover': {
    backgroundColor: '#444',
  },
});
```

### Styles with props

```ts
import styled from 'styled-svelte';

const Button = styled('button', (props) => ({
  color: props.color,
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
}));
```

Use

```svelte
<Button color="#333">Click</Button>
```

Output in HTML

```html
<button class="styled-1hfd8np">Click</button>
```

#### Styles and Add subfix

```ts
import styled, { cx } from 'styled-svelte';

const Button = styled(
  'button',
  (props) => ({
    color: props.color,
    border: 'none',
    outline: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#e8e8e8',
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
  }),
  { subffix: 'mybtn' } // optional
);
```

Output in HTML

```html
<button class="styled-1hfd8np-mybtn">Click</button>
```

#### Styles and Combining class names `cx`

```ts
import styled, { cx } from 'styled-svelte';

const Button = styled(
  'button',
  (props) => ({
    color: props.color,
    border: 'none',
    outline: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#e8e8e8',
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
  }),
  { modifier: (props, style) => cx('btn', style) } // optional
);
```

Output in HTML

```html
<button class="btn styled-1hfd8np">Click</button>
```

Remark: `btn` class from other css library (if you want to overide)

#### Styles and Used system-styled

```svelte
<script lang="ts">
import styled from 'styled-svelte';

const Button = styled('button', {
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
  },{ styledSystem: true } // Add this
);
</script>

<Button
  color="#333"
  border="none"
  outline="none"
  padding="10px 20px"
  cursor="pointer"
  backgroundColor="#e8e8e8">Click
</Button>
```

The other props you can used theme. please see [Other props in Component](#other-props-in-component)

### Styles with props in Component

\*_Overide `styled` API_

\*_Build in props for every component_

\*_Padding and Margin multiply by 8_

#### Padding Props

`p` props `p={2}` eq. `padding: 16px;`

`p={[2]}` eq. `padding: 16px;`

`p={[2,4]}` eq. `padding: 16px 32px;`

`p={[2,4,1]}` eq. `padding: 16px 32px 8px;`

`p={[2,4,1,0]}` eq. `padding: 16px 32px 8px 0px;`

`pt` props `pt={2}` eq. `padding-top: 16px;`

`pr` props `pr={2}` eq. `padding-right: 16px;`

`pb` props `pb={2}` eq. `padding-bottom: 16px;`

`pl` props `pl={2}` eq. `padding-left: 16px;`

`px` props `px={2}` eq. `padding-left: 16px; padding-right: 16px;`

`py` props `py={2}` eq. `padding-top: 16px; padding-bottom: 16px;`

#### Margin Props

`m` props `m={2}` eq. `margin: 16px;`

`m={[2]}` eq. `margin: 16px;`

`m={[2,4]}` eq. `margin: 16px 32px;`

`m={[2,4,1]}` eq. `margin: 16px 32px 8px;`

`m={[2,4,1,0]}` eq. `margin: 16px 32px 8px 0px;`

`mt` props `mt={2}` eq. `margin-top: 16px;`

`mr` props `mr={2}` eq. `margin-right: 16px;`

`mb` props `mb={2}` eq. `margin-bottom: 16px;`

`ml` props `ml={2}` eq. `margin-left: 16px;`

`mx` props `mx={2}` eq. `margin-left: 16px; margin-right: 16px;`

`my` props `my={2}` eq. `margin-top: 16px; margin-bottom: 16px;`

#### className Props

`className` props `className="btn"`

#### Sx Props js-in-css

\*_(Styles Object OR Styles Object with Props)_

`sx` props `sx={{color:'#333',padding:'16px'}}` eq. `color: #333; padding: '16px';`

`sx` props `sx={(props)=>({color:props.theme[props.theme.mode].colors.primary,padding:'16px'})}` eq. `color: #1976d2; padding: '16px';`

Remark: `props.theme` work with [ThemeProvider](#theme) only

#### Example Styles with props in Componenent

```svelte
<script lang="ts">
import styled from 'styled-svelte';

const Button = styled('button', {
  color: '#333',
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: '#e8e8e8',
  '&:hover': {
    backgroundColor: '#d8d8d8',
  },
});
</script>

<!-- Default use-->
<Button>Click<Button>

<!-- You can do this: Styles in Component -->
<Button p={[2,4]} m={0.5} sx={{color:'#fff',backgroundColor:'#333',
'&:hover':{backgroundColor:'#555'}}}>Click Me</Button>

<!-- OR Sx with Props -->
<Button p={[2,4]} m={0.5} sx={(props)=>({color:props.theme[props.theme.mode].colors.primary,backgroundColor:'#333',
'&:hover':{backgroundColor:'#555'}})}>Click Me</Button>
```

#### Other props in Component

\*_If `styledSystem: true`, the other props you can used theme. build in, require `string`_

`alignItems` `alignSelf` `background` `backgroundColor` `backgroundImage` `backgroundPosition` `backgroundRepeat` `border` `borderColor` `borderWidth` `borderStyle` `borderRadius` `bottom` `boxShadow` `boxSizing` `color` `columns` `columnGap` `columnSpan` `cursor` `direction` `display` `flexBasis` `flexDirection` `flexGrow` `flexShrink` `flexWrap` `float` `font` `fontFamily` `fontStyle` `fontWeight` `gap` `grid` `gridArea` `gridAutoColumns` `gridAutoFlow` `gridAutoRows` `gridGap` `gridRow` `gridTemplateAreas` `gridTemplateColumns` `gridTemplateRows` `height` `justifyContent` `justifyItems` `justifySelf` `left` `letterSpacing` `listStyle` `lineHeight` `maxHeight` `maxWidth` `minHeight` `minWidth` `objectFit` `objectPosition` `opacity` `outline` `overflow` `overflowX` `overflowY` `position` `pointerEvents` `right` `rotate` `rowGap` `scale` `scrollBehavior` `textAlign` `textDecoration` `textIndent` `textJustify` `textOverflow` `textShadow` `textTransform` `top` `transform` `transition` `translate` `verticalAlign` `visibility` `whiteSpace` `width` `wordBreak` `wordSpacing` `zIndex`

### Forwarding Refs Events

Build in `forwordRefEvents` for every component created by `styled` api

### Theme

#### Wrapped component with `<ThemeProvider {theme}></ThemeProvider>`

```svelte
<script lang="ts">
// src/Main.svelte
import { ThemeProvider } from 'styled-svelte';
import App from './App.svelte';
import { themePallete } from './theme/themePallete';
</script>

<ThemeProvider theme={themePallete}>
  <App />
</ThemeProvider>
```

```ts
// src/main.ts
import Main from './Main.svelte';

const main = new Main({
  target: document.getElementById('app'), // vite
  // target: document.body, // rollup
});

export default main;
```

```ts
// src/theme/themePallete.ts
import type { Theme } from 'styled-svelte';

export type ThemePallete = {
  light: {
    colors: {
      primary: string;
      seconday: string;
      error: string;
      waraing: string;
      info: string;
      success: string;
    };
    backgroundColors: {
      primary: string;
      seconday: string;
      light: string;
      lighter: string;
    };
  };
  mode: string;
};

export const themePallete: Theme<ThemePallete> = {
  theme: {
    // start with theme:{ // Anything If You Want }
    light: {
      colors: {
        primary: '#1976d2',
        seconday: '#9c27b0',
        error: '#df2f2f',
        waraing: '#ed6c02',
        info: '#0288d1',
        success: '#2e7d36',
      },
      backgroundColors: {
        primary: '#fff',
        seconday: '#f8f8f8',
        light: '#e5e5e5',
        lighter: '#e8e8e8',
      },
    },
    mode: 'light',
  },
};
```

#### Use in components by `props.theme`

```ts
import styled from 'styled-svelte';
import type { ThemePallate } from './theme/themePallete';

const Button = styled<ThemePallete>('button', (props) => ({
  color: props.theme[props.theme.mode].colors.primary, // props.theme work with ThemeProvider only
  border: 'none',
  outline: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  backgroundColor: props.theme[props.theme.mode].backgroundColors.light,
  '&:hover': {
    backgroundColor: props.theme[props.theme.mode].backgroundColors.lighter,
  },
}));
```

### Global Styles

`injectGlobal` injects styles into the global scope and is useful for applications such as css resets or font faces.

```ts
import { injectGlobal } from 'styled-svelte';

injectGlobal(
  '*': {
    pading:0,
    margin:0,
    boxSizing: 'borderBox',
  }
);
```

### Color Utility

```ts
import {
  alpha,
  darker,
  lighten,
  lightness,
  saturate,
  grayscale,
  whiten,
  blacken,
  fade,
  opaquer,
} from 'styled-svelte';

alpha('#1976d2', 0.8); // #1976d2cc
darker('#1976d2', 0.2); // #145EA8
lighten('#1976d2', 0.2); // #338DE7
lightness('#1976d2', 0.2); // ##000101
saturate('#1976d2', 0.5); // ##0076FF
grayscale('#1976d2'); // #646464
whiten('#1976d2', 0.8); // #2D80D2
blacken('#1976d2', 0.8); // #1964AE
fade('#1976d2', 0.2); // #0576d2cc
opaquer('#1976d2', 0.8); // #1976d2
```

### Other Api

such as `css` `cx` `injectGlobal` `flush` `hydrate` `merge` `getRegisteredStyles` `keyframes` `sheet` `cache` can read from [@emotion/css](https://www.npmjs.com/package/@emotion/css)

```ts
import {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache
} =  from 'styled-svelte';

```

### Thanks to inspire me

[@emotion/styled](https://www.npmjs.com/package/@emotion/styled)
[styled-components](https://www.npmjs.com/package/styled-components)
[@emotion/css](https://www.npmjs.com/package/@emotion/css)
