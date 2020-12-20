import { Component } from 'react';

import s from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    search: '',
  };

  //  { page } = this.props;

  onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandel = e => {
    if (this.state.search.trim() === '') {
      alert('Write SEARCH WORD !!!');
      return;
    }
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.onSubmitHandel} className={s.searchForm}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}></span>
          </button>

          <input
            name="search"
            className={s.searchFormInput}
            onChange={this.onChangeHandler}
            type="text"
            placeholder="Search images and photos"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
