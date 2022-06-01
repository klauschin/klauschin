import { getStaticPage } from '@/data';
import PageTemplate from '@/container/page-template';
import Error from 'next/error';
import { Module } from '@/components/modules';
import Link from 'next/link';

function IndexPage({ data }) {
  const { page, site } = data;

  if (!page) {
    return (
      <Error
        title={
          <Link href="http://localhost:3333/studio/desk/pages;homePage">
            <a target="_blank">Go settings</a>
          </Link>
        }
        statusCode="Home Page is not set in Sanity"
      />
    );
  }

  return (
    <>
      {page.pageTemplate === 'default' ? (
        <div className="general-page cr-black">
          {page.modules?.map((module, key) => (
            <Module key={key} index={key} module={module} />
          ))}
        </div>
      ) : (
        <PageTemplate site={site} page={page} />
      )}
      <style jsx>{``}</style>
    </>
  );
}

export async function getStaticProps({ preview = {}, previewData }) {
  const pageData = await getStaticPage(null, {
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      preview,
      data: pageData,
    },
    revalidate: 30,
  };
}

export default IndexPage;
