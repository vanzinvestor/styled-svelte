<script lang="ts">
  import { setContext } from 'svelte';
  import type { AnyProperties, Props, ThemeContext } from '../types';
  import { styledThemeKey } from '../styledThemeKey';
  import { writable, type Writable } from 'svelte/store';

  export let theme: AnyProperties = {};

  $: themStore = writable(theme);

  $: setContext<ThemeContext>(styledThemeKey, { theme: themStore });
</script>

<slot />
