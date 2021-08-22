import React from 'react';
import Body from './Body';

const Layout = (props) => {
  return <Body>{props.children}</Body>;
};

export default Layout;
