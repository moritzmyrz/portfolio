<script lang="ts">
	import Projects from '../../components/Projects.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8">
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400">
			Prosjekter
		</h1>
		<div class="mt-6 leading-7 first:mt-0">
			<Projects projects={data.projects} />
		</div>
	</main>
</div>

<svelte:head>
	<title>Prosjekter | Myrseth</title>
	<meta name="title" content="Prosjekter | Myrseth" />
	<meta name="description" content="Her er en liste over prosjekter jeg har jobbet med." />

	<link rel="canonical" href="https://www.myrseth.dev/prosjekter/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.myrseth.dev/prosjekter/" />
	<meta property="og:title" content="Prosjekter | Myrseth" />
	<meta property="og:description" content="Her er en liste over prosjekter jeg har jobbet med." />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.myrseth.dev/prosjekter/" />
	<meta property="twitter:title" content="Prosjekter | Myrseth" />
	<meta
		property="twitter:description"
		content="Her er en liste over prosjekter jeg har jobbet med."
	/>
</svelte:head>
