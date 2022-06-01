import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const MobileMenu = ({ menuData, isOpen, closeMenu }) => {
  return (
    <>
      <aside
        className={cx('mobile-menu', {
          'is-open': isOpen,
        })}
      >
        <ul className="menu-links">
          {menuData &&
            menuData.items.map((item) => {
              const navLink = item.page.slug === 'home' ? '/' : item.page.slug;
              return (
                <li key={nanoid()}>
                  <Link href={navLink}>
                    <a className="t-b-1" onClick={closeMenu}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </aside>
      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: var(--s-header);
          z-index: 1;
          right: 0px;
          bottom: 0px;
          width: 100%;
          max-width: 420px;
          height: calc(100% - var(--s-header));
          background: rgb(255, 255, 255);
          border: 1px solid rgb(229, 232, 235);
          overflow: auto;
          filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
          transition: transform 0.3s var(--a-panel);
          transform: translate3d(100%, 0px, 0px);

          &.is-open {
            transform: translate3d(0px, 0px, 0px);
          }
        }
        .menu-links {
          li {
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid var(--cr-subdued);
            a {
              padding: 0 var(--s-2);
            }
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
