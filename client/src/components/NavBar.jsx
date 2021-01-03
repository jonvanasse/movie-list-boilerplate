import React from 'react';
import AddBar from './AddBar.jsx';
import SearchBar from './SearchBar.jsx';
import ToggleBar from './ToggleBar.jsx';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="navbar">
        <ToggleBar changeView={this.props.changeView} view={this.props.view}/>
        <h2>Movie List</h2>
        <SearchBar searchMovies={this.props.searchMovies}/>
        <AddBar addMovie={this.props.addMovie}/>
      </div>
    )
  }
}

export default NavBar;
