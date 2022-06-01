import React from 'react';
import theme from '@/styles/theme';

const PageHeading = ({ pageTitle }) => {
  return (
    <>
      <div className="page-heading c">
        <h1 className="c-2">{pageTitle}</h1>
      </div>
      <style jsx>{`
        .page-heading {
          color: var(--cr-white);
          padding: var(--s-4);
          display: flex;
        }
        @media screen and (max-width: ${theme.layout.mediaMedium}px) {
        }
      `}</style>
    </>
  );
};

export default PageHeading;
