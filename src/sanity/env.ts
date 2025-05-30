export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-02';

export const dataset = assertValue(
	process.env.NEXT_PUBLIC_SANITY_DATASET,
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;
export const previewSecretId = 'preview.secret';

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
