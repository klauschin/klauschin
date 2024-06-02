import React from 'react';
import cx from 'classnames';

export const DotButton = (props) => {
	const { selected, onClick } = props;

	return (
		<button
			type="button"
			onClick={onClick}
			className={cx('c-carousel__dot', {
				'is-selected': selected,
			})}
		/>
	);
};
