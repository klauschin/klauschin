import 'server-only';
import { draftMode } from 'next/headers';
import { client } from '@/sanity/lib/client';
import * as queries from '@/sanity/lib/queries';
import { token } from '@/sanity/env';
import { groq } from 'next-sanity';

export async function sanityFetch({ query, params = {}, tags }) {
	const isPreviewMode = (await draftMode()).isEnabled;

	if (isPreviewMode && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required.'
		);
	}

	return client.fetch(query, params, {
		...(isPreviewMode && {
			token: token,
			perspective: 'previewDrafts',
		}),
		next: {
			revalidate: isPreviewMode ? 0 : false,
			tags,
		},
	});
}

export async function getSiteData() {
	const data = sanityFetch({
		query: `{${queries.site}}`,
		tags: [
			'gAnnouncement',
			'gHeader',
			'gFooter',
			'settingsMenu',
			'settingsGeneral',
			'settingsSharing',
			'settingsIntegration',
			'settingsBrandColors',
		],
	});

	return data;
}

const getPageDataStructure = ({ query }) => {
	const data = `{
		"page": ${query},
		${queries.site}
	}`;

	return data;
};

export async function getPageHomeData() {
	const query = getPageDataStructure({ query: queries.pageHomeQuery });

	return sanityFetch({
		query,
		tags: [`pHome`],
	});
}

export async function get404PageData() {
	const query = getPageDataStructure({ query: queries.page404Query });

	return sanityFetch({
		query,
		tags: [`p404`],
	});
}

export function getPagesPaths({ pageType }) {
	const getQuery = (pageType) => {
		switch (pageType) {
			case 'pGeneral':
				return groq`*[_type == "pGeneral" ].slug.current`;
			default:
				console.warn('Invalid Page Type:', pageType);
				return groq`*[_type == "pGeneral" ].slug.current`;
		}
	};

	const query = getQuery(pageType);
	return client.fetch(query, {}, { token, perspective: 'published' });
}

export function getPageBySlug({ queryParams }) {
	const query = getPageDataStructure({ query: queries.pagesBySlugQuery });

	return sanityFetch({
		query,
		params: queryParams,
		tags: [`pGeneral:${queryParams.slug}`],
	});
}

// new pages below...
// export function getAboutPage(params) {
// 	const query = getPageDataStructure({ query: queries.pageAboutQuery });

// 	return sanityFetch({
// 		query,
// 		params: params,
// 		tags: [`pAbout:${params.slug}`],
// 	});
// }
