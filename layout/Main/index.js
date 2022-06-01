import React from 'react';
import { useRouter } from 'next/router';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion';
import { domTransitionAnim } from '@/lib/animate';

export default function Main({ children, footerRef, siteData = {} }) {
  const router = useRouter();

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={router.asPath}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={domTransitionAnim.transition}
            variants={domTransitionAnim}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </LazyMotion>
      <style global jsx>{`
        main {
          padding: 0.1px 0;
          min-height: calc(var(--s-viewport-height) - var(--s-footer));
        }
      `}</style>
    </>
  );
}
