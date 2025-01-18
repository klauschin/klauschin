import './style.scss';
import React from 'react';
import clsx from 'clsx';

export default function MobileMenuTrigger({
	isMobileMenuOpen,
	onHandleClick,
}: {
	isMobileMenuOpen: boolean;
	onHandleClick: () => void;
}) {
	return (
		<button
			aria-label="Toggle Menu"
			className={clsx('g-mobile-menu-trigger mobile-down-only', {
				'is-open': isMobileMenuOpen,
			})}
			onClick={onHandleClick}
		>
			<div className="line" />
			<div className="line" />
			<div className="line" />
		</button>
	);
}
