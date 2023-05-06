<!-- CustomHeading (blockStyle) -->
<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  export let portableText: BlockComponentProps;
</script>

<div class="mt-2">
  <slot />
</div>