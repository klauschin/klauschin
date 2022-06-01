import React from 'react';
import useInView from 'react-cool-inview';
import Photo from '@/components/photo';
import cx from 'classnames';

const MarqueeComp = (props) => {
  const { data } = props;
  const { pausable, reverse, speed } = data;

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  });

  const animationSpeed = `${speed}s` || '30s';
  if (!data.items?.length && !props.children) return null;

  return (
    <>
      <div
        className={cx('marquee user-select-disable', {
          'is-pausable': pausable,
        })}
        data-direction={reverse ? 'right' : 'left'}
      >
        <div ref={observe} className="marquee-inner">
          {[...Array(10)].map((e, i) => {
            return (
              <div key={i} className="marquee-block">
                {props.children && props.children}
                {data.items.map((item, key) => {
                  switch (item._type) {
                    case 'simple':
                      return (
                        <span key={key} className="marquee-text t-b-1">
                          {item.text}
                        </span>
                      );
                    case 'photo':
                      return (
                        <div
                          key={key}
                          className="marquee-photo"
                          style={{ flex: item.photo.aspectRatio }}
                        >
                          <Photo
                            photo={item.photo}
                            hasPlaceholder={false}
                            forceLoad={inView}
                          />
                        </div>
                      );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .marquee-block {
          animation-duration: ${animationSpeed};
        }
        .is-pausable {
          @media (hover: hover) {
            &:hover {
              .marquee-block {
                animation-play-state: paused;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default MarqueeComp;
