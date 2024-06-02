'use client';
import './style.scss';
import React, { useState, ReactNode } from 'react';
import cx from 'classnames';
import SvgIcons from '@/components/SvgIcons';
import { motion } from 'framer-motion';

const accordionAnim = {
	open: {
		opacity: 1,
		height: 'auto',
	},
	closed: {
		opacity: 0,
		height: 0,
	},
};

interface AccordionProps {
	title: string;
	children: ReactNode;
	toggleClassName?: string;
	className?: string;
	icon?: string;
}

export default function Accordion({
	title,
	children,
	toggleClassName,
	className,
	icon,
}: AccordionProps) {
	const [isActive, setActive] = useState(false);

	const toggleActive = () => {
		setActive(!isActive);
	};

	return (
		<div
			className={cx('c-accordion', className, {
				'is-active': isActive,
			})}
		>
			<button
				type="button"
				aria-expanded={isActive}
				aria-label="Toggle accordion"
				className={cx(
					'c-accordion__toggle f-h f-a-c user-select-disable',
					toggleClassName,
					{
						'has-icon': icon,
					}
				)}
				onClick={toggleActive}
			>
				{icon && <SvgIcons type={icon} />}
				<div className="c-accordion__title">{title}</div>
				<div className="icon-caret-bottom" />
			</button>

			<motion.div
				className="c-accordion__content"
				aria-hidden={!isActive}
				variants={accordionAnim}
				initial={isActive ? 'open' : 'closed'}
				animate={isActive ? 'open' : 'closed'}
				transition={{ duration: 0.4, ease: [0, 1, 0.8, 1] }}
			>
				<div className="c-accordion__content-interior">{children}</div>
			</motion.div>
		</div>
	);
}
