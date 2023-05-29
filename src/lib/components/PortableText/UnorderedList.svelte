<script lang="ts">
	import type { ListComponentProps } from '@portabletext/svelte';

	export let portableText: ListComponentProps;

	$: ({ value } = portableText);
</script>

<ul class="list-style-type: a">
	<slot />
</ul>
