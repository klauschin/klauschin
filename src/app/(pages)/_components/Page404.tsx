'use client';
import React from 'react';
import InteractiveWater from '@/components/InteractiveWater';

export default function Page404() {
	return (
		<div className="flex flex-co justify-center items-center h-screen">
			<div className="p-fill">
				<InteractiveWater />
			</div>
			<h1 className="text-4xl text-white z-10">404 Page not found</h1>
		</div>
	);
}
