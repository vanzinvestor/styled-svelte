<script lang="ts">
  import { setContext } from 'svelte';
  import type { AnyProperties, Props, ThemeContext } from '../types';
  import { styledThemeKey } from '../styledThemeKey';
  import { writable, type Writable } from 'svelte/store';

  export let theme: AnyProperties = {};

  const themeStore = writable(theme);

  $: themeStore.set(theme);

  $: setContext<ThemeContext>(styledThemeKey, { theme: themeStore });
</script>

<slot />
