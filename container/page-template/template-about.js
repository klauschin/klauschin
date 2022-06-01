import Freeform from '@/components/freeform';

export default function templateAbout({ page, site }) {
  const { pageHeading, pageSubheading, pageInfo } = page || {};
  return (
    <>
      <div className="page-content template-about">
        <div className="context">
          <h1>View Source about</h1>
          <p>{pageHeading}</p>
          <p>{pageSubheading}</p>
          {pageInfo && <Freeform data={pageInfo} />}
        </div>
      </div>
      <style jsx>{`
        .template-about {
          .context {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
