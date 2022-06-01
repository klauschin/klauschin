import React from 'react';
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('./grid'));
const Hero = dynamic(() => import('./hero'));
const Marquee = dynamic(() => import('./marquee'));
const DividerPhoto = dynamic(() => import('./divider-photo'));
const Freeform = dynamic(() => import('@/components/freeform'));

export const Module = ({ index, module }) => {
  const type = module._type;

  switch (type) {
    case 'grid':
      return <Grid index={index} data={module} />;
    case 'hero':
      return <Hero index={index} data={module} />;
    case 'marquee':
      return <Marquee index={index} data={module} />;
    case 'freeform':
      return <Freeform data={module} classes="content-layout" />;
    case 'dividerPhoto':
      return <DividerPhoto index={index} data={module} />;

    default:
      return null;
  }
};
