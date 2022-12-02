# styled-svelte

Svelte styled components. The [styled-svelte](https://www.npmjs.com/package/styled-svelte) allow you to write actual CSS code to style your components. this package is framework agnostic and the simplest way to styled components. this package use [@emotion/css](https://www.npmjs.com/package/@emotion/css) to transplied js-in-css to css

## Table of Contents

- [Quick Start](#quick-start)
- [API](#api)
  - [Create Component with html tag — `styled`](#styled)
  - [Create Component with Component — `styled`](#styled-with-component-tag)
  - [Styled with props — `styled` `props`](#styles-with-props)
  - [Styles with props and Combining class names — `styled` `props` `cx`](#styles-with-props-and-combining-class-names-cx)
  - [Styled in Component — `Component`](#styles-in-component)
  - [Theme — `ThemeProvider`](#theme)
  - [Global Styles — `injectGlobal`](#global-styles)
- [Thanks](#thanks-lib-to-inspire)

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

The `styled` function accepts tag and styles as a object and returns a class component.

#### Object Styles with html tag

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

#### Styles with props and Combining class names `cx`

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
  (props, style) => cx('btn', style)
);
```

Use

```svelte
<Button color="#333">Click</Button>
```

Output in HTML

```html
<button color="#333" class="btn css-sxvnf">Click</button>
```

Remark: `btn` class from other css library (if you want to overide)

### Styles in Component

\*_Overide `styled` API_

\*_Common props for every component_

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

#### Sx Props js-in-css _(Styles Object)_

`sx` props `sx={{padding:'16px',color:'#333'}}` eq. `padding: '16px'; color: #333;`

#### Example componenent props

```html
<Button p={[2,4]} m={0.5} sx={{color:'#fff',backgroundColor:'#333',
'&:hover':{backgroundColor:'#555'}}}>Click</Button>
```

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
import { Theme } from 'styled-svelte'

type ThemePallete={
  colors:{
      primary:string;
      seconday:string;
      error:string;
      waraing:string;
      info:string;
      success:string;
    }
    mode:string;
}

// Anything If You Want
export const themePallete:Theme<ThemePallete>={
  theme:{
    colors:{
      primary:'#1976d2',
      seconday:'#9c27b0',
      error:'#df2f2f',
      waraing:'#ed6c02',
      info:'#0288d1',
      success:'#2e7d36'
    }
    mode:'light',
  }
}
```

#### Use in components

```ts
import styled from 'styled-svelte';
import { ThemePallate } from './theme/themePallete';

const Button = styled<ThemePallete>('button', (props) => ({
  color: props.theme.colors.primary, // props.theme work with ThemeProvider only
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

### Global Styles

`injectGlobal` injects styles into the global scope and is useful for applications such as css resets or font faces.

```js
import { injectGlobal } from 'styled-svelte';

injectGlobal(
  '*': {
    pading:0,
    margin:0,
    boxSizing: 'borderBox',
  }
);
```

Remark: methode `css` `cx` `injectGlobal` export direct from [@emotion/css](https://www.npmjs.com/package/@emotion/css)

### Thanks lib to inspire

[styled-components](https://www.npmjs.com/package/styled-components)
[@emotion/styled](https://www.npmjs.com/package/@emotion/styled)
[@emotion/css](https://www.npmjs.com/package/@emotion/css)
