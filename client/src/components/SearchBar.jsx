import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: 'the internet for movies...'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocusSearch = this.onFocusSearch.bind(this);
    this.onBlurSearch = this.onBlurSearch.bind(this);
  }

  handleSubmit() {
    var searched = this.state.search;
    this.setState({search: ''});
    this.props.searchMovies(searched);
/*     this.props.changeView('search'); */
  }

  handleChange(event) {
    var newChar = event.target.value;
    this.setState({search: newChar})
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  onFocusSearch(event) {
    this.setState({search: ''})
    event.target.value = '';
  }

  onBlurSearch(event) {
    this.setState({search: 'the internet for movies...'})
    event.target.value = 'the internet for movies...';
  }

  render() {
    return (
      <div className="navbar">
        <button onClick={this.handleSubmit}>Search</button>
        <input type="text" name="search" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue={this.state.search} onFocus={this.onFocusSearch} onBlur={this.onBlurSearch}></input>
      </div>
    )
  }
}

export default SearchBar;
