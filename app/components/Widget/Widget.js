import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
console.log(css);
export default class Widget extends PureComponent {
	render () {
		return (
			<div className={css.widget}>
				<div className={css.widgetRow}>
					<div className={css.widgetRowItem}>
						<div className={css.widgetIcon}></div>
					</div>
					<div className={css.widgetRowItem}>
						<div className={css.widgetCity}>Moscow</div>
						<div className={css.widgetCountry}>Russia</div>
					</div>
				</div>
			</div>
		)
	}
}