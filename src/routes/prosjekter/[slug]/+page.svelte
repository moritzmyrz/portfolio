<script lang="ts">
	import Placeholder from '$lib/assets/placeholder.jpg';
	import BlockText from '$lib/components/PortableText/BlockText.svelte';
	import Image from '$lib/components/PortableText/Image.svelte';
	import { getDateRange } from '$lib/utils/getDateRange';
	import { urlFor } from '$lib/utils/image';
	import { serializeSchema } from '$lib/utils/serializeSchema';

	import type { PageData } from './$types';

	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;

	const notypecheck = (x: any) => x;
</script>

<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 dark:text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
			{data.title}
		</h1>
		<div class="leading-7 [&:not(:first-child)]:mt-6">
			{data.description}
		</div>
		<img src={data.mainImage ? urlFor(data.mainImage).url() : Placeholder} alt={`${data.title} cover image`} width="832" height="560" class="mt-3" />
		{#if data.github || data.url}
			<div
				class="mt-6 flex flex-col md:flex-row rounded-lg border py-2 px-4 border-green-200 dark:border-green-200/30 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200"
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
			class="mt-2 flex flex-col md:flex-row rounded-lg border py-2 px-4 contrast-more:border-current border-blue-200 dark:border-blue-200/30 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200"
		>
			<h2 class="font-semibold mr-1">Teknologier:</h2>
			<p>{data.technologies}</p>
		</div>
		<div
			class="mt-2 flex flex-col md:flex-row rounded-lg border py-2 px-4 contrast-more:border-current border-indigo-200 dark:border-indigo-200/30 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200"
		>
			<h2 class="font-semibold mr-1">Tidsperiode:</h2>
			<p>{getDateRange(new Date(data.fromDate), new Date(data.toDate))}</p>
		</div>

		<div class="mt-6 leading-7 first:mt-0">
			<PortableText
				value={data.body}
				components={{
					types: {
						image: Image
					},
					block: {
						normal: BlockText
					}
				}}
			/>
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
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.title,
		image: [data.mainImage ? urlFor(data.mainImage).url() : undefined],
		author: [
			{
				'@type': 'Person',
				name: 'Moritz Myrseth',
				jobTitle: 'Webutvikler'
			}
		]
	})}
</svelte:head>
