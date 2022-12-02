<script lang="ts">
  import { setContext } from 'svelte';
  import type { Theme, StyledThemeContext } from '../types';
  import { styledThemeKey } from '../styledThemeKey';
  import { writable } from 'svelte/store';

  export let theme: Theme = { theme: {} };

  $: themStore = writable(theme);

  $: setContext<StyledThemeContext<Theme>>(styledThemeKey, themStore);
</script>

<slot />
