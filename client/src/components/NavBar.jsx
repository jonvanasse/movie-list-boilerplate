import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocusSearch = this.onFocusSearch.bind(this);
  }

  handleSubmit() {
    var searched = this.state.search;
    this.setState({search: ''});
    this.props.searchMovies(searched);
  }

  handleChange(event) {
    var newChar = event.target.value;
    this.setState({search: newChar})
  }

  onFocusSearch(event) {
    this.setState({search: ''})
    event.target.value = '';
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div id="movieListHeader">
        <h2>Movie List</h2>
        <div id="searchBar">
          <label onSubmit={this.handleSubmit}>
            <input type="text" name="search" onKeyPress={this.handleKeyPress} onChange={this.handleChange} defaultValue="Search for a movie..." onFocus={this.onFocusSearch}></input>
          </label>
          <button onClick={this.handleSubmit}>&#x1F50D;</button>
        </div>
      </div>
    )
  }
}

export default NavBar;
