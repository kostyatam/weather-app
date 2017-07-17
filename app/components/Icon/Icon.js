import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';
import cn from 'classnames';

export default class Icon extends PureComponent {
	render () {
		return (
			<div className={cn(css.icon, css['icon_' + this.props.type])}></div>
		)
	}
}