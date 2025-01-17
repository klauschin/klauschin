import cx from 'classnames';
import NextLink from 'next/link';
import React from 'react';

export { NextLink };
export default function CustomLink({
	link,
	title,
	children,
	className,
	ariaLabel,
	isNewTab,
	isButton,
	...props
}) {
	if (!link.route) {
		return null;
	}

	const { route } = link;
	const isOpenNewTab = isNewTab ?? link.isNewTab;

	return (
		<NextLink
			href={route}
			target={route?.match('^mailto:') || isOpenNewTab ? '_blank' : null}
			rel={isOpenNewTab ? 'noopener noreferrer' : null}
			aria-label={ariaLabel || `${title || `Go to ${route}`}`}
			className={cx(className, {
				btn: isButton,
			})}
			{...props}
		>
			{title || children}
		</NextLink>
	);
}
