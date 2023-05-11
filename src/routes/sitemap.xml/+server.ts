import { getProjectSlugs } from '$lib/utils/sanity';

function formatDate(date: Date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export async function GET() {
	const lastmod = formatDate(new Date());

	const slugs: string[] = await getProjectSlugs();
	return new Response(
		`
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        >
            <url>
                <loc>https://www.myrseth.dev/</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>always</changefreq>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.myrseth.dev/prosjekter/</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>always</changefreq>
                <priority>0.8</priority>
            </url>
            ${slugs.map(
							(slug) =>
								`
                    <url>
                        <loc>https://www.myrseth.dev/prosjekter/${slug}</loc>
                        <lastmod>${lastmod}</lastmod>
                        <changefreq>always</changefreq>
                        <priority>0.8</priority>
                    </url>
                `
						)}
        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
