<!-- CustomHeading (blockStyle) -->
<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';

	export let portableText: BlockComponentProps;
</script>

<div class="leading-7 [&:not(:first-child)]:mt-6">
	<slot />
</div>
