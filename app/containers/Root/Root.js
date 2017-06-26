import React, { Component } from 'react';
import css from './style.css';

import components from 'components';

const { Widget } = components;
console.log(components)
export default class Root extends Component {
  render () {
    return (
      <div className={css.hello}>
      	<Widget/>
      </div>
    )
  }
}