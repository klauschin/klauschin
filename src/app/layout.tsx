import '@/styles/main.scss';

import React from 'react';
import Layout from '@/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Klaus Chin',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
