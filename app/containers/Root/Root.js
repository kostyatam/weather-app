import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      </div>
    )
  }

  citiesList () {
    return this.props.cities.map(city => (
    <Link key={city.id}  to={`/${city.id}`} className={css.rootWrappingLink}>
      <Widget name={city.name} country={city.country} temp={city.temp}/>
    </Link>
    ))
  }

  componentWillMount () {
    this.props.actions.init();
  }
}