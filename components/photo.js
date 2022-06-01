import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { buildSrcSet, buildSrc } from '@/lib/helpers';

const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = '(min-width: 940px) 50vw, 100vw',
  layout = 'fill',
  quality = 80,
  className,
}) => {
  // define our aspect ratio if not a background fill
  const aspect = 100 / (photo.customRatio || photo.aspectRatio);
  typeof width === 'number' && typeof height === 'number'
    ? (height / width) * 100
    : 100 / (photo.customRatio || photo.aspectRatio);

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  });

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  });

  if (!photo?.asset) return null;
  return (
    <>
      <figure className={className ? className : null}>
        <Image
          width={width}
          height={height}
          src={src}
          quality={quality}
          srcSet={srcset}
          sizes={sizes}
          layout={layout}
          alt={photo.alt || photo.asset?.altText}
          className={cx(getSize(layout))}
        />
      </figure>
      <style jsx>{`
        figure {
          position: relative;
          margin: 0;
          &:after {
            content: '';
            display: block;
            padding-top: ${aspect}%;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

const getSize = (layout) => {
  switch (layout) {
    case 'intrinsic':
      return 'object-cover';
    case 'fill':
      return 'object-cover';
    case 'contain':
      return 'object-contain';
  }
};

export default Photo;
