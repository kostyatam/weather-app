import React, { Component } from 'react';
import css from './style.scss';

import components from 'components';

const { Widget, AddButton } = components;

export default class Root extends Component {
  render () {
    const cities = this.props.cities;
    
    return (
      <div className={css.root}>
      	<div className={css.rootItem}>
          {cities.map(city => <Widget key={city.id} name={city.name} country={city.country} temp={city.temp}/>)}
        </div>
        <div className={css.rootItem}>
          <AddButton/>
        </div>
      </div>
    )
  }
  componentWillMount () {
    this.props.actions.init();
  }
}