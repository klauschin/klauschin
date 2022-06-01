import React from 'react';
import cx from 'classnames';

import BlockContent from '@/components/block-content';

const Freeform = ({ data, classes }) => {
  const { maxWidth, textAlign, content } = data;

  return (
    <BlockContent
      className={cx(maxWidth, textAlign, classes)}
      blocks={content}
    />
  );
};

export default Freeform;
