import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cn from 'classnames';

export default class Widget extends PureComponent {
	render () {
		const { name, country, temp } = this.props;

		return (
			<div className={css.widget}>
				<div className={css.widgetRow}>
					<div className={css.widgetRowItem}>
						<div className={css.widgetIcon}></div>
					</div>
					<div className={css.widgetRowItem}>
						<div className={css.widgetPlace}>
							<div className={cn(css.widgetCity, css.widgetPlaceItem)}>{name}</div>
							<div className={cn(css.widgetCountry, css.widgetPlaceItem)}>{country}</div>
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
							{temp}°
						</div>
					</div>
				</div>
			</div>
		)
	}
}