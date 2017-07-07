import React, { Component } from 'react';
import css from './style.scss';

import components from 'components';

const { Widget, AddButton, City } = components;

export default class Root extends Component {
  render () {
    return (
      <div className={css.root}>
      	<div className={css.rootItem}>
          {this.citiesList()}
        </div>
        <div className={css.rootItem}>
          <AddButton/>
        </div>
        <div className={css.rootItem}>
          <City/>
        </div>
      </div>
    )
  }

  citiesList () {
    return this.props.cities.map(city => <Widget key={city.id} name={city.name} country={city.country} temp={city.temp}/>)
  }

  componentWillMount () {
    this.props.actions.init();
  }
}