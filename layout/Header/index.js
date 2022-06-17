import React, { useState, useCallback } from 'react';
import theme from '@/styles/theme';
import cx from 'classnames';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import BrandLogo from '@/components/brand-logo';
import Menu from '@/components/menu';
import MobileMenu from './mobile-menu';

function Header({ data }) {
  const windows = useWindowDimensions();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerRef = useCallback(
    (node) => {
      if (node !== null) {
        setTimeout(() => {
          document.documentElement.style.setProperty(
            '--s-header',
            `${node.getBoundingClientRect().height}px`
          );
        }, 100);
      }
    },
    [router]
  );

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuTriggerWidth = 32;
  const mobileMenuTriggerHeight = 25;

  const mobileMenuTriggerDOM = (() => {
    return (
      <>
        <button
          className={cx('mobile-menu-trigger', {
            'is-open': isMobileMenuOpen,
          })}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <hr />
        </button>
        <style jsx>{`
          .mobile-menu-trigger {
            position: fixed;
            top: calc(var(--s-header) / 2);
            right: var(--s-edge);
            width: ${mobileMenuTriggerWidth}px;
            height: ${mobileMenuTriggerHeight}px;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            z-index: 120;
            transition: opacity 0.6s;
            hr,
            &:before,
            &:after {
              content: '';
              display: block;
              position: absolute;
              width: ${mobileMenuTriggerWidth}px;
              height: 2px;
              top: 50%;
              left: 50%;
              border-radius: var(--s-3);
              -webkit-transform: translate(-50%, -50%) rotate(0deg);
              transform: translate(-50%, -50%) rotate(0deg);
              -webkit-transform-origin: center;
              transform-origin: center;
              margin: 0;
              background-color: var(--cr-black);
              transition: 0.4s;
            }
            &:before {
              top: 25%;
            }

            &:after {
              top: 75%;
            }

            hr {
              outline: none;
              border: none;
              transition: opacity 0.3s;
            }
            &.is-open {
              &:before {
                top: 50%;
                transform: translate(-50%, -50%) rotate(140deg);
              }
              &:after {
                top: 50%;
                transform: translate(-50%, -50%) rotate(-140deg);
              }
              hr {
                opacity: 0;
              }
            }
          }
        `}</style>
      </>
    );
  })();

  return (
    <>
      <header ref={headerRef} className="global-header">
        <div
          className={cx('main-header f-h f-a-c c', {
            'is-open': isMobileMenuOpen,
          })}
        >
          {data?.menuMobilePrimary?.items &&
          windows.width < theme.layout.mediaSmall
            ? mobileMenuTriggerDOM
            : data?.menuMobilePrimary?.items && (
                <Menu items={data.menuDesktop.items} />
              )}
        </div>
      </header>
      {data && data?.menuMobilePrimary && (
        <MobileMenu
          menuData={data.menuMobilePrimary}
          isOpen={isMobileMenuOpen}
          closeMenu={closeMobileMenu}
        />
      )}

      <style global jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 99;
          transition: background-color 300ms ease-in 0s;
        }
        .main-header {
          &.is-open {
            background-color: var(--cr-white);
            overflow-y: auto;
            height: 100%;
            transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1) 0s,
              height 0.66s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;
          }

          a {
            color: var(--cr-black);
            margin-right: var(--s-4);

            @media (hover: hover) {
              &:hover {
                color: var(--cr-blue);
              }
            }
          }
        }
      `}</style>
    </>
  );
}

export default Header;
