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
		<div className="h-screen">
			<div className="p-fill">
				<InteractiveWater />
			</div>
			<div className="h-full flex flex-col justify-center items-center p-contain z-10 relative text-white">
				{content && <CustomPortableText blocks={content} />}
			</div>
		</div>
	);
}
