export const checkIfActive = ({
	pathName,
	url,
	isChild,
}: {
	pathName: string;
	url: string;
	isChild?: boolean;
}) => {
	if (isChild) {
		return pathName.split('/')[1] == url.split('/')[1];
	} else {
		return pathName == url;
	}
};

export const getRoute = ({ slug }: { slug: string | undefined }): string => {
	switch (slug) {
		case 'home':
			return '/';
		case 'externalUrl':
			return slug;

		default:
			return slug ? `/${slug}` : '';
	}
};

export const getWindowURl = (windowUrl: string) => {
	if (windowUrl.includes('localhost:')) {
		return `http://${windowUrl}`;
	}
	return `https://${windowUrl}`;
};
