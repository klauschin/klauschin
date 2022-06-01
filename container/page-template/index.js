import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./template-home'));
const About = dynamic(() => import('./template-about'));

const PageTemplate = ({ site, page }) => {
  const type = page.pageTemplate;

  switch (type) {
    case 'home':
      return <Home site={site} page={page.pageMainData} />;
    case 'about':
      return <About site={site} page={page.pageMainData} />;

    default:
      return null;
  }
};

export default PageTemplate;
