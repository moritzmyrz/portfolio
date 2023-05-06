<script lang="ts">
	export let projects: any;

	import { groupProjectsByYear } from '$lib/utils/groupProjectsByYear';
	import ProjectCards from './ProjectCards.svelte';

	const projectsByYear = groupProjectsByYear(projects)
</script>

{#each Object.entries(projectsByYear).reverse() as [key, value]}
	{#if key === 'now'}
		<h2 class="font-semibold mt-10 border-b pb-1 text-xl contrast-more:border-neutral-400">
			Pågående prosjekter
		</h2>
	{:else}
		<h2 class="font-semibold mt-10 border-b pb-1 text-xl contrast-more:border-neutral-400">
			{key}
		</h2>
	{/if}
	<ProjectCards prosjekter={value} />
{/each}
