<script lang="ts">
  import { setContext } from 'svelte';
  import type { Props, StyledContext } from '../types';
  import { styledThemeKey } from '../styledThemeKey';
  import { writable } from 'svelte/store';

  export let theme: Props = { theme: {} };

  $: themStore = writable(theme);

  $: setContext<StyledContext<Props>>(styledThemeKey, themStore);
</script>

<slot />
