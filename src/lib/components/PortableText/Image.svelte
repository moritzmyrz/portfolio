<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		image: {
			extension: string;
			url: string;
			aspectRatio: number;
		};
		caption: string;
	}>;

	$: ({ value } = portableText);
</script>

<figure>
	<img src={urlFor(value).url()} alt={value.caption} class="mt-2 rounded-md" />
</figure>
