'use client';
import React from 'react';
import PageModules from '@/components/PageModules';

export default function PageGeneral({ data }) {
	const { pageModules } = data || {};

	return (
		<div className="page-general c-3">
			{pageModules &&
				pageModules.length > 0 &&
				pageModules?.map((module, i) => (
					<PageModules key={i} module={module} />
				))}
		</div>
	);
}
