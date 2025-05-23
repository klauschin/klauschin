'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity/[[...tool]]/page.tsx` route
 */
import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from '@/sanity/schema';
import deskStructure from './src/sanity/deskStructure';
export const previewBaseURL = '/api/preview';

export default defineConfig({
	basePath: '/sanity',
	title: 'Klaus Chin',
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		structureTool({ structure: deskStructure }),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
		colorInput(),
		media(),
	],
});
