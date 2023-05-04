export function serializeSchema(thing: unknown): string {
	return `<script type="application/ld+json">${JSON.stringify(thing)}</script>`;
}
