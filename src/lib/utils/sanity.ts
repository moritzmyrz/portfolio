import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '9ndg5tz7',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2023-05-04'
};

export const client = createClient(config);

export async function getProjectSlugs() {
	const slugs = await client.fetch('*[_type == "project"].slug.current');
	return slugs;
}

export async function getProjects() {
	const projects = await client.fetch('*[_type == "project"]');
	return projects;
}

export async function getProject(slug: string) {
	const project = await client.fetch('*[_type == "project" && slug.current == $slug][0]', { slug });
	return project;
}
