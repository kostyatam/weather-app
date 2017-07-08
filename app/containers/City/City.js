import React, { Component } from 'react';
import css from './style.css';
import components from 'components';

const { City: _City } = components;

export default class Root extends Component {
  render () {
  	const { city } = this.props;

    return (
      <div className={css.hello}>
      	{city ? <_City name={city.name} country={city.country} temp={city.temp} /> : '...Loading' }
      </div>
    )
  }
  componentDidMount () {
    const { city, id } = this.props;

    if (!city) {
      this.props.actions.init(id);
    }
  }
}