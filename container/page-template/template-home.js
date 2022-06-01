import Freeform from '@/components/freeform';

export default function templateHome({ page, site }) {
  const { pageInfo } = page || {};

  return (
    <>
      <div className="page-content template-home bg-offwhite f-v f-j-c">
        <div className="c-2">{pageInfo && <Freeform data={pageInfo} />}</div>
      </div>
      <style jsx>{`
        .template-home {
          height: calc(var(--s-viewport-height) - var(--s-header));
          text-align: left;
        }
      `}</style>
    </>
  );
}
