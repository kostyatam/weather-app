import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './style.scss';

import components from 'components';

const { Widget, AddButton, City } = components;

export default class Root extends Component {
  render () {
    return (
      <div className={css.root}>
        {this.citiesList()}
        <div className={css.rootItem}>
          <Link to={`/list`} className={css.rootWrappingLink}>
            <AddButton/>
          </Link>
        </div>
      </div>
    )
  }

  citiesList () {
    return this.props.cities.map(city => (
      	<div  key={city.id} className={css.rootItem}>
          <Link  to={`/weather/${city.id}`} className={css.rootWrappingLink}>
            <Widget {...city}/>
          </Link>
        </div>
    ))
  }

  componentWillMount () {
    this.props.actions.init();
  }
}