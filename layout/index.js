import React from 'react';
import Body from './Body';
import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => {
  return (
    <>
      <Head>
        <Link
          rel="preload"
          href="/fonts/font-aw-conqueror-light.ttf"
          as="font"
          crossOrigin=""
        />
        <Link
          rel="preload"
          href="/fonts/font-aw-conqueror-light.woff"
          as="font"
          crossOrigin=""
        />
        <Link
          rel="preload"
          href="/fonts/font-aw-conqueror-light.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Body>{props.children}</Body>
    </>
  );
};

export default Layout;
