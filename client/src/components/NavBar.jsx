import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFocusSearch = this.onFocusSearch.bind(this);
  }

  handleClick(event) {
    console.log(event);
  }

  handleChange(event) {
    var newChar = event.target.value;
    var search = this.state.search;
    this.setState({search: search + newChar})
  }

  onFocusSearch(event) {
    event.target.value = '';
  }

  render() {
    return (
      <div id="movieListHeader">
        <h2>Movie List</h2>
        <div id="searchBar">
          <label>
            <input type="text" name="search" onChange={this.handleChange} defaultValue="Search for a movie..." onFocus={this.onFocusSearch}></input>
          </label>
          <button onClick={this.handleClick}>&#x1F50D;</button>
        </div>
      </div>
    )
  }
}

export default NavBar;
