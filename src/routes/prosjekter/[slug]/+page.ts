import { getProject } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ params }) => {
	const project = await getProject(params.slug);
	if (project) return project;

	throw error(404, 'Siden finnes ikke');
}) satisfies PageLoad;
