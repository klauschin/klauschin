'use client';
import './home.scss';
import React from 'react';
import type { HomePageData } from '@/types';
import CustomPortableText from '@/components/CustomPortableText';
import InteractiveGradient from '@/components/InteractiveWater';
export interface PageHome {
	data: HomePageData;
}
export default function PageHome({ data }: PageHome) {
	const { title, slug, content } = data || {};

	return (
		<div className="p-home f-v">
			<div className="p-fill">
				<InteractiveGradient />
			</div>
			<div className="p-home__content c-2">
				{content && <CustomPortableText blocks={content} />}
			</div>
		</div>
	);
}
