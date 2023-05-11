<script lang="ts">
	import Projects from '$lib/components/Projects.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 dark:text-gray-50">
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl border-border-light dark:border-border-dark">
			Hei! Jeg er Moritz Myrseth
		</h1>
		<p class="mt-6 leading-7 first:mt-0">
			Jeg er en webutvikler med erfaring primært innen JavaScript, React og Microsoft Azure. Jeg er
			interessert i å lære og utvikle meg i teknologibransjen, og liker å holde meg oppdatert på nye
			teknologier på fritiden.
		</p>
		<div class="h-[50px]" />
		<h2 class="font-semibold mt-10 border-b pb-1 text-2xl contrast-more:border-neutral-400">
			<a href="/prosjekter">Prosjekter</a>
		</h2>
		<div class="mt-6 leading-7 first:mt-0">
			<Projects projects={data.projects} />
		</div>
	</main>
</div>

<svelte:head>
	<title>Moritz André Myrseth - Webutvikler</title>
	<meta name="title" content="Moritz André Myrseth - Webutvikler" />
	<meta
		name="description"
		content="Jeg er en webutvikler med erfaring primært innen JavaScript, React og Microsoft Azure. Jeg er interessert i å lære og utvikle meg i teknologibransjen, og liker å holde meg oppdatert på nye teknologier på fritiden."
	/>

	<link rel="canonical" href="https://www.myrseth.dev/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.myrseth.dev/" />
	<meta property="og:title" content="Moritz André Myrseth - Webutvikler" />
	<meta
		property="og:description"
		content="Jeg er en webutvikler med erfaring primært innen JavaScript, React og Microsoft Azure. Jeg er interessert i å lære og utvikle meg i teknologibransjen, og liker å holde meg oppdatert på nye teknologier på fritiden."
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.myrseth.dev/" />
	<meta property="twitter:title" content="Moritz André Myrseth - Webutvikler" />
	<meta
		property="twitter:description"
		content="Jeg er en webutvikler med erfaring primært innen JavaScript, React og Microsoft Azure. Jeg er interessert i å lære og utvikle meg i teknologibransjen, og liker å holde meg oppdatert på nye teknologier på fritiden."
	/>
</svelte:head>
