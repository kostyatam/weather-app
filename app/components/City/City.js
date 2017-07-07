import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';

export default class City extends PureComponent {
	render () {
		return (
			<div className={css.city}>
				<div className={css.cityPlace}>
					<div className={css.cityName}>
						new york
					</div>
					<div className={css.cityCountry}>
						u.s.a
					</div>
				</div>
				<div className={css.cityWeather}>
					<div className={css.cityDescr}>
						cloudy
					</div>
					<div className={css.cityIcon}>
						
					</div>
				</div>
				<div className={css.cityDetails}>
					<div className={css.cityDetailsTemp}></div>
					<div className={css.cityDetailsHumidity}></div>
					<div className={css.cityDetailsWind}></div>
				</div>
			</div>
		)
	}
}