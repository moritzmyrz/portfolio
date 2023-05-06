<script lang='ts'>
  export let prosjekter: any;

	import Placeholder from '$lib/assets/placeholder.jpg';
	import { getDateRange } from '$lib/utils/getDateRange';
	import { urlFor } from '$lib/utils/image';
</script>

{#each prosjekter as prosjekt}
	<a
		class="mt-4 cursor-pointer border-solid border-[1px] border-[#eee] h-auto grid-cols-none grid md:grid-cols-[.3fr_.7fr] md:grid-rows-1 md:gap-0 md:h-[200px] p-[10px] rounded-md outline-offset-2 outline-2 outline-transparent"
		href={`/prosjekter/${prosjekt.slug.current}`}
	>
		<div class="relative w-full h-[200px] mb-[1em] md:mb-0 md:h-auto">
			<img
				class="img my-auto absolute w-full inset-0 object-cover block align-middle rounded-md h-full max-h-none md:max-h-[150px] min-h-[100px] max-w-full"
				src={prosjekt.mainImage ? urlFor(prosjekt.mainImage).url() : Placeholder}
				alt="placeholder"
			/>
		</div>
		<div class="flex flex-col ml-[2em] justify-around">
			<p class="text-sm text-orange-500">{prosjekt.technologies}</p>
			<h4 class="block font-semibold text-lg">{prosjekt.title}</h4>
			<p class="text-md">{prosjekt.description}</p>
			<p class="opacity-50 text-sm">{getDateRange(new Date(prosjekt.fromDate), new Date(prosjekt.toDate))}</p>
		</div>
	</a>
{/each}

<style>
	.img {
		overflow-clip-margin: content-box;
		overflow: clip;
	}
</style>