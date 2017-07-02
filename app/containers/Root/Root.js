import React, { Component } from 'react';
import css from './style.scss';

import components from 'components';

const { Widget, AddButton } = components;

export default class Root extends Component {
  render () {
    return (
      <div className={css.root}>
      	<div className={css.rootItem}>
          <Widget/> 
        </div>
        <div className={css.rootItem}>
          <AddButton/>
        </div>
      </div>
    )
  }
}