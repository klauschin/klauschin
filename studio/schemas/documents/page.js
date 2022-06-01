import React from 'react';
import { Browser } from 'phosphor-react';
import templateHome from './template-home';
import templateAbout from './template-about';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: () => <Browser />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Page Template',
      name: 'pageTemplate',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
        ],
      },
    },
    {
      title: 'Page Home',
      name: 'template_home',
      type: 'object',
      fields: [...templateHome],
      hidden: ({ document }) => {
        if (document?.pageTemplate && document?.pageTemplate === 'home') {
          return false;
        }
        return true;
      },
    },
    {
      title: 'Page About',
      name: 'template_about',
      type: 'object',
      fields: [...templateAbout],
      hidden: ({ document }) => {
        if (document?.slug && document?.pageTemplate === 'about') {
          return false;
        }
        return true;
      },
    },
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'hero' },
        { type: 'freeform' },
        { type: 'marquee' },
        { type: 'dividerPhoto' },
      ],
      hidden: ({ document }) => {
        if (document?.slug && document?.pageTemplate === 'default') {
          return false;
        }
        return true;
      },
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  initialValue: {
    pageTemplate: 'default',
  },
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`;
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      };
    },
  },
};
