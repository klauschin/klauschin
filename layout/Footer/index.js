import React, { useEffect, forwardRef } from 'react';
import { useRouter } from 'next/router';
import Menu from '@/components/menu';
import SvgIcon from '@/components/svg-icons';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion';
import { domTransitionAnim } from '@/lib/animate';

const Footer = forwardRef(function Footer(props, ref) {
  const { data = {} } = props;
  const router = useRouter();

  useEffect(() => {
    if (ref.current) {
      document.documentElement.style.setProperty(
        '--s-footer',
        `${ref.current.getBoundingClientRect().height}px`
      );
    }
  }, [ref]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <motion.footer
            ref={ref}
            className="global-footer"
            key={router.asPath}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={domTransitionAnim.transition}
            variants={domTransitionAnim}
          >
            <div className="main-footer bg-subdued">
              {data?.blocks &&
                data.blocks.map((block, key) => (
                  <div key={key} className="footer--block">
                    {block.title && <p className="is-h3">{block.title}</p>}

                    {block.menu?.items && (
                      <Menu items={block.menu.items} className="menu-footer" />
                    )}

                    {block.social && (
                      <div className="menu-social">
                        {block.social.map((link, key) => {
                          return (
                            <a
                              key={key}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <SvgIcon name={link.icon} />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              {data?.siteCopyright && (
                <div className="footer-copyright t-l-1">
                  {data.siteCopyright}
                </div>
              )}
            </div>
          </motion.footer>
        </AnimatePresence>
      </LazyMotion>

      <style global jsx>{``}</style>
    </>
  );
});

export default Footer;
