import React from 'react';
import defineMetadata from '@/lib/defineMetadata';
import Page404 from './_components/Page404';

export async function generateMetadata() {
	return defineMetadata();
}

export default function NotFound() {
	const data = {};
	return <Page404 data={data} />;
}
