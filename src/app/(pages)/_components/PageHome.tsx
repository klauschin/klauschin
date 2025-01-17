'use client';

import type { HomePageData } from '@/types';
import CustomPortableText from '@/components/CustomPortableText';
import InteractiveWater from '@/components/InteractiveWater';

export interface PageHome {
	data: HomePageData;
}

export default function PageHome({ data }: PageHome) {
	const { content } = data || {};

	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="p-fill">
				<InteractiveWater />
			</div>
			<div className="relative z-10 text-white p-contain max-w-5xl">
				{content && <CustomPortableText blocks={content} />}
			</div>
		</div>
	);
}
