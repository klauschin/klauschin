import { UnknownIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import callToAction from '@/sanity/lib/call-to-action';
import customImage from '@/sanity/lib/custom-image';

export default defineType({
	title: 'Page 404',
	name: 'p404',
	type: 'document',
	icon: UnknownIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		callToAction(),
		{
			title: 'Background Images',
			name: 'backgroundImages',
			type: 'array',
			of: [
				{
					title: 'Background Image',
					name: 'backgroundImage',
					type: 'object',
					fields: [
						customImage({
							title: 'Image',
							name: 'image',
							hasDisplayOptions: false,
						}),
						customImage({
							title: 'Image Mobile',
							name: 'imageMobile',
							hasDisplayOptions: false,
						}),
					],
					preview: {
						select: {
							title: 'image.alt',
							media: 'image.asset',
						},
						prepare({ title, media }) {
							return {
								title: title ? title : 'Image',
								media: media,
							};
						},
					},
				},
			],
			hidden: true,
		},
	],
});
