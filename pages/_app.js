import React, { useState, useEffect } from 'react';
import '@/styles/scss/index.scss';
import { useRouter } from 'next/router';
import * as ga from '@/lib/ga';
import Layout from '@/layout';
import useWindowDimensions from '@/hooks/useWindowDimensions';

function App({ Component, pageProps }) {
  const { data } = pageProps;
  const router = useRouter();
  useWindowDimensions();
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      if (data.site.gaID) {
        ga.pageview(url, data.site.gaID);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, data]);

  if (isSSR) return;

  return (
    <Layout siteData={data.site} pageData={data.page}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
