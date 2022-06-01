import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { getStaticRoute, getActive } from '@/lib/routes';

import CustomLink from '@/components/link';

const Dropdown = ({ id, title, items, onClick }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={cx('dropdown', { 'is-open': isOpen })}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`dropdown-${id}`}
          className="dropdown-toggle"
        >
          {title}
        </button>
        <div id={`dropdown-${id}`} className="dropdown-content">
          <ul className="dropdown-nav">
            {items.map((item, key) => {
              const isStatic = getStaticRoute(item.page?.type);
              const isActive = getActive(isStatic, item.page?.slug, router);

              return (
                <li key={key} className={isActive ? 'is-active' : null}>
                  <CustomLink
                    tabIndex={!isOpen ? -1 : null}
                    link={item}
                    onClick={onClick}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .dropdown {
          &.is-open {
            .dropdown-content {
              opacity: 1;
              pointer-event: auto;
            }
          }
        }
        .dropdown-content {
          opacity: 0;
          pointer-event: none;
        }
        .dropdown-nav {
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default Dropdown;
