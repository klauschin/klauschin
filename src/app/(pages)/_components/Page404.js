'use client';
import React from 'react';

export default function Page404({ data }) {
	const { heading } = data || {};

	return (
		<div className="p-404 f-v f-j-c">
			<div className="c-4 wysiwyg">
				<h1>{heading || 'Page not found'}</h1>
			</div>
		</div>
	);
}
