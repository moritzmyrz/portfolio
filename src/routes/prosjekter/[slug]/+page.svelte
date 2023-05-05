<script lang="ts">
	import Placeholder from '$lib/assets/placeholder.jpg';
	import { getDateRange } from '$lib/utils/getDateRange';
	import { urlFor } from '$lib/utils/image';
	import { serializeSchema } from '$lib/utils/serializeSchema';
	import { PortableText } from '@portabletext/svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8">
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400">
			{data.title}
		</h1>
		<div class="my-3 leading-7 first:mt-0">
			{data.description}
		</div>
		<img src={data.mainImage ? urlFor(data.mainImage).url() : Placeholder} alt="" />
		{#if data.github || data.url}
		<div
			class="mt-6 flex rounded-lg border py-2 px-4 contrast-more:border-current border-green-200 bg-green-100 text-green-900"
		>
			<h2 class="font-semibold mr-1">Lenker:</h2>
			{#if data.github}
			<p class="mr-1"><a class="hover:underline" href={data.github}>GitHub</a></p>
			{/if}
			{#if data.url}
			<p><a class="hover:underline" href={data.url}>Nettside</a></p>
			{/if}
		</div>
		{/if}
		<div
			class="mt-2 flex rounded-lg border py-2 px-4 contrast-more:border-current border-blue-200 bg-blue-100 text-blue-900"
		>
			<h2 class="font-semibold mr-1">Teknologier:</h2>
			<p>{data.technologies}</p>
		</div>
		<div
			class="mt-2 flex rounded-lg border py-2 px-4 contrast-more:border-current border-indigo-200 bg-indigo-100 text-indigo-900"
		>
			<h2 class="font-semibold mr-1">Tidsperiode:</h2>
			<p>{getDateRange(new Date(data.fromDate), new Date(data.toDate))}</p>
		</div>

		<div class="mt-6 leading-7 first:mt-0">
			<PortableText value={data.body} />
		</div>
	</main>
</div>

<svelte:head>
	<title>{data.title} / Prosjekter | Myrseth</title>
	<meta name="title" content={`${data.title} / Prosjekter | Myrseth`} />
	<meta name="description" content={data.description} />

	<link rel="canonical" href={`https://www.myrseth.dev/prosjekter/${data.slug}`} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://www.myrseth.dev/prosjekter/${data.slug}`} />
	<meta property="og:title" content={`${data.title} / Prosjekter | Myrseth`} />
	<meta property="og:description" content={data.description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`https://www.myrseth.dev/prosjekter/${data.slug}`} />
	<meta property="twitter:title" content={`${data.title} / Prosjekter | Myrseth`} />
	<meta property="twitter:description" content={data.description} />

	{@html serializeSchema({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "image": [
        data.mainImage ? urlFor(data.mainImage).url() : undefined,
       ],
      "author": [{
          "@type": "Person",
          "name": "Moritz Myrseth",
          "jobTitle": 'Webutvikler'
        }]
    })}
</svelte:head>
