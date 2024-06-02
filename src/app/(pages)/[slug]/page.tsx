import React from 'react';
import { Metadata } from 'next';
import defineMetadata from '@/lib/defineMetadata';
import { notFound } from 'next/navigation';
import PageGeneral from '../_components/PageGeneral';

interface PageParamProps {
	params: { slug: string };
}

// export async function generateStaticParams() {
// 	const slugs = await getPagesPaths({ pageType: 'pGeneral' });
// 	const params = slugs.map((slug: string) => ({ slug }));
// 	return params;
// }

const getPageData = async ({ params }: PageParamProps) => {
	const data = { page: { title: 'general page' } };
	return data;
};

type MetadataProps = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({
	params,
	searchParams,
}: MetadataProps): Promise<Metadata> {
	const data = await getPageData({ params });
	return defineMetadata({ data });
}

export default async function PageSlugRoute({ params }: PageParamProps) {
	const data = await getPageData({ params });
	const { page } = data || {};

	if (!page) {
		return notFound();
	}

	return <PageGeneral data={page} />;
}
