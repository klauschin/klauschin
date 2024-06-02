import path from 'path';

const ROOT_PATH = new URL(path.dirname(import.meta.url) + '/src').pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(ROOT_PATH, 'styles')],
		prependData: `@import "/src/styles/__mixin";`,
	},
};

export default nextConfig;
