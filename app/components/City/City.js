import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './style.scss';

import Icon from 'components/Icon';

export default class City extends PureComponent {
	render () {
		const { name, country, temp, humidity, wind, icon, description } = this.props;
	
		return (
			<div className={css.city}>
				<div className={css.cityPlace}>
					<div className={cn(css.cityPlaceItem, css.cityName)}>
						{name}
					</div>
					<div className={cn(css.cityPlaceItem, css.cityCountry)}>
						{country}
					</div>
				</div>
				<div className={css.cityWeather}>
					<div className={css.cityIcon}>
						<Icon type={icon}></Icon>
					</div>
					<div className={css.cityDescr}>
						{description}
					</div>
				</div>
				<div className={css.cityDetails}>
					<div className={cn(css.cityDetailsItem, css.cityTemp)}>
						{temp}°
					</div>
					<div className={cn(css.cityDetailsItem, css.cityHumidity)}>
						{humidity}%
					</div>
					<div className={cn(css.cityDetailsItem, css.cityWind)}>
						{wind} MPS
					</div>
				</div>
			</div>
		)
	}
}