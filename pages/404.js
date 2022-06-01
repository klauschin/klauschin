import React from 'react';
import Error from 'next/error';
import { getStaticPage, queries } from '@/data';

import Layout from '@/layout';
import { Module } from '@/components/modules';

const NotFoundPage = ({ data }) => {
  const { page } = data;

  if (!page) {
    return (
      <Error
        title={`"Error Page (404)" is not set in Sanity, or the page data is missing`}
        statusCode="Data Error"
      />
    );
  }

  return (
    <div className="page-content page-404">
      {page.modules?.map((module, key) => (
        <Module key={key} index={key} module={module} />
      ))}
    </div>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await getStaticPage(
    `
    *[_type == "page" && _id == ${queries.errorID}] | order(_updatedAt desc)[0]{
      ...,
      modules[]{
        ${queries.modules}
      },
      title,
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  );

  return {
    props: {
      data: pageData,
    },
  };
}

export default NotFoundPage;
