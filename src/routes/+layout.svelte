<script>
	import Navbar from '../components/Navbar.svelte';
	import '../global.css';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({mode: dev ? 'development' : 'production'})
</script>

<Navbar />
<slot />
