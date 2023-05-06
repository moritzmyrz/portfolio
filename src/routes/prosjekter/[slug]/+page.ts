import { getProject } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ params }) => {
	const project = await getProject(params.slug);
	console.log(project);
	if (project) return project;

	throw error(404, 'Not found');
}) satisfies PageLoad;
