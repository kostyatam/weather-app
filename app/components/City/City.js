import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.scss';

export default class City extends PureComponent {
	render () {
		return (
			<div className={css.city}>
				<div className={css.cityPlace}>
					<div className={cn(css.cityPlaceItem, css.cityName)}>
						new york
					</div>
					<div className={cn(css.cityPlaceItem, css.cityCountry)}>
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
					<div className={cn(css.cityDetailsItem, css.cityTemp)}>
						15°
					</div>
					<div className={cn(css.cityDetailsItem, css.cityHumidity)}>
						50%
					</div>
					<div className={cn(css.cityDetailsItem, css.cityWind)}>
						4 MPS
					</div>
				</div>
			</div>
		)
	}
}