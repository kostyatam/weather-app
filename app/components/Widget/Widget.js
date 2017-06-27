import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cn from 'classnames';

export default class Widget extends PureComponent {
	render () {
		return (
			<div className={css.widget}>
				<div className={css.widgetRow}>
					<div className={css.widgetRowItem}>
						<div className={css.widgetIcon}></div>
					</div>
					<div className={css.widgetRowItem}>
						<div className={css.widgetPlace}>
							<div className={cn(css.widgetCity, css.widgetPlaceItem)}>Moscow</div>
							<div className={cn(css.widgetCountry, css.widgetPlaceItem)}>Russia</div>
						</div>
					</div>
				</div>
				<div className={cn(css.widgetRow, css.widgetRow_weatherInfo)}>
					<div className={css.widgetRowItem}>
						<div className={css.widgetDescr}>
							Cloudy
						</div>
					</div>
					<div className={css.widgetRowItem}>
						<div className={css.widgetTemperature}>
							-10°
						</div>
					</div>
				</div>
			</div>
		)
	}
}