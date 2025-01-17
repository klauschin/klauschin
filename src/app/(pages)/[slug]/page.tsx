import React from 'react';
import { Metadata } from 'next';
import defineMetadata from '@/lib/defineMetadata';
import { notFound } from 'next/navigation';
import PageGeneral from '../_components/PageGeneral';

interface PageParamProps {
	params?: Promise<{ slug: string }>;
}

// export async function generateStaticParams() {
// 	const slugs = await getPagesPaths({ pageType: 'pGeneral' });
// 	const params = slugs.map((slug: string) => ({ slug }));
// 	return params;
// }

const getPageData = async (params: PageParamProps) => {
	const data = { page: { title: 'general page' } };
	return data;
};

type MetadataProps = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
	props: MetadataProps
): Promise<Metadata> {
	const data = await getPageData(props);
	return defineMetadata({ data });
}

export default async function PageSlugRoute(props: PageParamProps) {
	const data = await getPageData(props);
	const { page } = data || {};

	if (!page) {
		return notFound();
	}

	return <PageGeneral data={page} />;
}
