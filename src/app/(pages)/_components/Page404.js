'use client';
import React from 'react';

export default function Page404({ data }) {
	const { heading } = data || {};

	return (
		<div className="flex flex-co">
			<h1 className="text-4xl">{heading || 'Page not found'}</h1>
		</div>
	);
}
