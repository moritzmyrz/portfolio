<script lang="ts">
	import dateSort from '$lib/utils/dateSort';

	export let projects: any;

	import { groupProjectsByYear } from '$lib/utils/groupProjectsByYear';
	import ProjectCards from './ProjectCards.svelte';

	const sortedProjects = projects.sort(dateSort);
	const projectsByYear = groupProjectsByYear(sortedProjects);
</script>

{#each Object.entries(projectsByYear).reverse() as [key, value]}
	{#if key === 'now'}
		<h3 class="font-semibold mt-10 border-b pb-1 text-xl">Pågående prosjekter</h3>
	{:else}
		<h3 class="font-semibold mt-10 border-b pb-1 text-xl">
			{key}
		</h3>
	{/if}
	<ProjectCards prosjekter={value} />
{/each}
