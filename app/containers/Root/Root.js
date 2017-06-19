import React, { Component } from 'react';
import css from './style.css';

export default class Root extends Component {
  render() {
  	const { user } = this.props;
    return (
      <div className={css.hello}>
      	Hello, {user}!
      </div>
    )
  }
}