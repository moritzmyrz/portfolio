<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../global.css';

	import { serializeSchema } from '$lib/utils/serializeSchema';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navbar />
<slot />

<svelte:head>
	{@html serializeSchema({
		'@context': 'https://schema.org/',
		'@type': 'Person',
		name: 'Moritz André Myrseth',
		url: 'https://www.myrseth.dev/',
		sameAs: [
			'https://github.com/moritzmyrz/',
			'https://www.linkedin.com/in/myrseth/',
			'https://www.instagram.com/moritzmyrz/',
			'https://twitter.com/moritzmyrz/',
			'https://www.myrseth.dev/'
		],
		jobTitle: 'Webutvikler',
		worksFor: {
			'@type': 'Organization',
			name: 'Myrseth Technologies AS'
		}
	})}
</svelte:head>
