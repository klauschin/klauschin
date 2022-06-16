import React, { useState } from 'react';
import Freeform from '@/components/freeform';
import InteractiveGradient from '@/container/three-interactive-water';

export default function TemplateHome({ page, site }) {
  const { pageInfo } = page || {};

  return (
    <>
      <div className="page-content template-home bg-black f-v f-j-c">
        <div className="p-fill">
          <InteractiveGradient />
        </div>
        <div className="c-2">{pageInfo && <Freeform data={pageInfo} />}</div>
      </div>
      <style jsx>{`
        .template-home {
          height: calc(var(--s-viewport-height) - var(--s-header));
          text-align: left;
          color: var(--cr-white);
        }
        .c-2 {
          z-index: 1;
        }
      `}</style>
    </>
  );
}
