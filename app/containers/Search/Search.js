import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './style.scss';
import cn from 'classnames';

export default class Search extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    const { value } = e.target;
    const { searchByQuery, changeQuery } = this.props.actions;
    changeQuery(value);
    searchByQuery(value);
  }

  componentWillUnmount () {
    this.props.actions.clearAll();
  }

  render() {
  	const { query, resultList, className } = this.props;

    return (
      <div className={cn(css.search, className)}>
        <Dropdown list={resultList}>
          <Input onChange={this.onChange} placeholder="City name"/>
        </Dropdown>
      </div>
    )
  }
}

const Dropdown =  ({children, list = []}) => {
  return  (
    <div className={cn(css.dropdown, {[css.dropdown_open]: list.length})}>
      <div className={css.dropdownInput}>
        {children}
      </div>
      <ul className={css.dropdownList}>
        {list.map(item => (
          <li key={item.id} className={css.dropdownListItem}>
            <Link to={`/weather/${item.id}`} className={css.dropdownListLink} replace={true}>
              {`${item.name}, ${item.country}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Input = ({onChange, value, placeholder}) => (
  <input className={css.input} value={value} onChange={onChange} placeholder={placeholder}/>
)