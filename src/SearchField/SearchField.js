import React from 'react';

import css from './SearchField.scss';
import searchIcon from './assets/search-icon.svg';

export default class SearchField extends React.Component {
  static propTypes = {
    query: React.PropTypes.string,
    actionUrl: React.PropTypes.string
  };

  static defaultProps = {
    query: '',
    actionUrl: '/search'
  };

  state = {
    query: this.props.query
  };

  render() {
    return (
      <div className='col-11'>
        <form className={css.searchField} action={this.props.actionUrl}>
          <input
            className={css.searchFieldInput}
            placeholder="Search"
            maxLength="255"
            name="q"
            value={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
          />
          <button className={css.searchFieldButton} type="submit">
            <img width="20" height="20" src={searchIcon} />
          </button>
        </form>
      </div>
    );
  }
}
