'use client';
import React from 'react';
import type { HomePageData } from '@/types';
import CustomPortableText from '@/components/CustomPortableText';

export interface PageHome {
	data: HomePageData;
}

export default function PageHome({ data }: PageHome) {
	const { content } = data || {};

	return (
		<div className="h-screen">
			<div className="">{/* <InteractiveGradient /> */}</div>
			<div className="h-full flex flex-col justify-center items-center p-contain">
				{content && <CustomPortableText blocks={content} />}
			</div>
		</div>
	);
}
