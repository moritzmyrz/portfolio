<script lang='ts'>
	import Placeholder from '$lib/assets/placeholder.jpg';
	import ProsjektKort, { type Prosjekt } from '../components/ProsjektKort.svelte';

	const prosjekter: Prosjekt[] = [
		{
			tittel: 'CSREP',
			beskrivelse: 'CSREP.no/.dk/.se',
			tidspunkt: '2023',
			bilde: Placeholder,
			teknologi: 'TypeScript, Next.js, tRPC & MySQL',
			url: 'https://www.csrep.no'
		},
		{
			tittel: 'Myrseth.dev',
			tidspunkt: 'Mai 2023',beskrivelse: 'Porteføljen',
			bilde: Placeholder,
			teknologi: 'SvelteKit (Svelte), TypeScript & Tailwind CSS',
			url: 'https://www.myrseth.dev'
		},
		{
			tittel: 'Dagens Dato',beskrivelse: 'Nettside for hendelser på en sett dato',
			tidspunkt: '2022',
			bilde: Placeholder,
			teknologi: 'TypeScript & React',
			url: 'https://www.csrep.no'
		}
	]
</script>

<div class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8">
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1
			class="font-semibold tracknig-right mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400"
		>
			Hei! Jeg er Moritz Myrseth
		</h1>
		<p class="mt-6 leading-7 first:mt-0">
			Jeg er en webutvikler med erfaring primært innen JavaScript, React og Microsoft Azure. Jeg
			er interessert i å lære og utvikle meg i teknologibransjen, og liker å holde meg oppdatert på
			nye teknologier på fritiden.
		</p>
		<div class="h-[50px]" />
		<h2
			class="font-semibold tracknig-right mt-10 border-b pb-1 text-2xl contrast-more:border-neutral-400"
		>
			Prosjekter
		</h2>
		<div class="mt-6 leading-7 first:mt-0">
			{#each prosjekter as prosjekt}
				<ProsjektKort prosjekt={prosjekt} />
			{/each}
		</div>
	</main>
</div>
