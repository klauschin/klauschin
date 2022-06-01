import React, { useRef, useEffect, useCallback } from 'react';
import HeadSEO from '@/components/head-seo';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ siteData = {}, pageData = {}, schema, children }) => {
  const footerRef = useRef(null);

  return (
    <>
      <HeadSEO site={siteData} page={pageData} schema={schema} />
      {siteData.gaID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${siteData.gaID}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteData.gaID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      {siteData.gtmID && (
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${siteData.gtmID}');`,
          }}
        />
      )}
      <Header data={siteData.header} />
      <Main footerRef={footerRef} siteData={siteData}>
        {children}
      </Main>
      <Footer ref={footerRef} data={siteData.footer} />
    </>
  );
};

export default Layout;
