import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

export const imageBuilder = createImageUrlBuilder({
	projectId: projectId || '',
	dataset: dataset || '',
});

// export const urlForImage = (source: SanityImageSource) => {
// 	// Ensure that source image contains a valid reference
// 	if (!source?.asset?._ref) {
// 		return undefined;
// 	}

// 	return imageBuilder?.image(source).auto('format').fit('max');
// };
